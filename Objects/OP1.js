const a = {};
const b = { key: 44 };
const c = { key: 43 };

a[b] = 22;
a[c] = 11;
console.log(a[b]);
