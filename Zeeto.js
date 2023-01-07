//const triangle = (q,w,e) => {
//if max = e -> q+w>e 
//let max = q; 
//if  (max < w) { 
//   max = w; 
//}  
//else if (max < e) {
//   max = e; 
//}  
//  아직 []에 대해 다루는 게 너무 어려운 듯? 응용하는 걸 더 봐야할 거 같다. 
//  max값을 제외한 나머지를 더해서 비교를 하고 싶은데 이럴 땐 배열에서 max값만 제외하는 것이 새로운 함수식을 만드는 것보다 훨씬 효율적이지 않을까? 
// const margin = triangle - max => {
// if (margin > max) {
// console.log("True"); 
//}
//else if (margin < max) {
// console.log("False");
//}
//}
//return triangle; 
//}
//console.log(triangle(6,7,11)); 

/*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 토큰 메모

// 자재에 대한 무게가 평균적으로 있다. 그 와이어의 두께 당 얼만큼의 중량을 감당할 수 있는지 -> 작품의 무게를 커버하기 위한 계산이 필요하다. 
// 자제 무게는 따로 나오고, 그럼 와이어의 두께와 길이에 따른 테스트가 조금 필요할 거 같은데? -> 음...일단 사차형 머릿속에 경험에 의한 data가 있으니까 그걸 기반으로 실제 실험을 적용하고 되었을 때
// 웹페이지로 띄울 수 있을 거 같다. == 작품의 무게와 와이어의 두께와 길이의 상관관계를 구하고 정확한 실험에 의한 식이 도출되면 그 식에 따라서 적용할 수 있다. 
// 목재는 제작자에 의해서 차이가 크다. 값을 지불하는 정도가 달라서 그 목재나 무게의 값이 달라진다.(목재에 인건비를 추가하기 위해 차이를 크게 둔다.) 
// Notion 보다 더 깔끔한, Newsletter 같은 자료를 올려주고 수시로 확인 가능한 프로그램*/

const loginDiv= document.querySelector('#login-form'); 
const loginInput = loginDiv.querySelector('input');
const loginBtn = loginDiv.querySelector('button'); 

console.log(loginBtn); 

function ButtonClick() {
  const name = loginInput.value; 
  if (name.length == 0) {
    return alert ("You must type your name above one letter");  
  } else if (name.length > 12) {
    return alert ("You can't type your name above 15 letters");
  } else console.log(name); 
} 

loginBtn.addEventListener("click", ButtonClick);