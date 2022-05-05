
//map preserves the order of insertion of key value pairs

//map also preserves the data type of keys i.e.it doesnot converts the key to string by default like what object does .so, maps can store keys of any data.


//how to create a map
let map = new Map();

//how do we set values to map
map.set("name","supi");
map.set("age",3);
map.set(1,"one");
map.set("phone",98765432);
map.set(true,"boolean");

console.log(map.get("name"));
console.log(map.get(1));
console.log(map.get("true"));

console.log(map.has("age"));

console.log(map.delete(true));

//console.log(map.clear());

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value);
}

for(let entry of map.entries()){
    console.log(entry);
}

map.foreacg(function(value,key){
    console.log(key, value);
})
console.log(map);


//sets has no keys but only unquies values..
//sets can not give u key value pairs, but only value value pairs using .entries() method.

let set = new Set();
set.add("tea");
set.add("coffee");
set.add("milk");
set.add("juice");
set.add("water");

console.log(set.values());
console.log(set.keys());
console.log(set.entires());
console.log(set.has("juice"));
console.log(set.delete("tea"));
////console.log(set.clear());

for(let key of set.keys()){
    console.log(key);
}

for(let value of set.values()){
    console.log(value);
}

for(let entry of set.entries()){
    console.log(entry);
}

set.foreacg(function(value,key){
    console.log(key, value);
})
console.log(set);











