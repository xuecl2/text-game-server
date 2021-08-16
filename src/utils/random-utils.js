export default {
    getRandomElement,
}

export function getRandomElement(elementList, weightList) {
    if(!Array.isArray(elementList)) return null
    const qty = elementList.length
    if(qty === 0) return null
    if(!Array.isArray(weightList)) weightList = new Array(qty).fill(1)
    if(weightList.length > qty) weightList = weightList.slice(0, qty)
    if(weightList.length < qty) weightList = weightList.fill(1, weightList.length, qty)

    const list = new Array(qty)
    list[0] = weightList[0]
    for(let i=1; i<qty; i++) {
        list[i] = list[i - 1] + weightList[i]
    }
    const rand = Math.floor(Math.random() * list[qty - 1])
    for(let i=1; i<qty; i++) {
        if(rand > list[i]) return elementList[i]
    }
    return elementList[0]
}
