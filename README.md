# bdx-0218-js-taka
Projet 3 - Taka

## Repository initialization

 1. ```git clone <githubLink>```


 2. change files you do not want to be tracked and use the following command:


```git update-index --assume-unchanged back/helpers/db.js```


```git update-index --assume-unchanged back/helpers/sql.js```



*(and if you want to track the changes again use this command :)*


```git update-index --no-assume-unchanged back/helpers/db.js```


```git update-index --no-assume-unchanged back/helpers/sql.js```


3. Install SQL & Mongo databases (/backup)


__(/Taka is the finalized mongoDB database to import for a functional project linked with the SQL tables)__

mongo_database.js is to create a new database mongoDB

*if the mongoDB database already exist, restore the dump in /backup, without connection in mongo :*


```mongorestore --db Taka```

4. in /back/helpers/db.js & /back/helpers/sql.js, write yours HOST_NAME, PORT, DB_NAME, USER, PASSWORD


5. ```npm install``` in folders /back & /front


6. ```npm start``` first in the folder /back & then in the folder /front
