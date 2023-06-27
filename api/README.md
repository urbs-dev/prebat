# DATA API
<img src="./public/images/data-logo.svg"/>

## Install
````apache
cd /my/dir/data
git clone https://github.com/urbs-dev/data_api.git api

cd ./api
npm install

````
-  /!\ Base de données "DATA" /!\ <br>
````apache
# migrations & seeds
node ace migration:run
node ace db:seed

# Démarrer le serveur (dév) :
node ace serve --watch
````
[--> http://localhost:3040](http://localhost:3040)

## Nginx
~~~~apache
# DATA API
location /data.api/ {
    proxy_pass  'http://localhost:3040/';
}
~~~~
<br><br><br><br>

## Mémo
````apache
#-- SWAGGER --
node ace swagger:generate

#-- MIGRATE --
node ace migration:run

#-- UNDO MIGRATIONS --
node ace migration:rollback --batch=0

#-- SEED --
node ace db:seed

````

