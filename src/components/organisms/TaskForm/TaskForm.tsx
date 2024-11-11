import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/store/taskSlice';
import { Tache } from '@/types/types';
import TextInput from '@/components/atoms/TextInput/TextInput';
import Button from '@/components/atoms/Button/Button';

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [titre, setTitre] = useState('');
  const [priorite, setPriorite] = useState<'faible' | 'moyenne' | 'élevée'>(
    'moyenne'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Tache = {
      id: Date.now(),
      titre,
      terminee: false,
      priorite,
    };
    dispatch(addTask(newTask));
    setTitre('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Titre:
          <TextInput
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Entrez le titre de la tâche"
          />
        </label>
      </div>
      <div>
        <label>
          Priorité:
          <select
            value={priorite}
            onChange={(e) => setPriorite(e.target.value as Tache['priorite'])}
          >
            <option value="faible">Faible</option>
            <option value="moyenne">Moyenne</option>
            <option value="élevée">Élevée</option>
          </select>
        </label>
      </div>
      <Button label="Ajouter la tâche" type="submit" />
    </form>
  );
};

export default TaskForm;
