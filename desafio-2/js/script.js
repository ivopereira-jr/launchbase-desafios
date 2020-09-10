const cards = document.querySelectorAll(".card-wraper")
const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")

cards.forEach(card => card.addEventListener("click", function() {
    if(modal.classList.contains("resize")) {
        modal.classList.remove("resize")
    }
    
    modalOverlay.classList.add("active")

    const cardId = card.getAttribute("id")
    
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`

    
}))


modalOverlay.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})

modalOverlay.querySelector(".maximize").addEventListener("click", function() {

    if(modal.classList.contains("resize")) {
        modal.classList.remove("resize")
    } else {
        modal.classList.add("resize")
    }
    

})
