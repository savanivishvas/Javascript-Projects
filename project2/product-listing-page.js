const irc = document.querySelector(".inside-restaurant-containar");

const getData = async () => {

    const url = "https://savanivishvas.github.io/Javascript-Projects/products.json";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);


    data.products.map((CurrElement) =>{

        const htmldata = `

            <div class="box">

                <div class="inside-box">

                    <div class="ib-d1">

                        <img src="${CurrElement.image}" class="r-img">

                        <p class="discount-txt">${CurrElement.discount}</p>

                    </div>

                    <div class="ib-d2">
                        <p class="r-txt">${CurrElement['restaurant-name']}</p>
                        
                       <div class="rt-box">
                           <p class="rating">${CurrElement.rating}</p>
                           <img src="../images/star.svg" class="s-img">
                        </div>
                    </div>

                    <div class="ib-d3">
                        <p class="sub-txt">${CurrElement['sub-name']}</p>
                        <p class="price">${CurrElement.price}</p>
                    </div>


                    <div class="ib-d4">
                         <p class="time">${CurrElement['delivery-time']}</p>
                         <hr class="line">
                    </div>

                    <div class="ib-d5">

                    <img src="/images/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.webp" class="safety-img"> 
                        <p class="safety-txt">${CurrElement.safety}</p>  
                        
                    </div>

                </div>
                
        

        </div>
        `;

        irc.insertAdjacentHTML('beforeend',htmldata);
    })
}

getData();


