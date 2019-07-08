var ToBinary = /** @class */ (function () {
    function ToBinary() {
        this.radix = 2;
    }
    ToBinary.prototype.toSystem = function (n) {
        // dec -> bin
        return n.toString(this.radix);
    };
    ToBinary.prototype.fromSystem = function (n) {
        // bin -> dec
        return parseInt(n, this.radix);
    };
    return ToBinary;
}());
//
var ToHexal = /** @class */ (function () {
    function ToHexal() {
        this.radix = 8;
    }
    ToHexal.prototype.toSystem = function (n) {
        // dec -> hex
        return n.toString(this.radix);
    };
    ToHexal.prototype.fromSystem = function (n) {
        //hex -> dec
        return parseInt(n, this.radix);
    };
    return ToHexal;
}());
var ToHexidecimal = /** @class */ (function () {
    function ToHexidecimal() {
        this.radix = 16;
    }
    ToHexidecimal.prototype.toSystem = function (n) {
        // dec -> hexdec
        return n.toString(this.radix);
    };
    ToHexidecimal.prototype.fromSystem = function (n) {
        // hexdec -> dec
        return parseInt(n, this.radix);
    };
    return ToHexidecimal;
}());
var binary = new ToBinary();
console.log(binary.toSystem(255));
console.log(binary.fromSystem('1001'));
var hexal = new ToHexal();
console.log(hexal.toSystem(255));
var hexidecimal = new ToHexidecimal();
console.log(hexidecimal.toSystem(255));
