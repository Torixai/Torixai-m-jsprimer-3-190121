const obj = {
    "apple": 1,
    "orange": 2,
    "lemon": 4,
    "sour": "plum"
};

Object.keys(obj).forEach(key =>{
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
})

const sourfruit = [
    {"sour": "plum"},
    {"sour": "lemon"},
    {"sour": "bloodorange"}
];

const sourFruit = sourfruit.find((object) => {
    return object.sour === "plum";
});

console.log(sourFruit);

const nameSourFruit = sourFruit.sour;

console.log(nameSourFruit);