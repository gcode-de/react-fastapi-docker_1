"""
Leichter Entrypoint, damit du `python -m uv` im `backend`-Ordner verwenden kannst.

Verwendung:
  cd backend
  python -m uv

Das Modul importiert `app` aus `main.py` und startet uvicorn.
"""

from importlib import import_module
import sys


def main():
    try:
        import uvicorn
    except ImportError:
        print(
            "Required dependency 'uvicorn' is not installed.\n"
            "Install it with: python -m pip install -r requirements.txt\n"
            "Or: python -m pip install uvicorn"
        )
        sys.exit(1)

    try:
        mod = import_module("main")
    except Exception as exc:
        print(f"Failed to import main.py: {exc}")
        sys.exit(1)

    app = getattr(mod, "app", None)
    if app is None:
        print("No FastAPI `app` found in main.py (expected variable `app`).")
        sys.exit(1)

    # Starte den Uvicorn-Server. Parameter können bei Bedarf angepasst werden.
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)


if __name__ == "__main__":
    main()
