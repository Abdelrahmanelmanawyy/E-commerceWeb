const wrapper = document.querySelector(".sliderWrapper")
const menuItem=document.querySelectorAll(".menuItem")
const currentProductImg=document.querySelector(".productImg")
const currentProductTitle=document.querySelector(".productTitle")
const currentProductPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductDis=document.querySelector(".productDis")
const fListItem=document.querySelectorAll(".fListItem")

const products=[
    {
        id:0,
        title:"earBuds1",
        price:200+"$",
        discreption:"Featuring the latest Bluetooth technology",
        colors:[
            {
                code:"black",
                img:"img/earbuds1.jpg"
            },{
                code:"blue",
                img:"img/earbuds2.webp"
            }
        ],
    },
       { id:1,
        title:"ipone12",
        price:999+"$",
        discreption:"new iphone 12 ram 3gb   ",
        colors:[
            {
                code:"black",
                img:"img/mob1.jpg"
            },{
                code:"blueviolet",
                img:"img/mob2.jpg"
            }
        ],
    }, 
    { id:2,
        title:"mashine",
        price:450+"$",
        discreption:"good washingMashine",
        colors:[
            {
                code:"black",
                img:"img/wash1.jpg"
            },{
                code:"blue",
                img:"img/wash2.jpg"
            }
        ],
    },
    { id:3,
        title:"mercedes benz",
        price:300000+"$",
        discreption:"2000cc ",
        colors:[
            {
                code:"yellow",
                img:"img/car1"
            },{
                code:"black",
                img:"img/car2"
            }
        ],
    },
    { id:2,
        title:"fridge",
        price:2200+"$",
        discreption:"igood lg fridge",
        colors:[
            {
                code:"grey",
                img:"img/fridge1.jpg"
            },{
                code:"black",
                img:"img/fridge2.jpeg"
            }
        ],
    }
]
let choosenProduct=products[0]



menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
       wrapper.style.transform=`translateX(${-100*index}vw)`
       choosenProduct =products[index]
       currentProductTitle.textContent=choosenProduct.title
       currentProductPrice.textContent=choosenProduct.price
       currentProductDis.textContent=choosenProduct.discreption
       currentProductImg.src=choosenProduct.colors[0].img
       currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code;
       });
    
    });
});

fListItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
       wrapper.style.transform=`translateX(${-100*index}vw)`
       choosenProduct =products[index]
       currentProductTitle.textContent=choosenProduct.title
       currentProductPrice.textContent=choosenProduct.price
       currentProductDis.textContent=choosenProduct.discreption
       currentProductImg.src=choosenProduct.colors[0].img
       currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code;
       });
    
    });
});
   

   currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src=choosenProduct.colors[index].img

    });

   });

const prductButton= document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

prductButton.addEventListener("click", ()=>{
    payment.style.display="flex"
});

close.addEventListener("click", ()=>{
    payment.style.display="none"
});

document.querySelector(".contact").addEventListener("click", function() {
   
    var email = "booooody@gmail.com";
    var subject = "Inquiry from your website";
    var body = "Hello, I would like to inquire about...";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

   
    window.location.href = mailtoLink;
});
document.querySelector(".contact-support").addEventListener("click", function() {
   
    var email = "booooody@gmail.com";
    var subject = "Support Inquiry";
    var body = "Hello Support Team,\n\nI have a question or issue that I would like assistance with:\n\n";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

   
    window.location.href = mailtoLink;
});

document.querySelector("#allProducts").addEventListener("click", () => {
    window.location.href = "products.html";
});
document.querySelector(".PayButton").addEventListener("click",()=>{
    alert("Thank you for your purchase! Your order has been successfully placed.");
});

document.querySelector(".cartIcon").addEventListener("click", ()=>{
    window.location.href="cart.html"
  });

  
