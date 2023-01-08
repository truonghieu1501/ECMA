const restau = {
    name : 'clasico italia',
    location : 'ronaldo , lukaku , modric',
    categories : ['messi','neymar','ramos'],
    satrMenu : ['kross','nunez','raford'],
    mainMenu : ['pyond','varane','cr7'],

    oder : function (satrIndex,mainIndex){
        return (this.satrMenu[satrIndex], this.mainMenu[mainIndex]);
    }
}

let [main,,res] = restau.categories;
console.log(main,res);



const [starder,mainer] = restau.oder(1,0);
// console.log(restau.oder(2,0));
console.log(starder.mainer);