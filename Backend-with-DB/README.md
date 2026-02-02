1. generate package.json
   ```sh
    npm init -y
   ```
2. create server.js file

3. install, impoer and create http server assigning port number
   ```sh
    npm install express
   ```

### connect to databse

MongoDb ODM(Object Relational Mapping): Mongoose

to map the js okects to relations(tables) we use mongoose

    a. installation and connection to mongoose
    ```sh
     npm install mongoose
     ```
    b. create schema of the resource
    c. create model of the schema
    d. perform db operations on model

---

### Projections

=> To fetch only required fields from the document we use projections

=> sometims we need to filter at the field level hence we use projections

---

### unique username

=> somrtimes developer has to create some unique fiels for the client

=> ex : username

=>

---

### unique pswd

=> never store plain pswd in database

=> two options
a. encryption -> it is reversable, hence not secure 100%
b. hashing -> it is one way function, hence more secure

## we use bcrypt for hashing

=> to hash we have bcriptjs library

    a. installation
    ```sh
     npm install bcryptjs
     ```

    b. hashing pswd before saving to db

    c. comparing hashed pswd during login

---

### authentication

=> to access the preotected area we need authentication

=> to verify user is who he says he is

=> every API has 2 routs
a. public route -> everyone can access -> login, signin
b. protected route -> only " authenticated user " can access -> profile, dashboard

=> user authentication means submitting some credentials and getting tokens

=> once the token recieved by the user then he is an athenticated user

=> username and pswd are credentials

=> steps for user authentication

    a. user sends credentials to server
    b. server/api verifies the credentials(username and pswd) -> if valid then proceed to next step else send error response
    c. server generates a token and sends it to user
    d. user stores the token
    e. for every protected route user sends the token to server
    f. server verifies the token and gives access to protected resource

=> we call the token as JWT (json web token)

=> once the user cred are verified then the login rout creates a jwt token and sends it to user

## storage of token in browser


=> first part of the token is header, second part is payload and third part is signature

=>  local storage 0r session storage content can be accessed by js of the browser hence not secure

=>  normal cookies can be accessed by js of the browser hence not secure

=> to store the tokens of the session we dont use db

=> we use cookies with httpOnly flag set to true because its more secure as the server can not access the cookie from the client side script

=>  hence this is the saffest place to store the JWT token after user authentication


ex: 
    res.cookie("Token", signedToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

=> here secure flag is set to false because we are using http protocol if we use https then set it to true

=> sameSite is set to lax to avoid csrf attacks 
---
