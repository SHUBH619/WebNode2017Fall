let b = 20;
let a= 10;

export const num = (a + b) ; //always exports const variables/funcs so that there value doesn't change
export const fun = function () {console.log('hello')};

export default {
    p: 10,
    q: 20
}
