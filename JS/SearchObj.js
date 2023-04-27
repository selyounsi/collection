/**
 * SearchObj
 * @param {string} value 
 * @param {object} obj 
 * @param {string} keyname 
 * @returns Filtered Object
 */
function SearchObj(value, obj, keyname) {
    return Object.keys(obj).filter(key => {
        return obj[key][keyname].toLowerCase().includes(value.toLowerCase())
    })
    .map(foundKey => ({...obj[foundKey], key: foundKey }))
}

/**
 * Example Code
 */
let streets = [
    {id: 1, address: "Teststraße 1"},
    {id: 2, address: "Teststraße 2"}
];

let data = SearchObj("Teststraße", streets, "address")