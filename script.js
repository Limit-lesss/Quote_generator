const apiUrl = "https://api.quotable.io/random";

let quote = document.getElementById("quote");
let authorName = document.getElementById("authorName");
let quoteBtn = document.getElementById("quoteBtn");
let tweetBtn = document.getElementById("tweetBtn");

async function gererateQuote(){
    const response = await fetch(apiUrl);
    let data = await response.json() ;

    quote.innerHTML = data.content ;
    authorName.innerHTML = data.author ;
}

quoteBtn.addEventListener("click",()=>{
    gererateQuote();
});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "%0A----by " + authorName.innerHTML,"Tweet window","width=700, height=500");
}

tweetBtn.addEventListener("click",()=>{
    tweet();
})

gererateQuote();