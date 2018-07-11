var Q = require("q");
var fs = require('fs');

module.exports = {
  getFn:function(){
    var defer = Q.defer();
    try {
      defer.resolve({});
    } catch (e) {
      LOGGER.error('admin->getFn:',e.toString());
      defer.reject(e.toString());
    }
    return defer.promise;
  }
};
