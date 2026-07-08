let names = ["Ali", "Ahmed", "Sara", "Fatima"];
let nameSearch = "Fatima";
let found = false;
for(let i = 0; i < names.length; i++) {
    if(names[i] === nameSearch) {
        document.write(`${nameSearch} is at index ${i}<br>`);
        found = true;
        break;
    }
}
if(!found) {
    document.write(`${nameSearch} Element does not exist.<br>`);
}