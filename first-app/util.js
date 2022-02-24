

module.exports.sum = function (num1,num2) {
    return num1 + num2;
}

module.exports.person = {
    "firstName" : "Keyur",
    "lastName" : "Thakor",
    "city" : "surat"
};

module.exports.msg = "Hello Radhe Krishna.....!";

var logObg = {
    info : function(infoMsg) {
        console.log("Info Msg : "+infoMsg);
    },
    warning : function(warnMsg) {
        console.log("Warninig Msg : "+warnMsg);
    },
    error : function(errorMsg) {
        console.log("Error Msg : "+errorMsg);
    }
};

module.exports.log = logObg;