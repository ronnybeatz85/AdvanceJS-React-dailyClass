
//id traversal
const heading = document.getElementById("myHeading");
console.log(heading);

heading.style.color="tamato";
heading.backgroundColor="yellow";

//class traversal
const para=document.getElementsByClassName
("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan";
}

