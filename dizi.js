const parcalar= ["anakart", "ram","ekran kartı"];

var degisim= document.getElementsByClassName("degisim")[0];
var ekle= document.getElementById("ekle");
var ekle1= document.getElementById("ekle1");
var ekle_btn= document.getElementById("ekle_btn");
var ekle_btn1= document.getElementById("ekle_btn1");
var kaldir= document.getElementById("kaldir");
var kaldir1= document.getElementById("kaldir1");



parcalar.forEach((eleman,index)=>{
    degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${eleman}</div>`
});

ekle_btn.addEventListener("click", function(){
    parcalar.push(ekle.value);
    console.log(parcalar);
    
    degisim.innerHTML=""
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${eleman}</div>`
        ekle.value="";
    });
});

kaldir.addEventListener("click", ()=>{
    parcalar.pop();
    console.log(parcalar);
    degisim.innerHTML=""
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${eleman}</div>`
})});

ekle_btn1.addEventListener("click", function(){
    parcalar.unshift(ekle1.value);
    console.log(parcalar);
    degisim.innerHTML=""
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${eleman}</div>`
        ekle1.value="";
    });
});

kaldir1.addEventListener("click", ()=>{
    parcalar.shift();
    console.log(parcalar);
    degisim.innerHTML=""
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${eleman}</div>`
})});
/*yeni kodlar*/

const veriler=["mehmet", "cihan", "mustafa","kemal","zübeyde"];
var sirala= document.getElementsByClassName("sirala")[0];
var degistir= document.getElementsByClassName("degistir")[0];
var kesit= document.getElementsByClassName("kesit")[0];
var birlestir=document.getElementsByClassName("birlestir")[0];

veriler.forEach((element)=>{
    degistir.innerHTML+= `<div class="alert alert-danger" role="alert">${element}</div>`
});

sirala.addEventListener("click",()=>{
    degistir.innerHTML="";
    veriler.sort().reverse().forEach((element)=>{
        degistir.innerHTML+= `<div class="alert alert-danger" role="alert">${element}</div>`

})});
 


kesit.addEventListener("click",()=>{
    degistir.innerHTML="";
    veriler.slice(1,3).forEach((element)=>{
        degistir.innerHTML+= `<div class="alert alert-danger" role="alert">${element}</div>`

})});

birlestir.addEventListener("click",()=>{
    degistir.innerHTML="";
    parcalar.concat(veriler).forEach((element)=>{
        degistir.innerHTML+= `<div class="alert alert-danger" role="alert">${element}</div>`

})});
