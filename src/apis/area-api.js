export class areaInfoApi {
    constructor(area) {
        this.id = area.id
        this.name = area.name
        this.areaTYpe = area.areaTYpe
        this.armies = area.armies.map(army => army.id)
        this.coordinate = area.coordinate
        this.onlandAreas = {}
        onlandAreas = area.getOnlandAreaInfo
        for(let key in onlandAreas) {
            if(onlandAreas[key]) this.onlandAreas[key] = onlandAreas[key].name
        }
    }
}
