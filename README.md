# Tech Blog        
Tech Blog is a place for developers to write articles about different technical applications. This blog allows the user to easily view blogs, search for relevant subjects, and manage their blogs as technology evolves.


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Features](#features)
- [Contact](#questions)



## Installation
This application uses a variety of NPM packages. That can be installed using the npm i command within the terminal. To create the database you would access sql through the terminal using mysql -u {username} -p command. Once in Mysql you will run SOURCE db/schema.sql. Once the database is created you can seed the database. I have provided seed files that follow the DB structure that can be seeded by running Node seeds/index.js. Once the Database is seeded you will run npm start to start the server.

## Usage
When first accessing the site users will be directed to the homepage of the application that displays all blogs. The top navigation bar allows users to access their dashboard and the blog post page. Both will require user authentication before they can be accessed. 

Homepage example: 
![tech_blog Homepage](https://user-images.githubusercontent.com/108016215/201960421-584d7ace-f8bf-4e9f-b190-d74b1b87bce7.PNG)


Users will be able to create their own account where username and password are securly stored using bcrypt.
 
Login Page Example: 
![tech_blog login](https://user-images.githubusercontent.com/108016215/201960557-4489e60c-fb49-482f-99b4-f9287837a1a8.PNG)

Users will also be able to use the search option to search for relevant blogs.

Search Page Example:
 ![tech_blog search screen](https://user-images.githubusercontent.com/108016215/201960665-7d430a64-3178-4642-b689-78b1860d4545.PNG)

After logging in users will be presented with their dashboard showing them all blogs that they have created.

Dashboard Example: 
![tech_blog dashboard](https://user-images.githubusercontent.com/108016215/201961113-7e1dbaef-c1de-4d65-8161-ea1129a06644.PNG)

 When opening up a blog users will be able to view the blog and leave a comment after authenticated.
 
Blog Page Example: 
![tech_blog blog page](https://user-images.githubusercontent.com/108016215/201960777-09d01f22-17ec-445d-a7fc-e730832177f4.PNG)

The owner of the blog will be able to edit the blog, delete the blog, and delete comments made by other users. When selecting the Edit option the user will be redirected to a page similiar to the blog post page. However, it will autofill the title andblog for you with the current information from the blog.

Edit Page Example: 
![tech_blog edit blog page](https://user-images.githubusercontent.com/108016215/201960920-0bc091cc-7bcb-41e6-aac1-106f96ab0ed6.png)

## Video Demo

## Contribution
If you owuld like to contribute please contact the developer.


## Features
This application uses Handlebars for HTML generation, bcrypt for password security, sql for database management 

Full NPM featured list -   
 "dependencies": {
 
      "bcrypt": "^5.0.0",
      
      "connect-session-sequelize": "^7.0.4",
      
      "dotenv": "^8.2.0",
      
      "express": "^4.17.1",
      
      "express-handlebars": "^5.2.0",
      
      "express-session": "^1.17.1",
      
      "handlebars": "^4.7.6",
      
      "mysql2": "^2.2.5",
      
      "sequelize": "^6.3.5"
      
    },
    "devDependencies": {
    
      "nodemon": "^2.0.7"
    }

## Questions
Github Username:Avialmonanay
If you have any additional questions please email me at Rexxmadsen@gmail.com


