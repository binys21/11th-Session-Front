let numbers=[];

while(numbers.length<6){ //배열의 전체길이가 6개 이하
    let randNum=parseInt(Math.random()*45+1);
    //중복 제거를 위한 조건문 추가
    if(numbers.indexOf(randNum)==-1){ //중복이 아닌 경우에만 push.
        numbers.push(randNum);
    }
}
console.log(numbers);

for(let i=0;i<6;i++){
    //오름차순 정렬
    numbers.sort((a,b)=>a-b);
    document.getElementById(`ball${i+1}`).innerHTML=numbers[i];
}