const ratingElement = document.querySelector(".rating");
const btnElement = document.getElementById("btn");

const containerElement = document.getElementById("container");

let selectedRating = "";

ratingElement.foreach((ratingElement)=>{
    ratingElement.addEventListener("click", (event)=>{
        removeActive();
        selectedRating = 
        event.target.innerText || event.target.parentNode.innerText;
        event.target.parentNode.classList.add("active");
    });
});

btnElement.addEventListener("click",() => {
    if (selectedRating !== ""){
        containerElement.innerHTML= `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p>We will use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive(){
    ratingElement.foreach((ratingElement) => {
        ratingElement.classList.remove("active");
    });
}