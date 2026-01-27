import './App.css';
import FruitList from './components/Fruits';
import { Separator } from '@/components/ui/separator';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-start justify-center pt-24">
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold">Fruit Management App</h1>
            <p className="text-sm text-muted-foreground mt-1">Add, view and manage your fruits.</p>
          </div>
        </header>

        <Separator className="mb-6" />

        <main>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <FruitList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;