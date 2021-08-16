export default class Status {
    hp = 0
    mp = 0
    physicAtk = 0
    magicAtk = 0
    physicDef = 0
    magicDef = 0
    speed = 0
    hit = 0
    dodge = 0
    criticalRate = 0
    criticalDamage = 1.5
    fireAtkRate = 1
    iceAtkRate = 1
    thunderAtkRate = 1
    windAtkRate = 1
    fireDefRate = 1
    iceDefRate = 1
    thunderDefRate = 1
    windDefRate = 1

    constructor(status) {
        this = {...this, ...status}
    }
}
