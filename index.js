const inputContainer = document.getElementById("input-container");
const listContainer = document.getElementById("list-container");


document.querySelector("button").addEventListener("click", ()=>{
    if(inputContainer.value === ''){
        alert('Please enter a valid task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputContainer.value;
        listContainer.appendChild(li);
        //let us also keeo creating cross buttons
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
    }

    inputContainer.value = null;
    store();
});


//delete or check/uncheck the element
listContainer.addEventListener("click", function (event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("tick");
        store();
    }

    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        store();
    }
}, false);


//LOCAL storage

function store(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showAlways(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showAlways();