const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const counter = document.querySelector("#counter");
const commentForm = document.querySelector("#comment-form");
const list = document.querySelector("#list");

minus.addEventListener("click", function(e) {
    
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