import { getProxyInstance } from "../../utils/event-utils.js"
import { map } from "../../global/map.js"
import { WILD_MONSTER_GENERATE_INTERVAL } from "../../global/const.js"

export class Area {
    name = ''
    areaType = 'safe' 
    armies = new Set()
    monsters = new Set()
    coordinate = [0, 0]
    onlandAreasConnection = {
        east: true,
        west: true,
        south: true,
        north: true,
    }
    generateMonstersInterval = null

    constructor(name, areaType, coordinate, config) {
        this.name = name
        this.areaType = areaType
        this.coordinate = coordinate
        if(config.generateMonsters) this.generateMonsters = config.generateMonsters
        this.generateMonstersInterval = setInterval(() => this.generateMonsters(), WILD_MONSTER_GENERATE_INTERVAL)
    }

    existArmy(army) {
        if(this.armies.has(army)) return true
    }

    moveTo(army, direction) {
        const destiny = this.getOnlandAreaInfo()[direction]
        if(!destiny) return null
        this.armies.delete(army)
        destiny.addArmy(army)
        return destiny
    }
    
    addArmy(army){
        army.area = this
        this.armies.add(army)
    }

    getOnlandAreaInfo() {
        let onlandAreas = {}
        let deltaCoordinate = [0, 0]
        for(let key in this.onlandAreasConnection) {
            if(key === 'east') deltaCoordinate = [1, 0] 
            if(key === 'west') deltaCoordinate = [-1, 0] 
            if(key === 'south') deltaCoordinate = [0, -1] 
            if(key === 'north') deltaCoordinate = [0, 1] 
            const onlandArea = map.getArea([this.coordinate[0] + deltaCoordinate[0], this.coordinate[1] + deltaCoordinate[1]])
            if(this.onlandAreasConnection[key] && onlandArea) {
                onlandAreas[key] = onlandArea
            }
        }
        return onlandAreas
    }

    generateMonsters() {}

    static getAreaInstance(name, areaType, coordinate, config) {
        const area = getProxyInstance(new Area(name, areaType, coordinate, config))
        map.setArea(coordinate, area)
        return area
    }
}
