{/* <div class="card" style="width: 18rem;">
                    <img class="card-img-top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
                        alt="Card image cap">
                    <div class="card-body" id="card1">
                        <!-- <p class="card-text"></p> -->
                    </div>
                </div>  */}

                // <div class="card" style="width: 18rem;">
                // <img class="card-img-top"
                //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
                //     alt="Card image cap">
                // <div class="card-body">
                //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                //         the card's content.</p>
                // </div>


function generateHtml(name, color, price, camera,imgsrc) {

    var div_main1 = document.createElement("div")
    div_main1.setAttribute("class", "card")
    div_main1.setAttribute("style", "width: 18rem;")
    var img = document.createElement("img")
    img.setAttribute("class", "card-img-top")
    img.setAttribute("src", imgsrc)
    div_main1.appendChild(img)
    var div_main2 = document.createElement("div")
    div_main2.setAttribute("class", "card-body")
    div_main2.setAttribute("id", "card1")
    div_main1.appendChild(div_main2)
    var div_main3 = document.createElement("div")
    div_main3.style.display = 'flex'
    div_main2.appendChild(div_main3)

    var div_main4 = document.createElement("div")
    var div_main5 = document.createElement("div")
    div_main3.appendChild(div_main4)
    div_main3.appendChild(div_main5)
    var ul1 = document.createElement("ul")
    var li1 = document.createElement("li")
    // var li2 = document.createElement("li")
    var li3 = document.createElement("li")
    ul1.appendChild(li1)
    // ul1.appendChild(li2)
    ul1.appendChild(li3)
    div_main4.appendChild(ul1)
    var ul2 = document.createElement("ul")
    var li4 = document.createElement("li")
    // var li5 = document.createElement("li")
    var li6 = document.createElement("li")
    ul2.appendChild(li4)
    // ul2.appendChild(li5)
    ul2.appendChild(li6)
    div_main5.appendChild(ul2)

    var mobileName = document.createTextNode(name)
    // var brandName = document.createTextNode("Brand: "+brand)
    var mobileColor = document.createTextNode(color)
    var price = document.createTextNode(price + "Rs")
    // var memory = document.createTextNode("Memory: "+memory)
    var camera = document.createTextNode(camera)
    li1.appendChild(mobileName)
    // li2.appendChild(brandName)
    li3.appendChild(mobileColor)
    li4.appendChild(price)
    // li5.appendChild(memory)
    li6.appendChild(camera)
    return div_main1;
    // console.log(div_main1);
}

// generateHtml("iphone","red",121310,25,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU");


var mobiles = {
    iphone: {
        iphonex: {
            name: "Iphone x",
            name: "Iphone x",
            colors: ["red", "silver"],
            price: 1300000,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"

        },
        iphonex11: {
            name: "Iphone 11",
            colors: ["red", "silver"],
            price: 55000,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        iphonex12MP: {
            name: "Iphone 12",
            colors: ["red", "silver"],
            price: 213232,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        iphonex13: {
            name: "Iphone 13",
            colors: ["red", "silver"],
            price: 211200,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
    },
    samsung: {
        samsungA32: {
            name: "Samsung A32",
            colors: ["red", "silver"],
            price: 1300000,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungs8: {
            name: "Samsung S8",
            colors: ["red", "silver"],
            price: 55000,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungA52: {
            name: "Samsung A32",
            colors: ["red", "silver"],
            price: 213232,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsunge6adge: {
            name: "Samsung S6 edge",
            colors: ["red", "silver"],
            price: 213200,
            camera: "12MP",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
    },
}

var iphonex1 = mobiles["iphone"]["iphonex"];
var card1 = document.getElementById("card1");
card1.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);


var iphonex1 = mobiles["iphone"]["iphonex"];
var card2 = document.getElementById("card2");
card2.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card3 = document.getElementById("card3");
card3.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card4 = document.getElementById("card4");
card4.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card5 = document.getElementById("card5");
card5.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card6 = document.getElementById("card6");
card6.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card7 = document.getElementById("card7");
card7.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card8 = document.getElementById("card8");
card8.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card9 = document.getElementById("card9");
card9.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card10 = document.getElementById("card10");
card10.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card11 = document.getElementById("card11");
card11.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);

var iphonex1 = mobiles["iphone"]["iphonex"];
var card12 = document.getElementById("card12");
card12.appendChild(
    generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
);
















// var card_body=document.getElementById("card-body")
// card_body.innerHTML=div_main

