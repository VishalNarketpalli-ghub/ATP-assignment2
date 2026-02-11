step 1 create Backend

1 . Generate Package.json
npm init -y

npm node package manager
acts as the librarian in a library

2 . Create HTTP Server

a. install and import "express" module
npm install express

when we install we also get p
ackage-lock.json which is the locked version of json

http req types
GET -> read resources
POST -> create a nre resource
PUT -> update a resource
DELETE -> delete a resource

we also call them as CRUD operations

127.0.0.1 is the local host address which is fixed

http://127.0.0.1:3000

http://localhost:3000

3 . userApi :

API is a generic term

representational state transfer API (REST API) is used now a days

API contains routs

REST API end point -> {Base URL / resource / id}
{Endpoint path }

ex : {https://api.example.com/user/123}

rest api always focuses on the resource / it is a resource based process

RULES OF URL

the url should have Noun + path
path sould always be lower cases
dont use white case
underscore is invalid

GET http://localhost:3000/users (/user -> path)
path should ever be a verb
POST http://localhost:3000/users
DELETE http://localhost:3000/users
PUT http://localhost:3000/users

to check backend we use some Testing Tools
ex : postman
ex : in vs code we use (rest client tool)

frontend is one of the client application

for every response there is a status code like 200, 404

there are many status codes
200 -> ok / success
201 -> created
404 -> not found
500 -> internal server error
400 -> bad request

nodemon is used to save the server dynamically
npm i -g nodemon
-g for global istallation

GET : client is getting the resource

POST : the client is posting the resource

PUT : the client is asking the server to update the resources

only post and put have the body not get and delete
if we want to send some info int get or delete we send via URL

anything comming from the url is treated as url automatically

to check the user response we use this
POST http://127.0.0.1:3000/users
Content-Type: application/json

{
"id" : 100,
"name" : "arun",
"age" : 19
}

----------middle wear---------------

middlewear are between request and api rout

express contains some inbuilt middlewear

app.use(express.json())

middlewear can send the res
it can also send response
it can also forward it to next middlewear

create a custom middlewear

middle weare will be exec line by line

we can make it execute in order usein ->
app.use(middleware1)
this bassically acts as the function call but the middle wear will hold the req.body obj
after using the obj the middlewaer sends the obj to next using
next()

we only need 1 express for complex backend

main express listens to the client requr=est direcrtly
mini express only works with the functionality and doesnot listen to the client

how to create a mini express application?
export const userApp = exp.Router();

---

data -> the data is the raw facts

information - information is the processed data

db - is a storage place to store the data, it can be physical or virtual.

db server - is the software which helps to interact with the data

dbms -> database management system is the software to manage the database for ex : mysql , mongodb , postgres sql

rdbms -> relational database management system is the software to manage relational database for ex : mysql , postgres sql

tables can also be called as relations

relational dbms is not really good for real world applications because of the complex relationships and unstructured data and also the size of the data

nosql dbms -> non relational dbms is used for real world applications for ex : mongodb , cassandra , redis

mongoDB is one of the nosql dbms,it is also a document oriented dbms

RDBMS: bd -> table -> rows -> columns
MongoDB: db -> collection -> documents -> fields


bson -> binary json this is used in mongodb to store the data it is similar to json but it can store more data types than json and also similar to json it is key value pair


