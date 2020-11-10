var CryptoJS = require("crypto-js");

module.exports = (app) => {

    this.encrypt = (string) => {
        return CryptoJS.AES.encrypt(string, app.config.jwt_password).toString();
    }

    this.decrypt = (string) => {
        let des = CryptoJS.AES.decrypt(string, app.config.jwt_password);
        return des.toString(CryptoJS.enc.Utf8);
    }

    return this
}