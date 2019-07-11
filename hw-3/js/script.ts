interface UserInterface {
    name: string,
    age: number,
    achivments: AchivementInterface[],
    AddYearOfLife():void,
    AddAchvement(achevemnt: AchivementInterface):void
}
interface AchivementInterface {
    type: string,
    heroical: string,
    description: string
}

class User implements UserInterface {
    public name: string;
    public age: number;
    public achivments: AchivementInterface[];

    AddYearOfLife():void {
    }

    AddAchvement(achevemnt: AchivementInterface):void {
        this.achivments = this.achivments.push(achevemnt);
    }

}

class Achivement implements AchivementInterface {
    public type: string;
    public heroical: string;
    public description: string;

}

namespace SuperHero {
    export class User{}
}

const achivment1: Achivement = {
    type: '111',
    heroical: '111',
    description: '111'
};
const achivment2: Achivement = {
    type: '222',
    heroical: '222',
    description: '222'
};
const achivment3: Achivement = {
    type: '333',
    heroical: '333',
    description: '333'
};

const SpiderMan = new SuperHero();
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