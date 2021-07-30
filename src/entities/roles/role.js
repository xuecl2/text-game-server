import NormalAttack from '../skills/normalAttack.js'

export default class Role {
    roleType = ''
    initialStatus = null
    baseStatus = null
    additionalStaus = null
    growthStatus = null
    activatedSkills = new Set()
    battleSkill = new NormalAttack()
    buffs = new Map()
    enemies = new Set()
    level = 1
    desc = ''
    currentHp = 1
    currentMp = 1
}
