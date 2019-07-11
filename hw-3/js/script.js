var User = (function () {
    function User() {
    }
    User.prototype.AddYearOfLife = function () {
    };
    User.prototype.AddAchvement = function (achevemnt) {
        this.achivments = this.achivments.push(achevemnt);
    };
    return User;
}());
var Achivement = (function () {
    function Achivement() {
    }
    return Achivement;
}());
var SuperHero;
(function (SuperHero) {
    var User = (function () {
        function User() {
        }
        return User;
    }());
    SuperHero.User = User;
})(SuperHero || (SuperHero = {}));
var achivment1 = {
    type: '111',
    heroical: '111',
    description: '111'
};
var achivment2 = {
    type: '222',
    heroical: '222',
    description: '222'
};
var achivment3 = {
    type: '333',
    heroical: '333',
    description: '333'
};
var SpiderMan = new SuperHero();
SpiderMan.name = 'SpiderMan';
SpiderMan.age = 18;
SpiderMan.AddAchvement(achivment1);
console.log(SpiderMan);
// Домашнее задание:
//
// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero
//
// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement. 
