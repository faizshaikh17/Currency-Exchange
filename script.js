let url = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
for ( let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "From" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "To" && currCode === "INR" ){
            newOption.selected = "selected";
        }
        select.append(newOption);        
        
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{
       let currCode = element.value;
       let countrycode = countryList[currCode]
       let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
       let img = element.parentElement.querySelector("img");
       img.src = newsrc;
}

btn.addEventListener("click", async()=>{
    let URL = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest/.json"
    let response = await fetch(URL);
    let data = response.json();
    console.log(URL);
});



















































































// let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// let container = document.querySelectorAll(".container select");
// let btn = document.querySelector("form button");
// let fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");

// for(select of container){
//     for(currCode in countryList){
//         let newoption = document.createElement("option");
//             newoption.innerText = currCode;
//             newoption.value = currCode;
//             if(select.name === "From" && currCode === "INR"){
//                 newoption.selected = "selected"
//             }
//             else if(select.name === "To" && currCode === "USD"){
//                 newoption.selected = "selected"
//             }
//             select.append(newoption);       
//     }
//     select.addEventListener("change",(evt)=>{
//             updateFlag(evt.target);
//     });

// }

// let updateFlag = (element) =>{
//     let currCode = element.value;
//     let countrycode = countryList[currCode];
//     let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newsrc;
    
// }

// btn.addEventListener("click", async (evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector("form input");
//     let amtval = amount.value;
//     if(amtval <= 0 || amtval == ""){
//         amtval = 1;
//         amount = "1";
//     }
    
//     // console.log(fromCurr.value);
//     const URL = `${url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     const response = await fetch(URL);
//     const data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
//     console.log(rate);
// })








