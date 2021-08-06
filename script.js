let score = 0
let i = 0
let getValue;
const arrayOfQuestions = [
    {
        question: 'How many sides does a triangle have',
        options: [1, 2, 3],
        answer: 1,
        chosen_answer: ''
    },
    {
        question: 'How many sides does a pentagon have',
        options: [2, 5, 0],
        answer: 5,
        chosen_answer: ''
    }
]
const check = (e) => {
    getValue.forEach(ele=>{
        ele.checked = false
    })
    val = e.target
    arrayOfQuestions[i].chosen_answer = val.value
    val.checked = true
    console.log(arrayOfQuestions[i].chosen_answer);
}
const displayQuestion = () => {
    if(!arrayOfQuestions[i]){
        alert('Limit reached')
        return
    }
    document.querySelector('.num').innerHTML = `Question ${i + 1}`
    question.innerHTML = arrayOfQuestions[i].question
    options.innerHTML = ''
    arrayOfQuestions[i].options.forEach((ele, index) => {
        options.innerHTML += ` <div class="form-check mb-3">
                <input class="form-check-input ans" name="choice" type="radio" value="${ele}" id="">
                <label class="form-check-label" >
                ${ele}
                </label>
               </div>`
    })
    getValue = document.querySelectorAll('input')
    getValue.forEach(ele => {
        ele.addEventListener('change', check)
        if (ele.value === arrayOfQuestions[i].chosen_answer) {
            ele.checked = true
        }
    })
    
}
displayQuestion()
const navigateQuestion = (e)=>{
    if (e.target.innerHTML === 'Next') {
        i++
        displayQuestion()
    }else{
        if (e.target.innerHTML === 'Previous'){
            i--
            displayQuestion()
        }
    }
}
document.querySelector('.prev').addEventListener('click', navigateQuestion)
document.querySelector('.next').addEventListener('click', navigateQuestion)
