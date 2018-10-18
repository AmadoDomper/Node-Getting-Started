const[first, ...restOfItems] = [10,20,30,40];

console.log(first);
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
}

const { temp1,temp2, ...person }  = data;

console.log(temp1);
console.log(temp2);
console.log(person);

const newArray = [...restOfItems];
console.log(newArray);

const newArray2 = restOfItems;
console.log(newArray2);

const newObject = {
    ...person,
}

console.log(newObject);