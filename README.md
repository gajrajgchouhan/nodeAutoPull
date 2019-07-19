# nodeAutoPull  

## configure the app  
1. Store email and password in ./helper/verify.js (use gmail)
2. Allow less secure apps for the account https://www.google.com/settings/security/lesssecureapps
3. Store name, webhook secret and absolute path to repository in ./conf/repositoryList.js

## Run the app
````bash  
npm install  
node app.js  
````  