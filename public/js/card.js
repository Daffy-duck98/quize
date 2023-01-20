document.querySelector('.main-container').addEventListener("submit", async (e)=>{

e.preventDefault();

const{
    method, action, answer, 
} = e.target;
const { id } = e.target.answer.dataset
console.log(action, method, answer, id)
const res = await fetch (action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      answer: answer.value,
      id,
    }),
})
// console.log(res)
const data = await res.json()

// console.log(answerCor)
if(data.message === 'ok')  {
    document.querySelector('.correct').innerHTML = 'ОТВЕТ ВЕРНЫЙ!!!'
} else {
    document.querySelector('.correct').innerHTML = `НЕ ВЕРНО, ответ ${data.answerCor}`
}

})