import React from 'react';
import { Tache as TacheType } from '@/types/types';

interface TacheProps {
  titre: string;
  terminee: boolean;
  priorite: TacheType['priorite'];
}

const Tache: React.FC<TacheProps> = ({ titre, terminee, priorite }) => {
  return (
    <div>
      <h3>{titre}</h3>
      <p>Statut : {terminee ? 'Terminée' : 'En cours'}</p>
      <p>Priorité : {priorite}</p>
    </div>
  );
};

export default Tache;
