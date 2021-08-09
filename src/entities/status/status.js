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
    fireAtk = 1
    iceAtk = 1
    thunderAtk = 1
    windAtk = 1
    fireDef = 1
    iceDef = 1
    thunderDef = 1
    windDef = 1

    constructor(status) {
        this = {...this, ...status}
    }
}
