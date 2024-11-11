import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Tache from "@/components/atoms/Tache/Tache";

const ListeTaches: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

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
