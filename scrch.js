const product = [
    { name: 'localStorage1', group: 'walton', selYear: 2021 },
    { name: 'localStorage2', group: 'Iphone', selYear: 2021 },
    { name: 'localStorage3', group: ' of phone', selYear: 2021 },
    { name: 'localStorage4', group: ' laptop ', selYear: 2021 },
    { name: 'localStorage5', group: 'assus phone', selYear: 2021 },
    { name: 'localStorage6', group: 'vivo mobile ', selYear: 2021 },
    { name: 'localStorage7', group: 'ranar phone', selYear: 2021 },
    { name: 'localStorage8', group: 'imax laptop', selYear: 2021 },
    { name: 'localStorage9', group: 'jala phone', selYear: 2021 }
];

function feProbuct(products, secrch) {

    let result = [];

    for (let newproduct of products) {
        if (newproduct.group.toLowerCase().includes(secrch.toLowerCase())) {
            result.push(newproduct);
        }else{
            return `No---match input please cerect input `
        }

    }
    return result;
}



const input = feProbuct(product, "phone");
console.log(input);


// // function feProbuct(products, search) {

// //     let result = [];

// //     for (let newproduct of products) {
// //         if (newproduct.group.includes(search)) {
// //             result.push(newproduct);
// //         }
// //     }

// //     return result;
// // }

// const input = feProbuct(product, "phone");
// console.log(input);
