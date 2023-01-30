let darkMode = localStorage.getItem("darkMode");
const dark_light = document.querySelector("#dark-light");

const darkModeon = () =>{
    document.body.classList.add("dark");
    localStorage.setItem("darkMode","on");
}

const darkModeoff = () =>{
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode","off");
}

if(darkMode === "on"){
    darkModeon();
}


dark_light.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== "on") {
        darkModeon();
    } else {
        darkModeoff();
    }
    console.log(darkMode);

});