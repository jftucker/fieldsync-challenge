# Installation Instructions:

This installation document assumes that docker and node have been correctly installed on your machine, this can be verified by checking the versions using:

```
docker --version
docker-compose --version
node --version
npm --version
```

After cloning this repo, build the docker images from the parent directory:

```
docker-compose build
```

After a successful build, start the containers:

```
docker-compose up
```

The backend is now running in two containers, one containing the server, the other containing the postgres database.

Open a new terminal and CD into the front end directory:

```
cd ./frontend
```

Install the dependencies

```
npm i
```

Run the frontend

```
npm run dev
```

Follow the link in the terminal (or point your browser to http://localhost:5173/) to access and interact with the app.
