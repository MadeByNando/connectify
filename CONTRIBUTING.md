# CONTRIBUTING.md

## Guide de Contribution pour Connectify

Merci de vouloir contribuer à Connectify ! Ce guide vous aidera à suivre les conventions et les pratiques en place pour maintenir un code cohérent et de haute qualité.

### Prérequis

Assurez-vous d’avoir les éléments suivants installés sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (ou yarn)
- ESLint et Prettier configurés dans votre éditeur pour vérifier le code automatiquement

---

## Structure du Code

1. **Organisation des Dossiers** : Nous utilisons une structure de type Atomic Design :

   - `src/components/atoms` : Composants de base réutilisables
   - `src/components/molecules` : Composants composés d’atomes
   - `src/components/organisms` : Composants complets constitués de molécules et d’atomes

2. **Nommage** :
   - Les composants doivent utiliser le **PascalCase** (`MonComposant.tsx`).
   - Les fichiers de style ou de contexte doivent suivre le même nom que leur composant (`MonComposant.css` ou `MonContexte.tsx`).
   - Les variables et fonctions doivent utiliser le **camelCase** (`maFonction`).

---

## Conventions de Codage

Pour maintenir la lisibilité et la cohérence du code, respectez les conventions suivantes :

1. **Formatage** : Utilisez Prettier pour formater automatiquement le code.
2. **Typage** : Utilisez TypeScript de manière stricte. Évitez `any` autant que possible.
3. **Commentaire** : Utilisez des commentaires pour les sections complexes et documentez les fonctions en utilisant `/** ... */` au-dessus des définitions de fonctions.
4. **Accessibilité** : Assurez-vous que les composants UI respectent les standards d'accessibilité (ex. : alt pour les images).

---

## Workflow Git

1. **Branches de Fonctionnalité** : Travaillez toujours sur une branche dédiée pour chaque fonctionnalité ou correction. Utilisez le format suivant pour les noms de branches :

   - `feature/nom-fonctionnalite` pour les nouvelles fonctionnalités
   - `fix/description-du-bug` pour les corrections de bug

2. **Commits** : Utilisez des messages de commit clairs et précis, selon le format :

   - `feat: description de la fonctionnalité` pour une nouvelle fonctionnalité
   - `fix: description du bug corrigé` pour une correction
   - `docs: mise à jour de la documentation`
   - `style: formatage du code`
   - `refactor: modification du code sans ajout de fonctionnalité`

3. **Pull Requests** :
   - Assurez-vous que la branche est à jour avec `main` avant de soumettre une Pull Request (PR).
   - Décrivez précisément la modification dans la PR et incluez les informations pertinentes.

---

## Exécution des Tests et Vérifications de Qualité

Avant de soumettre un commit, exécutez les vérifications suivantes :

1. **Linting et Formatage** :

   - ESLint et Prettier doivent être exécutés automatiquement sur les fichiers modifiés grâce à Husky. Si un fichier n’est pas conforme, corrigez les erreurs avant de committer.

2. **Commande de Linting** :

   - Vous pouvez exécuter manuellement ESLint avec la commande suivante pour vérifier les erreurs de code :

     ```bash
     npm run lint
     ```

3. **Formatage** :

   - Pour vérifier manuellement le formatage avec Prettier, exécutez :

     ```bash
     npm run format
     ```

4. **Tests Unitaires** :

   - Si vous avez modifié un composant, assurez-vous que ses tests sont à jour et passent avec succès. Exécutez les tests avec :

     ```bash
     npm test
     ```

---

## Exemple de Commandes Git

Voici un exemple de workflow Git typique :

1. Créez une nouvelle branche pour votre fonctionnalité ou correction :

   ```bash
   git checkout -b feature/ajout-theme-sombre
   ```

2. Faites vos modifications et ajoutez les fichiers modifiés :

   ```bash
   git add .
   ```

3. Validez les changements en respectant le format des messages de commit :

   ```bash
   git commit -m "feat: ajout de la fonctionnalité de thème sombre"
   ```

4. Mettez à jour votre branche avec `main` :

   ```bash
   git checkout main
   git pull origin main
   git checkout feature/ajout-theme-sombre
   git rebase main
   ```

5. Poussez votre branche et ouvrez une Pull Request sur GitHub :

   ```bash
   git push origin feature/ajout-theme-sombre
   ```

---

## Ressources Supplémentaires

- [Documentation de React](https://reactjs.org/docs/getting-started.html)
- [Guide ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Guide Prettier](https://prettier.io/docs/en/index.html)
- [Documentation sur les messages de commit](https://www.conventionalcommits.org)

Merci de contribuer à Connectify ! Assurez-vous de suivre ces directives pour garantir une collaboration fluide et un code de qualité.
