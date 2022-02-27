const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*
for (let i = 0; i<10; i++){};
for (const num of numbers){} //array
for (const prop in studend){} //object
*/

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
};

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    console.log(prop, bottle[prop])
};

// ====== adbanced =========
const entries = Object.entries(bottle)
// console.log(entries);
// const [key, values] = ['key', 'values'];
for (const [key, values] of Object.entries(bottle)) {
    console.log(key, values);
}