var Hapi   = require('hapi');
var server = new Hapi.Server();
var ip     = require('./src/ip');

server.register(
    [
        {
            register: require('inert'),
            options: {}
        },
        {
            register: require('vision'),
            options: {}
        }
    ],
    function(err) {
        server.connection({ port: 3000 });


        server.route({
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                var remoteAddress = ip.parseRequest(request).getIp();
                reply(remoteAddress);
            }
        });

        server.start(function () {
            console.log('Server running as: ', server.info.uri)
        });
    }
);
