console.info('lib run');
function sum (a, b) {return a + b}

console.info(sum(5,6));
console.info(exports === module.exports); //originally both point to same object

exports = module.exports = {  //recommended
    sum: sum
};

console.log(exports === module.exports);
