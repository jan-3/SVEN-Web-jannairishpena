**Clone the repository**

`git clone https://github.com/jan-3/SVEN-Web-jannairishpena.git`

    
**Install dependencies**

`cd SVEN-Web-jannairishpena`

`composer install`


**Setup Database**

- Create a new database, in my case its via PHPmyAdmin. Name the database `svenweb`.
- Click on the database and click Import 
- Choose the provided .sql file
- Click Go


**Create .env File**

`cp .env.example .env`
modify the database configurations

> DB_DATABASE = svenweb  //the name of the created database
> 
> DB_USERNAME = root
> 
> DB_PASSWORD = yourpassword


**Install NPM Package**

`npm install`

`npm run dev`


**Serve the app**

`php artisan serve`

access it on 127.0.0.1:8000
(im using laragon, and I access it at http://localhost/public/)

<img width="1349" height="682" alt="image" src="https://github.com/user-attachments/assets/021d29d2-40a9-453b-8c33-982a243a4853" />


