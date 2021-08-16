export function convertSetToArray<T>(set: Set<T>): T[] {
  const o: T[] = [];
  set.forEach(s => {
    o.push(s);
  });
  return o;
}

export function convertMapToArray<K, V>(map: Map<K, V>): any[] {
  const o: any[] = [];
  map.forEach((v, k) => {
    if (typeof k === 'string' || typeof k === 'number') {
      const obj = {
        [k]: v
      };
      o.push(obj);
    }
  });
  return o;
}

export function convertArrayToMap<V>(array: any[]): Map<any, any> {
  const o: Map<any, V> = new Map();
  for (const v of array) {
    Object.keys(v).forEach(k => {
      o.set(+k, v[k]);
    })
  }
  return o;
}

export function setItem(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string, parse: boolean = true): any {
  const item = localStorage.getItem(key);
  return parse && item != null ? JSON.parse(item) : item;
}
