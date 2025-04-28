
# Loop Boilerplate

![](/public/loop-boilerplate.png)

Merci d'avoir acheté ma boilerplate de portfolio. Vous êtes libre de le modifier et de l'utiliser comme bon vous semble. Si vous avez des questions ou si vous avez besoin d'aide, n'hésitez pas à me contacter.

Je recommande d'utiliser Webstorm comme IDE pour éditer le code. Vous pouvez le télécharger gratuitement sur le site de JetBrains. Vous pourrais directement lié le projet à votre compte GitHub pour synchroniser les modifications. 

> Pour déployer le site sur Vercel, vous devez créer un compte et configurer un dépôt GitHub. Vous pouvez suivre les instructions sur le site de Vercel.

Vous devez également avoir Node.js et npm installés sur votre machine. Consultez la section suivante pour les instructions.

### Installation : Node.js, npm et pnpm

1. **Installer Node.js**
    - Téléchargez la version LTS depuis [nodejs.org](https://nodejs.org/) et installez-la.
    - Vérifiez l'installation :
      ```bash
      node -v
      npm -v
      ```

2. **Installer pnpm**
    - Installez pnpm globalement :
      ```bash
      npm install -g pnpm
      ```  
    - Vérifiez :
      ```bash
      pnpm -v
      ```

3. **Configurer le projet**
    - Installez les dépendances :
      ```bash
      pnpm install
      ```  
    - Lancez le serveur de développement :
      ```bash
      pnpm run dev
      ```  
    - Ouvrez votre navigateur et accédez à l'adresse [http://localhost:3000](http://localhost:3000)

🎉 Votre environnement est prêt !

### Fichiers de configuration

- `/src/config/site-config.ts` : Configuration globale du site
- `/src/config/nav.config.ts` : Configuration du menu de navigation
- `/src/config/exams-config.ts` : Configuration des ressources liées aux épreuves du BTS SIO
- `/src/config/reports-config.ts` : Configuration des rapports de veille technologique

### Ajout de fichiers

Pour ajouter des ressources sur le projet, il faut ajouter les fichiers dans le dossier `/public`. Les fichiers seront alors disponibles sur le site.
Par exemple, mon avatar est directement appelé avec le chemin `/avatar.png`.


