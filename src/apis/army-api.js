export class armyInfoApi {
    constructor(army) {
        this.id = army.id
        this.mainHero = {id: army.mainHero.id, name: army.mainHero.name}
        this.heros = army.armyTYpe
        this.armies = [...army.armies].map(army => army.id)
        this.monsters = [...army.monsters].map(monster => ({
            id: monster.id,
            currentHp: monster.currentHp,
            monsterClass: monster.monsterClass,
            rank: monster.rank,
        }))
        this.coordinate = army.coordinate
        this.onlandarmys = {}
        const onlandarmys = army.getOnlandarmyInfo()
        for(let key in onlandarmys) {
            if(onlandarmys[key]) this.onlandarmys[key] = onlandarmys[key].name
        }
    }
}
