

const arr = [
    { name: 'localStorage1', group: 'samsong', selYear: 2021 },
    { name: 'localStorage2', group: 'Iphone', selYear: 2021 },
    { name: 'localStorage3', group: ' of phone', selYear: 2021 },
    { name: 'localStorage4', group: ' laptop ', selYear: 2021 },
    { name: 'localStorage5', group: 'assus phone', selYear: 2021 },
    { name: 'localStorage6', group: 'vivo mobile ', selYear: 2021 },
    { name: 'localStorage7', group: 'ranar phone', selYear: 2021 },
    { name: 'localStorage8', group: 'imax laptop', selYear: 2021 },
    { name: 'localStorage9', group: 'moto phone', selYear: 2021 },
    { name: 'localStorage10', group: 'hajari laptop ', selYear: 2021 },
    { name: 'localStorage11', group: 'assus mobile', selYear: 2021 },
    { name: 'localStorage12', group: 'vivo mobile ', selYear: 2021 },
    { name: 'localStorage13', group: 'ranar laptop', selYear: 2021 },
    { name: 'localStorage14', group: 'imax phone', selYear: 2021 },
    { name: 'localStorage15', group: 'jala laplop', selYear: 2021 }
];


function product(names, search) {

    let result = [];

    for (let newarr of names) {
        if (newarr.group.toLowerCase().includes(search.toLowerCase())) {
            result.push(newarr);
        }

       else {
            console.log(`No---match input please cerect input `);
         }


    }
    return result;

}


const input = product(arr, 'phon');
console.log(input);