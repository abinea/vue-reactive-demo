import Dep from "./dep.js"
import { isObject } from "./utils.js"

export default function reactive(data) {
    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            defineReative(data, key)
        })
    }
    return data
}

export function defineReative(data, key) {
    let val = data[key]
    const dep = new Dep()
    Object.defineProperty(data, key, {
        get() {
            dep.depend()
            return val;
        },
        set(newVal) {
            val = newVal;
            dep.notify()

        }
    })
    if (isObject(val)) {
        reactive(val)
    }
}
