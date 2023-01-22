// Array.prototype[Symbol.toPrimitive] = (hint) => {
//     console.log(hint);
// };
let order = 0;
const a = new Proxy([1, 2, 3], {
    get(target, prop, receiver) {
        console.log(order++, prop);
        return target[prop];
    },
});

a.valueOf();
a.toString();
a;
+a;
'' + a;
!![];
1 == true;
a.toString();
a == true;
[1] == true;