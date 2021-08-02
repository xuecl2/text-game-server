export class Area {
    name = ''
    areaType = 'safe' 
    armies = new Set()
    monsters = new Map()
    onlandAreas = {
        east: null,
        west: null,
        south: null,
        north: null,
    }

    constructor(name, areaType, onlandAreas) {
        if(!onlandAreas) onlandAreas = {}
        this.name = name
        this.areaType = areaType
        this.setOnlandArea(onlandAreas)
        // todo
    }

    setOnlandArea(conf) {
        this.addOnlandArea = {...this.onlandAreas, conf}
    }

    exsitArmy(army) {
        if(this.armies.has(army)) return true
    }

    hasOnlandArea(direction) {
        if(this.onlandAreas[direction]) return true
    }

    moveTo(army, direction) {
        this.armies.delete(army)
        this.onlandAreas[direction].add(army)
    }
}