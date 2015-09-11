(function(module) {

    ip = {
        parseRequest: function parseRequest(request) {
            return (function(r) {

                return {
                    getIp: function getIp() {
                        return r.info.remoteAddress;
                    }
                };

            })(request)
        }
    };

    module.exports = ip;
})(module);