let carddata = [
    {
    quiz:"HTML Quiz",
    page: "html.html"
    },
    {
    quiz:"CSS Quiz",
    page:"css.html"
    },
    {
    quiz:"JS Quiz",
    page:"js.html" 
    },
    ]
    
    function card(carddata) {
    let div = document. getElementById("container");
    let h1 = document. createElement("h1");
    h1. textContent = `Quiz`;
    div.appendChild(h1);

    for ( i = 0; i < carddata. length; i++) {
    let data1 = carddata[i];
    let data = document. createElement("div");
    data. classList. add("cards");

    let quiz = document. createElement("p");
    quiz. textContent = data1.quiz
    data. appendChild(quiz);
    div. appendChild(data);

    data.addEventListener('click', function() {
    window.location.href = data1.page
   

    })

    }
   }

card(carddata)