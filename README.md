# BusPatrol Coding Challenge

This is a project given by BusPatrol to create a RESTful GET request and return job_title and job_description given a name paramter.

The database was provided.

## How to use

- Clone repository
- Install dependancies
  - npm install
- Start app
  - npm start
- Go to route /user
  - In browser, open http://localhost:8000/user/:name

## Overall

To keep it clean, I seperated the parts into different files. Creating a Database and then importing that into the route that it would be needed.

A purpose of doing so is for scalability, if we needed to add more models to the database it would be keept with the other models. And, if we needed to create the rest of the CRUD app and possibly more paths, they would be kept together with the user path.
