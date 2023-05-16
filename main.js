var img = document.querySelector(".img")
var contener = document.querySelector(".contener")
function phones(phone){
img.src = phone;
}
function colors(color){
    contener.style .backgroundColor  =color;    
}

var allProducts = document.querySelectorAll(".list li")
  var content = document.querySelector("#content1")
  var btn = document.querySelector("#btn1")
  var totalPrice = 0

   allProducts.forEach( function (item){
        item.onclick = function (){
            totalPrice += +(item.getAttribute("price"))
            content.innerHTML += item.textContent + "+"     

            if (content.innerHTML != "" ){
                btn.style.display = "block"
            
            }
        }
   })

   btn.onclick = function (){
    console.log(totalPrice)
   }



