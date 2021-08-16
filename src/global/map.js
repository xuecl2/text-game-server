import { Area } from "../entities/areas/area.js"
import Spider from "../entities/roles/monsters/spiders/spider.js"
import SpiderWarrior from "../entities/roles/monsters/spiders/spiderWarrior.js"
import randonUtils from "../utils/random-utils.js"

export const map = []
map.setArea = function(coordinate, area) {
    if(!map[coordinate[0]]) map[coordinate[0]] = []
    map[coordinate[0]][coordinate[1]] = area
}
map.getArea = function (coordinate) {
    return map[coordinate[0]] && map[coordinate[0]][coordinate[1]]
}

Area.getAreaInstance('起始之村', 'safe', [0, 0])
Area.getAreaInstance('林间小路', 'danger', [0, 1], {
    generateMonsters: function() {
        const monsterNum = 6
        const currentMonsterNum = this.monsters.size
        for(let i = 0; i<monsterNum - currentMonsterNum; i++) {
            this.monsters.add(generateMonster())
        }

        function generateMonster() {
            return Spider.getInstance()
        }
    }
})
Area.getAreaInstance('月影之森', 'danger', [0, 2], {
    generateMonsters: function() {
        const monsterNum = 6
        const currentMonsterNum = this.monsters.size
        for(let i = 0; i<monsterNum - currentMonsterNum; i++) {
            this.monsters.add(generateMonster())
        }

        function generateMonster() {
            const list = [Spider, SpiderWarrior]
            return randonUtils.getRandomElement(list, [99, 1]).getInstance()
        }
    }
})
