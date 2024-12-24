arrCard = [
    {title: " Yakuza Fiancé: Raise wa Tanin ga Ii", image: " assets/anime/n1.jpeg"},
    {title: " Cheng He Titong - How dare you !?", image: " assets/anime/n2.jpeg"},
    {title: " Renegade Immortal - Xian Ni", image: " assets/anime/n3.avif"},
    {title: " Battle Through the Heavens 5th Season", image: " assets/anime/n4.avif"},
    {title: " Blue Lock vs. U-20 Japan ", image: " assets/anime/n5.jpeg"},
    {title: " Soul Land 2: The Peerless Tang Clan", image: " assets/anime/n6.avif"},
    {title: " The Demon Hunter", image: " assets/anime/n7.jpeg"},
    {title: " Perfect World", image: " assets/anime/n8.webp"},
    

];

function getCards(){
    const cardRow = document.getElementById("rowCardAnime");
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