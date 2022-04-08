function handleInput(){
    var self = this;
    const target = document.getElementById('targetInp');
    target.addEventListener("focusin",self.showSearch);
    target.addEventListener("focusout",self.hideSearch);
    target.addEventListener("input",self.inputChanged);
};

function showSearch(){
    let target = document.getElementById('targetInp');
    if(target != undefined){
        target.innerHTML += '<div class="searchResults"><ul>';
        predefinedCountry.forEach(item =>{
            target.innerHTML +=('<li>' + item + '</li>');
        });
        target.innerHTML +=('</ul></div>');
        console.dir(target);
    }
}

function inputChanged(){
    const target = document.getElementById('targetInp');
    console.log('input changed event listener fired..');
    console.log(predefinedCountry);
};

function hideSearch(){
    console.log('hide search, event fired');

}

function storeNewSearchResult(inputArray){
    if(typeof(inputArray) === Array){
        predefinedCountry = inputArray;    
    }
};

function makeBoldText(){

};

//this will be read via rest calls.... and updated after input changed...
//make this to loverCase always even that the calls return camelCase
var predefinedCountry = [
    "Czechia",
    "United States of America",
    "Canada",
    "Slovensko",
    "Kebab",
    "Čína",
    "Pes",
    "Kočka",
    "Kolo",
    "Penis",
    "Sýkorka",
    "UTF-8"
];
