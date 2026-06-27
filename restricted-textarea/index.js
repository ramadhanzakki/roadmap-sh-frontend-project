const inputText = document.getElementById("messege");
const counter = document.getElementById("counter");

let totalInput;

inputText.addEventListener('input', () => {
    totalInput = inputText.value.length;
    counter.textContent = `${totalInput}/250`;

    if (totalInput >= 250) {
        inputText.classList.add("limit");
    } else {
        inputText.classList.remove("limit");
    }
})

