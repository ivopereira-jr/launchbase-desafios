const cards = document.querySelectorAll(".card-wraper")

cards.forEach(card => card.addEventListener("click", function() {

    const cardId = card.getAttribute("id")

    window.location.href = `/cursos/${cardId}`
    
}))

