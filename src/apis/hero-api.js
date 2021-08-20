export class heroInfoApi {
    constructor(hero) {
        this.id = hero.id
        this.baseStatus = hero.baseStatus
        this.additionalStaus = hero.additionalStaus
        this.growthStatus = hero.growthStatus
        this.activatedSkills = [...hero.activatedSkills].map(skill => ({id: skill.id, name: skill.name, level: skill.level}))
        this.battleSkill = {
            id: hero.battleSkill.id,
            name: hero.battleSkill.name,
            level: hero.battleSkill.level,
        }
        this.buffs = [...hero.buffs].map(buff => ({id: buff.id, name: buff.name}))
        this.level = hero.level
        this.desc = hero.desc
        this.currentHp = hero.currentHp
        this.currentMp = hero.currentMp
        this.gender = hero.gender
        this.heroClass = hero.heroClass.name
        this.rare = hero.rare
    }
}
