let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

let button_search = document.getElementById("button_search");
let word_for_search = document.getElementById("word_for_search");
let text = document.getElementById("text");

let result_count = document.getElementById("result_count");
let result_title = document.getElementById("result_title");
let result_text = document.getElementById("result_text");
let back_to_search = document.getElementById("back_to_search");

button_search.addEventListener("click" , () => {

    let regex = new RegExp(word_for_search.value,"g");
    let user_text = text.value;
    let i = 0;

    let NewText = user_text.replace(regex,(word) => {
        i += 1;
        return `<span class='bg-sky-400'>${word}</span>`
    });

    box1.classList.add("hidden");
    box2.classList.remove("hidden");
    result_title.innerHTML = `Serach For : ${word_for_search.value} In Your Text`;
    result_count.innerHTML = `Count : ${i}`;
    result_text.innerHTML = NewText;

});

back_to_search.addEventListener("click" , () => {

    box1.classList.remove("hidden");
    box2.classList.add("hidden");

});