# Backend Setup

Dieses Verzeichnis enthält das FastAPI-Backend. Wenn Ihre IDE Meldungen wie "Unresolved reference 'pydantic'" anzeigt, verwendet die IDE sehr wahrscheinlich nicht das Projekt-venv, in dem die Abhängigkeiten installiert wurden.

Kurzanleitung (macOS, zsh)

1) Ins backend-Verzeichnis wechseln

```bash
cd /Users/gp/Developer/React+FastAPI+Docker_1/backend
```

2) Virtuelles Environment erstellen (falls noch nicht vorhanden) und aktivieren

```bash
python3 -m venv venv
source venv/bin/activate
```

3) Abhängigkeiten installieren

```bash
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

4) Schnelltest (Module importierbar?)

```bash
# prüft, ob FastAPI/Pydantic/Uvicorn importierbar sind
./venv/bin/python -c "import importlib; print(importlib.import_module('fastapi').__version__); print(importlib.import_module('pydantic').__version__)"
```

5) App starten

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

IDE-Anweisungen

- PyCharm / IntelliJ:
  - Preferences -> Project -> Python Interpreter -> Add -> Existing environment -> wählen Sie: `/Users/gp/Developer/React+FastAPI+Docker_1/backend/venv/bin/python`.
  - Nach Auswahl des Interpreters sollte PyCharm die Installationen erkennen und `Unresolved reference`-Warnungen verschwinden.

- VSCode:
  - Cmd+Shift+P -> "Python: Select Interpreter" -> wählen Sie `/Users/gp/Developer/React+FastAPI+Docker_1/backend/venv/bin/python`.
  - Ich habe zusätzlich eine `backend/.vscode/settings.json` angelegt, die VSCode hilft, das venv automatisch auszuwählen (siehe Datei).

Wenn Probleme weiterhin bestehen

- Vergewissern Sie sich, dass die IDE-Konfiguration tatsächlich auf das Projekt-venv zeigt (manchmal ist ein globaler Interpreter eingestellt).
- Falls Sie Pylance verwenden und weiterhin Module nicht gefunden werden, können Sie `python.analysis.extraPaths` in den VSCode-Einstellungen auf den `site-packages`-Pfad Ihres venv setzen (z. B. `venv/lib/python3.14/site-packages`).

Wenn Sie möchten, füge ich noch eine kurze Anleitung für JetBrains-Projekte hinzu (Settings-Export) oder passe die VSCode-Einstellungen auf Ihr System an. Sag mir bitte, welche IDE Sie verwenden, falls Sie detailliertere Schritte möchten.
