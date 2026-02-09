// function handleClick(){
//     document.getElementById("btn").
//     textContent="Clicked"

// }

// function handleClick(){
//    const head= document.querySelector("h1");
//      head.style.color="tomato"
//      head.textContent="New heading"
// }

document.getElementById("btn").addEventListener
("click",()=>{
    const spanEle=document.createElement
    ("span").textContent="this is span element";
    
    const image =document.createElement
    ("img");

    image.setAttribute("src","https://imgs.search.brave.com/X2ZYZfIRpJQTzdGzWUMqrZgcXU8QiqLSfWguRoAPaUY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzJk/LzJkLzJjMmQyZDk3/NWEzMWNlMDgwZDZk/NjdlYmRjY2ZkNWNi/LmpwZw");

    image.setAttribute("alt","K.R Mangalam");

    document.getElementById("content").append
    (spanEle);
    document.getElementById("content").append
    (image);


    
})