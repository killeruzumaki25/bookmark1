var oldBody = document.querySelector("body");

var newHead = document.createElement('head');
oldBody.appendChild(newHead);

var icons = document.createElement('link');
icons.innerHTML="<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />";
newHead.appendChild(icons);

var newStyle =document.createElement('style');
newStyle.innerText=`
body{ 
}
.con{
background-color:white;
width:35%;
height:50vh;
position:absolute;
left:65%;
display:flex;
z-index:1;
top:0;
border-radius:2%;
overflow:hidden;
}
.searchInput{
width:80%;
height:5vh;
font-size:120%;
margin-top:10vh;
}
.material-symbols-outlined{
cursor:pointer;
}
.conUp{
animation:conUp 1s linear;
animation-fill-mode:both;

}
@keyframes conUp{
100%{height:6vh}
}
.openBtn{
animation:openBtn 1s linear;
animation-fill-mode:both;
transform-origin:center;
transition: transform 0.5s;

}
@keyframes openBtn{
  0% {
    transform: rotate(0deg); /* Specify the initial rotation value */
  }
100%{transform:rotate(180deg)}
}
.closeBtn{
height:6vh;
width:6vh;
}
.title{
width:80%;
position:absolute;
top:-2vh;
text-decoration:underline;
}
.searchBtn{
position:absolute;
top:10vh;
height:6vh;
left:85%;
}
`;  
oldBody.appendChild(newStyle);

const con = document.createElement('div');
con.classList.add('con');
oldBody.appendChild(con);

const title = document.createElement('h2');
title.innerText="Word find";
title.classList.add('title')
con.appendChild(title);

const searchInput = document.createElement('input');
searchInput.classList.add('searchInput');
con.appendChild(searchInput);

const closeBtn = document.createElement('span');
closeBtn.classList.add("material-symbols-outlined","closeBtn")
closeBtn.innerHTML="arrow_upward";
con.appendChild(closeBtn);

const searchBtn = document.createElement('button');
searchBtn.innerText="Search";
searchBtn.classList.add('searchBtn');
con.appendChild(searchBtn);

closeBtn.addEventListener('click',()=>{
  con.classList.toggle('conUp');
  closeBtn.classList.toggle('openBtn');
})
var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

searchBtn.addEventListener('click', () => {
  var searchInputV = searchInput.value;
  if (searchInputV !== "") {
    let regExp = new RegExp(searchInputV, "gi");
    elements.forEach((element) => {
      element.innerHTML = element.innerHTML.replace(regExp, '<mark>$&</mark>');
    });
  }
});
