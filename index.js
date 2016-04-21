var setImmediateShim = require('set-immediate-shim');
/*
git remote add origin https://github.com/hollowdoor/setnext.git
git push -u origin master
*/
module.exports = function setNow(val){
    return new Promise(function(resolve, reject){
        setImmediateShim(function(){
            resolve(val);
        });
    });
};
