
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

/*function findMatching(nameArray, stringArg){
    const nameArray2 = nameArray.filter(function(person) {
        return person.toLowerCase() === stringArg.toLowerCase();
    })
    return nameArray2;
}*/

function findMatching(nameArray, stringArg){
    return nameArray.filter(function(person) {
        return person.toUpperCase() === stringArg.toUpperCase();
    })
}

//question: why is a new const declaration needed if filter creates a new array? function(person) needed? filter, map = returning new array allow for a direct return

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(nameArray, stringArg){
     return nameArray.filter(function(person) {
        return person.toLowerCase().indexOf(stringArg.toLowerCase()) == 0
     })
 }

//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(nameArray, stringArg){
    return nameArray.filter(function(person) {
        return person.name === stringArg
    })
}