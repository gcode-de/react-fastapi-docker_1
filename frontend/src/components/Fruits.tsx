import { useEffect, useState } from 'react';
import api from "../api";
import AddFruitForm from './AddFruitForm';
import { Separator } from '@/components/ui/separator';

const FruitList = () => {
  type Fruit = { name: string };

  const [fruits, setFruits] = useState<Fruit[]>([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('/fruits');
      setFruits(response.data.fruits || []);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName: string) => {
    try {
      await api.post('/fruits', { name: fruitName });
      await fetchFruits();  // Refresh the list after adding a fruit
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Fruits List</h2>
      </div>

      <div className="bg-card border rounded-md overflow-hidden">
        {fruits.length === 0 ? (
          <div className="p-4 text-muted-foreground">No fruits yet.</div>
        ) : (
          fruits.map((fruit, index) => (
            <div key={index}>
              <div className="flex items-center justify-between p-4">
                <span className="text-sm">{fruit.name}</span>
              </div>
              {index < fruits.length - 1 && <Separator />}
            </div>
          ))
        )}
      </div>

      <div className="mt-4">
        <AddFruitForm addFruit={addFruit} />
      </div>
    </div>
  );
};

export default FruitList;