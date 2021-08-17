export class armyInfoApi {
    constructor(army) {
        this.id = army.id
        this.mainHero = {id: army.mainHero.id, name: army.mainHero.name}
        this.heros = [...army.heros].map(hero => ({
            id: hero.id, 
            name: hero.name,
            class: hero.heroClass.name,
            level: hero.level, 
        }))
        this.alias = army.alias?{id: army.alias.id, name: army.alias.name}:null
        this.battleTeam = [...army.battleTeam].map(hero => ({
            id: hero.id, 
            name: hero.name,
            class: hero.heroClass.name,
            level: hero.level, 
        }))
        this.armyRank = army.armyRank
    }
}
