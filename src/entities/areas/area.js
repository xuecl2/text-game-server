import { getProxyInstance } from "../../utils/event-utils.js"
import { map } from "../../global/map.js"

export class Area {
    name = ''
    areaType = 'safe' 
    armies = new Set()
    monsters = new Map()
    coordinate = [0, 0]
    onlandAreasConnection = {
        east: true,
        west: true,
        south: true,
        north: true,
    }

    constructor(name, areaType, coordinate, map) {
        this.name = name
        this.areaType = areaType
        this.coordinate = coordinate
        map.setArea(coordinate, this)
    }

    exsitArmy(army) {
        if(this.armies.has(army)) return true
    }

    moveTo(army, direction) {
        if(!this.onlandAreasConnection[direction]) return
        let deltaCoordinate = []
        if(direction === 'east') deltaCoordinate = [1, 0] 
        if(direction === 'west') deltaCoordinate = [-1, 0] 
        if(direction === 'south') deltaCoordinate = [0, -1] 
        if(direction === 'north') deltaCoordinate = [0, 1] 
        const destiny = map[this.coordinate[0] + deltaCoordinate[0]] && map[this.coordinate[0] + deltaCoordinate[0]][this.coordinate[1] + deltaCoordinate[1]]
        if(!destiny) return
        this.armies.delete(army)
        this.destiny.armies.add(army)
    }

    static getAreaInstance(name, areaType, coordinate, map) {
        return getProxyInstance(new Area(name, areaType, coordinate, map))
    }
}