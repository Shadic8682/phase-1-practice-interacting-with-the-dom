const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const counter = document.querySelector("#counter");
const commentForm = document.querySelector("#comment-form");
const list = document.querySelector("#list");
let counterNum = parseInt(counter.textContent);

minus.addEventListener("click", function(e) {
    counterNum--
    counter.textContent = counterNum
})

plus.addEventListener("click", function(e) {
    counterNum++
    counter.textContent = counterNum
})

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    newComment(e.target["comment-input"].value)
    commentForm.reset()
})

function newComment(comment) {
    let p = document.createElement("p")
    p.textContent = `${comment}`
    list.appendChild(p)
}

setInterval(() => {
            counterNum++
            console.log(counterNum)
            counter.textContent = counterNum
    }, 1000)


// pause.addEventListener("click", function(e) {

// }
