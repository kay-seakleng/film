arrCard = [
    {title: " True Beauty", image: "assets/drama/d1.webp"},
    {title: " My Demon", image: "assets/drama/d2.jpeg "},
    {title: " Lovely Runner", image: " assets/drama/d3.webp"},
    {title: " Marry My Husband", image: " assets/drama/d4.jpeg"},
    {title: " Snowdrop", image: " assets/drama/d5.jpeg "},
    {title: " Queen of Tears", image: " assets/drama/d6.jpeg"},
    {title: " A Business Proposal", image: " assets/drama/d7.jpeg "},
    {title: " Twinkling Watermelon", image: " assets/drama/d8.jpeg"},
    {title: " Love Next Door", image: " assets/drama/d9.jpeg "},
    {title: " Family by Choice ", image: " assets/drama/d10.avif "},
    {title: " My Lovely Liar", image: " assets/drama/d11.jpeg"},
    {title: " When the Phone Rings", image: " assets/drama/d12.jpeg "},
    {title: " Falling Into Your Smile", image: " assets/drama/d13.webp"},
    {title: " Fireworks of My Heart", image: " assets/drama/d14.webp"},
    {title: " My Boss", image: " assets/drama/d15.avif "},
    {title: " When I Fly Towards You", image: " assets/drama/d16.jpeg "},
    


];

function getCards(){
    const cardRow = document.getElementById("rowCardDrama");
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
