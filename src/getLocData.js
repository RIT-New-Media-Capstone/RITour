import data from '../data.json' assert{type: "json"};


const getAllLocs = () => {
    return data;
}

const getLocByName = (name) => {
    for (const loc in data) {
        if (loc == name) {
            return data[loc];
        }
    }
}

const getLocByType = (type) => {
    let resArr = [];
    for (const loc in data) {
        if (data[loc]["type"] == type) {
            resArr.push(data[loc]);
        }
    }
    return resArr;
}

const getLocByLat = (lat) => {
    let resArr = [];
    for (const loc in data) {
        if (data[loc]["lat"] == lat) {
            resArr.push(data[loc]);
        }
    }
    return resArr;
}

const getLocByLong = (long) => {
    let resArr = [];
    for (const loc in data) {
        if (data[loc]["long"] == long) {
            resArr.push(data[loc]);
        }
    }
    return resArr;
}



console.log(getAllLocs());
console.log(getLocByName("Orange Hall"));
console.log(getLocByType("Academic Building"));
console.log(getLocByLat(43.0836820814997));
console.log(getLocByLong(-77.67899871508926));


export { getAllLocs, getLocByName, getLocByType, getLocByLat, getLocByLong };