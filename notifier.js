function handleInput(){
    var self = this;
    const target = document.getElementById('targetInp');
    target.addEventListener("focusin",self.showSearch);
    target.addEventListener("focusout",() => {
        setTimeout(function() {self.hideSearch()},300);
    });
    target.addEventListener("input",self.inputChanged);
    filteredArrays = predefinedCountry;
};

function showSearch(){
    const target = $('.kebab');
    if(target != undefined){
        let fullHtml = '';
        fullHtml += ('afterend','<div class="searchResults"><ul>');
        filteredArrays.forEach(item =>{
                fullHtml +=('<li>' + item + '</li>');
        });    
        fullHtml += ('</ul></div>');
        target.append(fullHtml);
    }
    $(".kebab").on("click","li",function(){
        self.insertIntoInput($(this).text());
    })
}

function insertIntoInput(item){
    console.log('inserting : ',item);
    $('.searchBar').val(item);
}

function inputChanged(){
    const targetVal = $('.searchBar').val();
    let targetItem = predefinedCountry;
    let result = new Array();
    if(targetVal === ''){
        result = targetItem;
    }else{
        targetItem.forEach(item =>{
            let insertItem = false;
            for(let i = 0; i < targetVal.length; i++){
                if(targetVal[i].toString().toLowerCase() === item[i].toString().toLowerCase()){
                    insertItem = true;
                }else{
                    insertItem = false;
                }
            }
            if(insertItem){
                result.push(item);
            }
            /*if(item.toLowerCase().indexOf(targetVal.toLowerCase()) >= 0){
                result.push(item);
            }*/
        });
    }
    storeNewSearchResult(result);
    hideSearch();
    showSearch();
};

function hideSearch(){
    $('.searchResults').remove();

}

function storeNewSearchResult(inputArray){
        filteredArrays = inputArray;
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
    "Pero",
    "Sýkorka",
    "UTF-8"
];

var filteredArrays = [
];
