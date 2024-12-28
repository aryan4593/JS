// console.log("hello");

const baseURL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/{FROM}_{TO}.json"
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const msgEle = document.querySelector(".msg");

window.addEventListener("load" , ()=>{
    updateExchangeRate();
})
for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        
        // for default options
        if(select.name === "from"  && currCode ==="USD") newOption.selected = "selected";
        else if(select.name === "to"  && currCode === 'INR') newOption.selected = 'selected';
        select.append(newOption);
    }

    select.addEventListener("change" , (event) =>{
        updateFlag(event.target); //target is where change has occured
    })
}

let img;
const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode =  countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;

    // element is select and image belongs to it's parents other child

     img = element.parentElement.querySelector("img");
    img.src = newSrc;
}



btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault(); //prevents default like refreshing page
    
    // console.log(URL);
    updateExchangeRate();
})


const updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(!(amtVal > 0)){
        amtVal = 1;
        amount.value = "1";
    }

    let FROM = document.querySelector(".from select");
    let TO = document.querySelector(".to select");

    let URL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${TO.value}_${FROM.value}.json`

    console.log(URL);
    let response = await fetch(URL);
    let jsonObj = await response.json();
    // console.log(jsonObj);

    let rate = jsonObj.rate;
    console.log(amtVal*rate);

    let totalAmt = amtVal * rate;

    msgEle.innerText = `${amtVal} ${dropdown[0].value} = ${totalAmt}${dropdown[1].value}`;

}