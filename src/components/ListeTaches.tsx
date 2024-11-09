import React, { useState } from "react";
import Tache from "@/components/Tache";
import { Tache as TacheType } from "@/types/types";

const ListeTaches: React.FC = () => {
  // État initial avec quelques tâches
  const [taches] = useState<TacheType[]>([
    {
      id: 1,
      titre: "Apprendre TypeScript",
      terminee: false,
      priorite: "élevée",
    },
    {
      id: 2,
      titre: "Créer l'interface Connectify",
      terminee: true,
      priorite: "moyenne",
    },
  ]);

  return (
    <div>
      <h2>Mes tâches</h2>
      {taches.map((tache) => (
        <Tache
          key={tache.id}
          titre={tache.titre}
          terminee={tache.terminee}
          priorite={tache.priorite}
        />
      ))}
    </div>
  );
};

export default ListeTaches;
