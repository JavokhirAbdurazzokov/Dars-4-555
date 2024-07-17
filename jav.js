let son1=+prompt("Xoxlagan sonigizni kiriting")
let  son2=+prompt("Xoxlagan 2 sonigizni kiriting")
let javob=+prompt("1: Qoshish \n 2: Ayirish \n 3: Bolish \n 4: bolish ")

if(javob==1){
  console.log(son1+ "+"+son2+"=" ,son1+son2);
}else if(javob==2){
  console.log(son1+ "-"+son2+"=" ,son1-son2);
}else if(javob==3){
  console.log(son1+ "-"+son2+"=" ,son1*son2);
}
else if(javob==4){
  console.log(son1+ "-"+son2+"=" ,son1/son2);
}