let darkMode = localStorage.getItem("darkMode");
const dark_light = document.querySelector("#dark-light");

const darkModeon = () =>{
    document.body.classList.add("dark");
    // Agrego la clase dark, cambiando las variables definidas en :root

    localStorage.setItem("darkMode","on");
}

const darkModeoff = () =>{
    document.body.classList.remove("dark");
    //Quito la clase dark, alternando entre los dos estilos
    localStorage.setItem("darkMode","off");
}

//Si estaba activado, al recargar la pag se mantiene

if(darkMode === "on"){
    darkModeon();
}


dark_light.addEventListener("click", () => {
    //Busco en el LocalStorage el valor actual de darkMode
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== "on") {
        darkModeon();
    } else {
        darkModeoff();
    }
    console.log(darkMode);

});
