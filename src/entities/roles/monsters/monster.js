import Role from '../role.js'

export default class Monster extends Role {
    race = ''
    monsterClass = ''
    rank = 'normal'
    elementDamageRate = {
        fire: 1,
        ice: 1,
        thunder: 1,
        wind: 1
    }
}
