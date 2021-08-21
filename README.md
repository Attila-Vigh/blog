# blog-server

## Homework

### Strive Blog API

    You are in charge of creating a set of WebAPIs for the Strive Blog application.

    [Here](https://github.com/ubeytdemirr/strive-blog-template) you can find the Frontend already created

 

    The application should enable the creation, editing, deletion, listing of blog authors.
 ---
    {	    
        "_id": "SERVER GENERATED ID",
        "category": "ARTICLE CATEGORY",
        "title": "ARTICLE TITLE",
        "cover":"ARTICLE COVER (IMAGE LINK)",
        "readTime": {
            "value": 2,
            "unit": "minute",
        },
        "author": {
            "name": "AUTHOR AVATAR NAME",
            "avatar":"AUTHOR AVATAR LINK",
        },
        "content": "HTML",
        "createdAt": "NEW DATE"
    }
 
Backend
 

The backend should include the following routes:

 

GET /blogPosts => returns the list of blogposts
GET /blogPosts /123 => returns a single blogpost
POST /blogPosts => create a new blogpost
PUT /blogPosts /123 => edit the blogpost with the given id
DELETE /blogPosts /123 => delete the blogpost with the given id
 

The persistence must be granted via file system (es.: Json file with a list of blog posts inside)

 

Sidenote: remember to install the cors package with 'npm i cors', to import it and to use it with 'server.use(cors())'

 

 

⚠️ Bodies, params and queries must be validated with express-validator middleware

 ### Frontend
 

Post article from new article form
Fetch & List your articles at home page
 

 

### Extra Features
    GET /authors/:id/blogPosts/ => get all the posts for an author with a given ID
    GET /blogPosts?title=whatever => filter the blogposts and extract the only that match the condition (es.: title contains "whatever")
    Add search feature to frontend
## AUTHORS
---
    Authors should have following information:

 

- name
- surname
- ID (Unique and server generated)
- email
- date of birth
- avatar (e.g. https://ui-avatars.com/api/?name=John+Doe)
 

The backend should include the following routes:

 

- GET /authors => returns the list of authors
- GET /authors/123 => returns a single author
- POST /authors => create a new author
- PUT /authors/123 => edit the author with the given id
- DELETE /authors/123 => delete the author with the given id
 

The persistence must be granted via file system (es.: Json file with a list of authors inside)

 

**Sidenote**: remember to install the cors package with 'npm i cors', to import it with the import statement and to use it with 'server.use(cors())'

 

### Extra

    POST authors/checkEmail => check if another author has the same email. The parameter should be passed in the body. It should return true or false.

    It should not be possible to add a new author (with POST /authors) if another has the same email.