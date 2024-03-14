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

# Comments on the code

## Database

The official postgres database image was used, which allows for database init scripts to be placed in the directory "/docker-entrypoint-initdb.d", which will automatically be run on database initialization. This was used to create the empty table, as well as demonstrate the ability to add data to the inital db container.

## Backend

A very simple express backend is used. This could see heavy refactoring, and likely could benefit from the use of tools such as Prisma to add a database abstraction layer. As it currently stands the pg library is used to directly query the database, and minimal care was given to SQL injection attacks, the pg should not allow for executing multiple queries, and parameters were used rather than direct user data for sql strings. Still this is likely not robust enough for a production environment. The endpoints "fetch" and "save" could potentially be replaced with a single "user" endpoint that delegated behavior to REST verbs "GET" and "POST" / "PUT". Current implementation does not have the ability to input anything but data directly from JSON Placeholder, so the save function does not require the ability to check to see if the resource exists, it will just return a 409 if it does. This endpoint (if the requirements demanded it) should likely check for the existence of a resource and update it if it does exist, or create it if it does not.

## Frontend

Vite was used to initialize a React / Typescript environment, careful examination of the commits would show that initial fetching of the JSON Placeholder endpoint utilized the correct useEffect pattern, including use of an abort controller. The useEffect pattern is quite verbose, so I elected to use React Query for server state, and React Context for client state. This is likely excessive for this application, but it demonstrates the way which I could handle state in a medium sized application. Further needs could demand use of more robust global state libraries such as Zustand or Redux (though Redux has better alternatives for more recently designed applications).

# Further Considerations

The largest missing portion of this challenge is a test suite. Testing of the endpoints with a mocked DB would be desireable, as would be the behavior of the individual components of the front end. This is more than possible to acheive, but likely would be difficult considering the time frame and requirements.
