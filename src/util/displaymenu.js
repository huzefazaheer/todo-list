const menu = document.querySelector(".left")

export default function displayMenu(){
    if (menu.classList.contains("inactive")){
        menu.classList.add("active")
        menu.classList.remove("inactive")
    }else {
        menu.classList.add("inactive")
        menu.classList.remove("active")
    }
}