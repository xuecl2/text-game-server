import { heros } from "../global/global.js";
import Hero from "../entities/roles/hero/hero.js";
import utils from '../utils/service-utils.js' 

const moduleCode = '004'

export function hireHero(req, army) {   
    const heroId = req.heroId
    let hero = heros.get(heroId)
    if(!hero) return utils.getBusFailureRsp(moduleCode + '001', '不存在的佣兵！')
    army.hireHero(hero)
    return utils.getSuccessRsp()
} 

export function registMainHeor(req, army) {
    const heroClassName = req.heroClassName
    const gender = req.gender
    const hero = Hero.getInstance(heroClassName, gender)
    army.hireHero(hero)
    army.setBattle(hero)
    if(!heroClassName || !gender) return utils.getBusFailureRsp(moduleCode + '002', '职业或性别不能为空')
}

export function getHeroInfo(req, army) {
    const heroId = req.heroId
    const hero = heros.get(heroId)
    if(!hero) return utils.getBusFailureRsp(moduleCode + '003', '佣兵不存在！')
    return utils.getSuccessRsp(new heroInfoApi(hero))
}