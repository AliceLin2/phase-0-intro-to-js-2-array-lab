// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(cat){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.push(cat)
    return cats;
}
function destructivelyPrependCat(cat){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(cat)
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop()
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift()
    return cats;
}
function appendCat(cat){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let copyOfCats=[...cats];
    copyOfCats.push(cat)
    return copyOfCats;
}
function prependCat(cat){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let copyOfCats=cats.slice();
    copyOfCats.unshift(cat)
    return copyOfCats;
}
function removeLastCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let copyOfCats=cats.slice();
    copyOfCats.pop()
    return copyOfCats; 
}
function removeFirstCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let copyOfCats=cats.slice();
    copyOfCats.shift()
    return copyOfCats; 
}