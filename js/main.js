let elCountryList = document.querySelector(".list");
let elSelect = document.querySelector(".country-select")
let elSearchInput = document.querySelector(".search-input")

function renderCountries(arr, list) {
list.innerHTML = null
arr.map((item) => {

    let elCountryItem = document.createElement("li");
    elCountryItem.className ="w-[264px] rounded-md overflow-hidden bg-slate-300"
    elCountryItem.innerHTML = `
        <img class="w-full h-[160px] object-cover" src=${item.flag} alt="" width="100" height="160"/>
        <div class="p-5">
            <h2 class="font-bold mb-2 text-[22px]">${item.name}</h2>
            <p class="mb-2">Population: ${item.population}</p>
            <p class="mb-2">Capital: ${item.capital}</p>
        </div>
        <div class="flex items-center justify-between p-2">
            <button class="w-[40px] h-[40px] rounded-full  border-[2px] border-black flex items-center justify-center">
                <img src="./images/like-heart-svgrepo-com.svg" width="22" height="22"/>
            </button>
            <button class="w-[40px] h-[40px] rounded-full  border-[2px] border-black flex items-center justify-center">
                <img src="./images/save-instagram.png" width="22" height="22"/>
            </button>
            <button class="w-[40px] h-[40px] rounded-full  border-[2px] border-black flex items-center justify-center">
                <img src="./images/more.png" width="22" height="22"/>
            </button>
            
        </div>
    `;

    list.append(elCountryItem);
});
}

renderCountries(countrys, elCountryList);



function renderSelectOption(arr, list) {
    arr.forEach(item => {
    let elOption = document.createElement("option");
    elOption.textContent = item.capital;
    elOption.value = item.capital.toLowerCase();
    list.append(elOption);
});
}
renderSelectOption(countrys,elSelect)

elSelect.addEventListener("change", function (evt) {
    if(evt.target.value == "all"){
        renderCountries(countrys, elCountryList)
    }
    else{
        const result = countrys.filter(item =>item.capital.toLowerCase() == evt.target.value)
        renderCountries(result, elCountryList);
    }
    
});


elSearchInput.addEventListener("input", function(e) {
    const value = e.target.value.toLowerCase();
    const searchedList = countrys.filter(item => item.name.toLowerCase().includes(value));
    renderCountries(searchedList, elCountryList);
});
