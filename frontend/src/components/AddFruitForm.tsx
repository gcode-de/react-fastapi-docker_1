import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type AddFruitFormProps = {
  addFruit: (fruitName: string) => void;
};

const AddFruitForm = ({ addFruit }: AddFruitFormProps) => {
  const [fruitName, setFruitName] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fruitName.trim()) {
      addFruit(fruitName.trim());
      setFruitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <Input
          type="text"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          placeholder="Enter fruit name"
          aria-label="Fruit name"
        />
        <Button type="submit" variant="secondary">Add Fruit</Button>
      </div>
    </form>
  );
};

export default AddFruitForm;