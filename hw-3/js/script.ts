// Домашнее задание:

// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero
// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.

namespace SuperHero {
    export interface AchivementInterface {
        type: string,
        heroical: string,
        description: string
    }
    export class Achivement implements AchivementInterface{
        description: string;
        heroical: string;
        type: string;

    }
    export interface UserInterface {
        name: string,
        age: number,
        achivments: AchivementInterface[],
        AddYearOfLife():void,
        AddAchvement(achevemnt: AchivementInterface):void
    }
    export class User implements UserInterface {
        public name: string;
        public age: number;
        public achivments: AchivementInterface[] = [];

        AddYearOfLife():void {}

        AddAchvement(achevemnt: AchivementInterface):void {
            this.achivments.push(achevemnt);
        }
    }
}

const achivment1: SuperHero.Achivement = {
    type: '111',
    heroical: '111',
    description: '111'
};
const achivment2: SuperHero.Achivement = {
    type: '222',
    heroical: '222',
    description: '222'
};
const achivment3: SuperHero.Achivement = {
    type: '333',
    heroical: '333',
    description: '333'
};

const SpiderMan = new SuperHero.User();
SpiderMan.name = 'Peter Benjamin Parker';
SpiderMan.age = 18;
SpiderMan.AddAchvement(achivment1);
SpiderMan.AddAchvement(achivment3);

console.log(SpiderMan);

const IronMan = new SuperHero.User();
IronMan.name = 'Anthony Edward "Tony" Stark';
IronMan.age = 54;
IronMan.AddAchvement(achivment1);
IronMan.AddAchvement(achivment2);
IronMan.AddAchvement(achivment3);

console.log(IronMan);
