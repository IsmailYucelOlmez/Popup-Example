const submitButton=document.querySelector(".submit-btn");
const popup=document.querySelector(".popup");
const confirmButton=document.querySelector(".confirm-btn");

const showPopup=()=>{

    popup.classList.add("open-popup");
}

submitButton.addEventListener("click",()=>{

    showPopup();
    console.log("çalıştı");
});

const hidePopup=()=>{

    popup.classList.remove("open-popup");
    
};

confirmButton.addEventListener("click",()=>{

    hidePopup();
});