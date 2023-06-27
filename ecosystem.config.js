function getPostDeploy(node_env) {
    return `
        cd ./api
        && npm install
        && node ace migration:run
        && node ace swagger:generate
        && node ace build --ignore-ts-errors
        && cp /home/urbs/www/prebat/current/api/.env /home/urbs/www/prebat/current/api/build/.env

        && cd ../client
        && npm install
        && npm run build
        && cd ../

        && pm2 startOrRestart ecosystem.config.js --env ${node_env}
    `.replace(/[\n\r]+/g, ' ')
}

module.exports = {
    apps : [{
        name           : "prebat-api",
        script         : "./api/build/server.js",
        watch          : false,
        max_restarts   : 10,
        env            : { NODE_ENV : 'development' },
        env_testing    : { NODE_ENV : 'testing' },
        env_production : { NODE_ENV : 'production' }
    }, {
        name           : "prebat-client",
        script         : "./client/build/index.js",
        watch          : false,
        max_restarts   : 10,
        env            : { NODE_ENV : 'production', PORT : 3095 },
        env_testing    : { NODE_ENV : 'testing', PORT : 3095 },
        env_production : { NODE_ENV : 'production', PORT : 3095 }
    }],
    deploy : {
        testing : {
            user          : "urbs",
            host          : [ "test.urbs.fr -p 8322" ],
            ref           : "origin/master",
            repo          : "git@github.com:urbs-dev/prebat.git",
            path          : "/home/urbs/www/prebat",
            "post-deploy" : getPostDeploy('testing')
        },
        production : {
            user          : "urbs",
            host          : [ "prod.urbs.fr -p 8422" ],
            ref           : "origin/master",
            repo          : "git@github.com:urbs-dev/prebat.git",
            path          : "/home/urbs/www/prebat/api",
            "post-deploy" : getPostDeploy('production')
        },
    }
}