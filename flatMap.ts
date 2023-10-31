// 扁平化对象， {a:{b:{c: 1}}} => {a.b.c: 1}
function flatMap(
  map: Record<string, object | string>,
  parentKey = ""
): Record<string, string> {
  let nextMap: Record<string, string> = {};
  Object.entries(map).forEach(([key, value]) => {
    const mergeKey = parentKey ? `${parentKey}.${key}` : key;
    if (value && typeof value === "object") {
      const childMap = flatMap(
        value as Record<string, object | string>,
        mergeKey
      );
      nextMap = Object.assign(nextMap, childMap);
    } else {
      nextMap[mergeKey] = value as string;
    }
  });
  return nextMap;
}

flatMap({ a: { a: 1 }, b: { b: 1 } });
