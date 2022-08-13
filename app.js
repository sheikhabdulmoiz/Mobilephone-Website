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



function generateHtml(name, color, price, camera, imgsrc) {

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
            price: 130000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"

        },
        iphone11: {
            name: "Iphone 11",
            colors: ["red", "silver"],
            price: 55000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        iphone12: {
            name: "Iphone 12",
            colors: ["red", "silver"],
            price: 213232,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        iphone13: {
            name: "Iphone 13",
            colors: ["red", "silver"],
            price: 211200,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
    },
    samsung: {
        samsunga32: {
            name: "Samsung A32",
            colors: ["red", "silver"],
            price: 85000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungs8: {
            name: "Samsung S8",
            colors: ["red", "silver"],
            price: 55000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsunga52: {
            name: "Samsung A52",
            colors: ["red", "silver"],
            price: 61200,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungs6edge: {
            name: "Samsung S6 edge",
            colors: ["red", "silver"],
            price: 71200,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
    },
    sony: {
        samsunga32: {
            name: "Samsung A32",
            colors: ["red", "silver"],
            price: 85000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungs8: {
            name: "Samsung S8",
            colors: ["red", "silver"],
            price: 55000,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsunga52: {
            name: "Samsung A52",
            colors: ["red", "silver"],
            price: 61200,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
        samsungs6edge: {
            name: "Samsung S6 edge",
            colors: ["red", "silver"],
            price: 71200,
            camera: "12MP",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHec36Ec-STRPCeOxE7CLOZ9SiNm9qo0h1Q&usqp=CAU"
        },
    },
}

// console.log(mobiles["iphone"])

// for (var key in mobiles) {
//     for(var mob in mobiles[key]) {
//         for(var specs in mobiles[key][mob]) {
//             console.log(specs);
//         }
//     }
// }

// for (var mob in mobiles) {
//     for (var key in mobiles[mob]) {
//         console.log(mobiles[mob][key]);
//     }
// }



var iphonex = mobiles["iphone"]["iphonex"];
var card1 = document.getElementById("card1");
card1.appendChild(
    generateHtml(iphonex.name, iphonex.colors, iphonex.price, iphonex.camera, iphonex.src)
);


var iphone11 = mobiles["iphone"]["iphone11"];
var card2 = document.getElementById("card2");
card2.appendChild(
    generateHtml(iphone11.name, iphone11.colors, iphone11.price, iphone11.camera, iphone11.src)
);

var iphone12 = mobiles["iphone"]["iphone12"];
var card3 = document.getElementById("card3");
card3.appendChild(
    generateHtml(iphone12.name, iphone12.colors, iphone12.price, iphone12.camera, iphone12.src)
);

var iphone13 = mobiles["iphone"]["iphone13"];
var card4 = document.getElementById("card4");
card4.appendChild(
    generateHtml(iphone13.name, iphone13.colors, iphone13.price, iphone13.camera, iphone13.src)
);
//-------------------------------------------------------------------------
var samsunga32 = mobiles["samsung"]["samsunga32"];
var card5 = document.getElementById("card5");
card5.appendChild(
    generateHtml(samsunga32.name, samsunga32.colors, samsunga32.price, samsunga32.camera, samsunga32.src)
);

var samsungs8 = mobiles["samsung"]["samsungs8"];
var card6 = document.getElementById("card6");
card6.appendChild(
    generateHtml(samsungs8.name, samsungs8.colors, samsungs8.price, samsungs8.camera, samsungs8.src)
);

var samsunga52 = mobiles["samsung"]["samsunga52"];
var card7 = document.getElementById("card7");
card7.appendChild(
    generateHtml(samsunga52.name, samsunga52.colors, samsunga52.price, samsunga52.camera, samsunga52.src)
);

var samsungs6edge = mobiles["samsung"]["samsungs6edge"];
var card8 = document.getElementById("card8");
card8.appendChild(
    generateHtml(samsungs6edge.name, samsungs6edge.colors, samsungs6edge.price, samsungs6edge.camera, samsungs6edge.src)
);


//---------------------------------------------------------------------
// var iphonex1 = mobiles["iphone"]["iphonex"];
// var card9 = document.getElementById("card9");
// card9.appendChild(
//     generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
// );

// var iphonex1 = mobiles["iphone"]["iphonex"];
// var card10 = document.getElementById("card10");
// card10.appendChild(
//     generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
// );

// var iphonex1 = mobiles["iphone"]["iphonex"];
// var card11 = document.getElementById("card11");
// card11.appendChild(
//     generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
// );

// var iphonex1 = mobiles["iphone"]["iphonex"];
// var card12 = document.getElementById("card12");
// card12.appendChild(
//     generateHtml(iphonex1.name, iphonex1.colors, iphonex1.price, iphonex1.camera,iphonex1.src)
// );


//------------------------------ Search -------------------------------------------------
var dropdown;
var brandName;
var search;
function searchmobile() {
    search = document.getElementById("search")
    mobileName = search.value
    dropdown = document.getElementById("dropdown");
    brandName = dropdown.options[dropdown.selectedIndex].text;
    var lengths = document.getElementById("very_main").childNodes
    console.log(lengths.length);
    if (search.value === "") {
        Swal.fire(
            "Didn't you type?",
            'Please enter Mobile Name to Search!',
            'question'
        )
    }
    else {
        search.value = ""
        var pairsearch = mobiles[brandName][mobileName]
        var flag = false;
        for (var mob in mobiles) {
            for (var key in mobiles[mob]) {
                // console.log(mobiles[mob][key]);
                if (pairsearch === mobiles[mob][key]) {
                    // console.log(mobiles[mob][key])
                    var searched = mobiles[mob][key]
                    var sub_container = document.getElementById("wonder")
                    sub_container.style.display = "none"
                    var lengths = document.getElementById("very_main").childNodes
                    if (lengths.length === 8) {
                        var remover = document.getElementById("very_main")
                        var remove = document.getElementById("afterSearch")
                        remover.removeChild(remove)
                        console.log(lengths.length);
                        //==========================================================
                        var container = document.getElementById("very_main")
                        var afterSearch = document.createElement("div")
                        afterSearch.setAttribute("id", "afterSearch")
                        container.appendChild(afterSearch)
                        var insertFirst = container.firstChild[1]
                        container.insertBefore(afterSearch, insertFirst)
                        var searchedPhone = searched;
                        var searchCard = document.getElementById("afterSearch");
                        searchCard.appendChild(
                            generateHtml(searchedPhone.name, searchedPhone.colors, searchedPhone.price, searchedPhone.camera, iphonex.src)
                        );
                    } else {
                        var container = document.getElementById("very_main")
                        var afterSearch = document.createElement("div")
                        afterSearch.setAttribute("id", "afterSearch")
                        container.appendChild(afterSearch)
                        var insertFirst = container.firstChild[1]
                        container.insertBefore(afterSearch, insertFirst)
                        var searchedPhone = searched;
                        var searchCard = document.getElementById("afterSearch");
                        searchCard.appendChild(
                            generateHtml(searchedPhone.name, searchedPhone.colors, searchedPhone.price, searchedPhone.camera, iphonex.src)
                        );
                    }
                    console.log(lengths.length);
                    flag = true
                }
            }
        }
    }
    if (flag === false) {
        Swal.fire({
            icon: 'error',
            title: 'Not Found',
            text: 'Please search Another Mobile!',
        })
    }

} 1

// // var count=document.getElementById("count")
// var countto = document.getElementsById("count").
// // var newbie=countto.length
// // console.log(newbie);
// console.log(countto);


// var numOfItems = document.getElementById("counter").childNodes.length

// console.log(numOfItems);






// var row=document.getElementById("very_main")
// var nodeToRemove1=row.childNodes[2]
// var nodeToRemove2=row.childNodes[3]
// // var row1=document.getElementById("div_nonvisible")
// row.removeChild(nodeToRemove1)
//     row.removeChild(nodeToRemove2)