let koolaidman = document.querySelector(".koolaidman");
koolaidman.addEventListener("click", function(){
    if (koolaidman.src.endsWith("Kool-Aid-Man.jpg")){
        koolaidman.src="emptykoolaidman.jpg";
    }
    else if (koolaidman.src.endsWith("emptykoolaidman.jpg")) {
        koolaidman.src="Kool-Aid-Man.jpg";
    }
}
)
