import React from "react";
import Tache from "@/components/atoms/Tache/Tache";
import { useTaskContext } from "@/contexts/TaskContext";

const ListeTaches: React.FC = () => {
  const { tasks } = useTaskContext();
  return (
    <div>
      <h2>Mes tâches</h2>
      {tasks.map((tache) => (
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
