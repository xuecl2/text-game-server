import Role from '../role.js'
import heroClass from '../../classes/heroClass.js'
import { getRandomElement } from '../../../utils/random-utils.js'
import { getProxyInstance } from '../../../utils/event-utils.js'
import { RANDOM_HERO_WEIGHT } from '../../../global/const.js'
import { heros } from '../../../global/global.js'

export default class Hero extends Role {
    gender = 'male'
    heroClass = null
    equipments = new Map()
    rare = 'R'
    constructor(heroClassName, gender) {
        super()
        this.heroClass = heroClass.getClassInstance(heroClassName)
        if(!gender) gender = getRandomElement(['male', 'female'])
        this.gender = gender
    }

    die() {
        heros.delete(this.id)
        this.dispatch('death')
    }

    static getInstance(heroClassName, gender) {
        const hero = getProxyInstance(new Hero(heroClassName, gender))
        heros.set(hero.id, hero)        
    }

    static generateRandomHero() {
        const elementList = []
        const weightList = []
        RANDOM_HERO_WEIGHT.forEach(item => {
            elementList.push(item.heroClass)
            weightList.push(item.weight)
        })
        const heroClass = getRandomElement(elementList, weightList)
        const gender = getRandomElement(['male, female'])
        return this.getInstance(heroClass.heroClassName, gender)
    }
}
