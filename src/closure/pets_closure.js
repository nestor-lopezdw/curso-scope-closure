
function createPetList() {
    const petList = [];
    return function(pet){
        if(pet)
        petList.push(pet);
        console.log(petList);
        return petList;
    }
    return petList;
}

const mySavePets = createPetList();
mySavePets("michi");
mySavePets("Hashi");
mySavePets("nemo");
mySavePets();