const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    console.log(cats)
}
function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}
function appendCat (name) {
    return [...cats, name];
}
function prependCat (name) {
    return [name, ...cats];
}

function removeLastCat () {
    let copyOfCats = [...cats]
    console.log("copyOfCats", copyOfCats)
    copyOfCats.pop()
    return copyOfCats
}

function removeFirstCat () {
    return cats.slice(1)
}