arrCard = [
    {title: " Moana 2", image: " assets/action/a1.jpeg"},
    {title: " Venom: The Last Dance", image: " assets/action/a15.jpeg"},
    {title: " Mufasa The Lion King", image: " assets/action/a3.jpeg"},
    {title: " Sonic the Hedgehog 3", image: " assets/action/a4.jpeg"},
    {title: " The Six Triple Eight", image: " assets/action/a5.jpeg"},
    {title: " Carry-On", image: " assets/action/a6.jpeg"},
    {title: " Small Things Like These", image: " assets/action/a7.jpeg"},
    {title: " Anora (2024)", image: " assets/action/a8.jpeg"},
    {title: " Red one", image: " assets/action/a9.jpeg"},
    {title: " Weekend in Taipei", image: " assets/action/a10.jpeg"},
    {title: " Smile 2", image: " assets/action/a11.jpeg"},
    {title: " High Potential", image: " assets/action/a12.jpeg"},
    

];

function getCards(){
    const cardRow = document.getElementById("rowCardHollywood");
    cardRow.innerHTML = "";

    arrCard.forEach( item => {
        const card = `
         <div class="col-6 col-lg-3 mb-5 " >
                    <div class="card overflow-hidden">
                        <img src="${item.image}" alt="" >
                        <div class="card-footer text-bg-dark">
                            <p>${item.title}</p>
                        </div>
                    </div>
                </div>
        `;
        cardRow.innerHTML += card;
    })
    
}
getCards();