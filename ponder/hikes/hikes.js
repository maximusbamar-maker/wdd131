const people = [{name: "James", age: 33},
                {name: "Bob",   age: 12},
                {name: "Max",   age: 21},
                {name: "Josh",  age: 47}];

people.sort(sortPeopleByName);

console.log(people);

// a custom sort function is needed to sort some things such as objects
// a sort function can be any complexity but should return -1, 1, or 0 depending upon the conditions in it
function sortPeopleByName(a, b) {
    a_name = a.name.toLowerCase();
    b_name = b.name.toLowerCase();

    console.log("A " + a_name);
    console.log("B " + b_name);

    if(a_name < b_name) {
        return -1; // left
    }

    else if (a_name > b_name){
        return 1; // right
    }

    return 0; // stay
}