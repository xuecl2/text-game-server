import { Area } from "../entities/areas/area";

export const map = []
map.setArea = function(coordinate, area) {
    if(!map[coordinate[0]]) map[coordinate[0]] = []
    map[coordinate[0]][coordinate[1]] = area
}

Area.getAreaInstance('起始之村', 'safe', [0, 0], map)
Area.getAreaInstance('林间小路', 'safe', [0, 1], map)
Area.getAreaInstance('月影之村', 'safe', [0, 2], map)