# Utiliser l'image Node.js Alpine comme base pour la construction de l'application
FROM node:alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install --silent

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Utiliser l'image nginx Alpine comme base pour le conteneur final
FROM nginx:alpine

# Supprimer le fichier de configuration par défaut de nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copier les fichiers de construction de l'application Angular dans le répertoire nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour le serveur nginx
EXPOSE 80

# Commande par défaut pour exécuter nginx dans le conteneur
CMD ["nginx", "-g", "daemon off;"]
