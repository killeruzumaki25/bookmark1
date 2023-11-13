var oldBody = document.querySelector("body")
var newStyle =document.createElement('style');
newStyle.innerText`
body{ 
  background-color:red;
}
`;  
oldBody.appendChild(newStyle);
