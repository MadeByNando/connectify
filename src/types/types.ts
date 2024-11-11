export interface Tache {
  id: number;
  titre: string;
  terminee: boolean;
  priorite: 'faible' | 'moyenne' | 'élevée';
}
