import Watcher from "./watcher.js";
export default function watch(getter, callback) {
    new Watcher(getter, { watch: true, callback })
}