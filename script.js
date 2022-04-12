var label = document.createElement("label");
label.innerHTML = "Enter The Name:";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("id","text");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter Name Here")

var br1=document.createElement("br");

var button=document.createElement("button");
button.setAttribute("class","button")
button.innerHTML="Search"
button.addEventListener("click",foo);

document.body.append(label,br,input,br1,button)

async function foo(){
  try{
  var res= document.getElementById("text").value;
  var ser=await fetch(`https://api.nationalize.io?name=${res}`);
  var res1=await ser.json();
  console.log(res1);
  for(let i=0;i<2;i++){
  var div=document.createElement("div");
  div.innerHTML=`COUNTRY_ID:${res1.country[i].country_id}`;
  var div1=document.createElement("div");
  div1.innerHTML=`PROBABILITY:${res1.country[i].probability}`
  var br2=document.createElement("br");
  document.body.append(div,div1,br2);
}

}catch(error){
  alert("plaese enter the name to see details!!")
}


}
foo()