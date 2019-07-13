// Домашнее задание:
// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero
// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.
var SuperHero;
(function (SuperHero) {
    var Achivement = /** @class */ (function () {
        function Achivement() {
        }
        return Achivement;
    }());
    SuperHero.Achivement = Achivement;
    var User = /** @class */ (function () {
        function User() {
            this.achivments = [];
        }
        User.prototype.AddYearOfLife = function () { };
        User.prototype.AddAchvement = function (achevemnt) {
            this.achivments.push(achevemnt);
        };
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
var SpiderMan = new SuperHero.User();
SpiderMan.name = 'Peter Benjamin Parker';
SpiderMan.age = 18;
SpiderMan.AddAchvement(achivment1);
SpiderMan.AddAchvement(achivment3);
console.log(SpiderMan);
var IronMan = new SuperHero.User();
IronMan.name = 'Anthony Edward "Tony" Stark';
IronMan.age = 54;
IronMan.AddAchvement(achivment1);
IronMan.AddAchvement(achivment2);
IronMan.AddAchvement(achivment3);
console.log(IronMan);
