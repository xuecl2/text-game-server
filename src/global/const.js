import Warrior from "../entities/classes/warrior.js"
import Archer from "../entities/classes/archer.js"
import Maga from "../entities/classes/maga.js"

export const WILD_MONSTER_GENERATE_INTERVAL = 10 * 60 * 1000 
export const RANDOM_HERO_WEIGHT = [
    { heroClass: Warrior, weight: 10000 },
    { heroClass: Archer, weight: 10000 },
    { heroClass: Maga, weight: 10000 },
]
