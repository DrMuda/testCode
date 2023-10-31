// 扁平化对象， {a:{b:{c: 1}}} => {a.b.c: 1}
function flatMap(map, parentKey) {
    if (parentKey === void 0) { parentKey = ""; }
    var nextMap = {};
    Object.entries(map).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var mergeKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
        if (value && typeof value === "object") {
            var childMap = flatMap(value, mergeKey);
            nextMap = Object.assign(nextMap, childMap);
        }
        else {
            nextMap[mergeKey] = value;
        }
    });
    return nextMap;
}
console.log(flatMap({ a: { a: 1 }, b: { b: 1 } }))
