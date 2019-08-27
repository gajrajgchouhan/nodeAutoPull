# nodeAutoPull  

## configure the app  
0. Make a .env file and store required variables according to .sampleenv 
1. Store email and password in .env (use gmail)
2. Allow less secure apps for the account https://www.google.com/settings/security/lesssecureapps
3. Store name, webhook secret and absolute path to repository in ./conf/repositoryList.conf

## Run the app
````bash  
npm install  
node app.js  
````  

## Webhook url
http://\<host\>/git/\<key from repositoryList for repository\>  
example :  
http://95557dbe.ngrok.io/git/1  
http://95557dbe.ngrok.io/git/2  
