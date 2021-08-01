import { v1 as uuid } from 'uuid'

export default {
    getProxyInstance
}

export function getProxyInstance(obj) {
    obj.id = obj.id || uuid()
    const proxy = new Proxy(obj, {
        get: (target, propKey) => {
            if (propKey === 'dispatch') return dispatch
            if (propKey === 'subscribe') return subscribe
            if (propKey === 'removesubscription') return removesubscription
            return target[propKey]
        },
        set: (target, propKey, value, receiver) => {
            const oldValue = target[propKey]
            target[propKey] = value
            if (propKey in target) {
                if (value === oldValue) return true
                receiver.dispatch(propKey, value)
            }
            return true
        }
    })

    proxy.watcher = {}

    function subscribe(observer, eventName, callback) {
        proxy.watcher[eventName] = proxy.watcher[eventName] ?? new Map()
        proxy.watcher[eventName].get(observer) = proxy.watcher[eventName].get(observer) ?? new Set()
        proxy.watcher[eventName].get(observer).add(callback)
    }

    function dispatch(eventName, value) {
        if (!proxy.watcher[eventName]) return
        proxy.watcher[eventName].forEach((callbackSet, observer) => {
            callbackSet.forEach(callback => {
                callback.call(observer, value)
            })
        })
    }

    function unsubscribe(observer, eventName, callback) {
        proxy.watcher[eventName].get(observer).delete(callback)
    }
    return proxy
}

