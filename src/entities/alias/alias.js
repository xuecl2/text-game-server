import { getProxyInstance } from "../../utils/event-utils.js"

export default class Alias {
    name = ''
    leader = null
    members = new Set()

    constructor(army) {
        this.name = army.mainHero.name + 'ηιδΌ'
        this.leader = army
        this.members.add(army)
    }

    static getInstance(army) {
        return getProxyInstance(new Alias(army))
    }
}