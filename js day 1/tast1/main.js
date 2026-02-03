const task1 = document.getElementById
("profile");
task1.style.backgroundColor="tomato";
task1.style.padding="15px"
task1.style.textAlign="center"

const task2 = document.getElementsByClassName
("important");
console.log(task2);

for(let i=0;i<task2.length;i++){
    if(i%2===0){
    task2[i].style.color="purple"
    task2[i].style.fontSize="40px"
}
}
console.log(task2.length)
const content=document.getElementById
("content");

const task3=document.querySelectorAll
("p");
for(let i=0;i<task3.length;i++){

    task3[i].style.
    backgroundColor="cyan";
}







