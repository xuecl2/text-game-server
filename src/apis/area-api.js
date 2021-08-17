export class areaInfoApi {
    constructor(area) {
        this.id = area.id
        this.name = area.name
        this.areaTYpe = area.areaTYpe
        this.armies = [...area.armies].filter(army => army.mainHero).map(army => ({id: army.id, name: army.name}))
        this.monsters = [...area.monsters].map(monster => ({
            id: monster.id,
            currentHp: monster.currentHp,
            monsterClass: monster.monsterClass,
            rank: monster.rank,
        }))
        this.coordinate = area.coordinate
        this.onlandAreas = {}
        const onlandAreas = area.getOnlandAreaInfo()
        for(let key in onlandAreas) {
            if(onlandAreas[key]) this.onlandAreas[key] = onlandAreas[key].name
        }
    }
}
