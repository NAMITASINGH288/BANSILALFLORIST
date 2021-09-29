/*localStorage.setItem('name','ravinder')

 var a=localStorage.getItem("name")
alert(a);*/

function addtocart(){
var imgpath=document.getElementById("img").getAttribute("src");
var title=document.getElementById("title").innerText;
var price=document.getElementById("price").innerText;

var merge="IMAGE PATH=" +imgpath+ "IMAGE TITLE=" +title+ "PRICE=" +price;

document.cookie="product_1"+merge+"; max-age="+60*60*24*10;
}
/*function toggleclick(){
var humburger=document.getElementById('opensidemenu');
var menu =document.getElementsByClassName('sidebarmenu');
var displaysetting =menu.style.display;

if(displaysetting=='block'){
    menu.style.display = 'none';
    humburger.innerHTML ='show sidebarmenu';
}
else{
    humburger.style.display= 'block';
    menu.innerHTML = 'hide sidebarmenu';
    
}
}*/
$(document).ready(function(){
    $('#opensidemenu').click(function(){
        $('.sidebarmenu').toggle();
    })
})
