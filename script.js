let score = 0
let i = 0
let getValue;
const arrayOfQuestions = [
    {
        question: 'What is the capital of Saudi Arabia',
        options: ['Lima', 'Riyadh', 'Jarkata'],
        answer: 'Riyadh',
        chosen_answer: ''
    },
    {
        question: 'How many sides is a Pentagon',
        options: [2, 5, 0],
        answer: 5,
        chosen_answer: ''
    },
    {
        question: 'How many sides is an Octagon',
        options: [2, 5, 8],
        answer: 8,
        chosen_answer: ''
    },
    {
        question: 'What is the capital of Italy',
        options: ['Nicaragua', 'Athens', 'Rome'],
        answer: 'Rome',
        chosen_answer: ''
    },
    {
        question: 'Who discovered the <em>Law of Gravity</em>',
        options: ['Stephen Hawking', 'Sir Isaac Newton', 'Charles Babbage'],
        answer: 'Sir Isaac Newton',
        chosen_answer: ''
    }
]
const check = (e) => {
    getValue.forEach(ele => {
        ele.checked = false
    })
    val = e.target
    arrayOfQuestions[i].chosen_answer = val.value
    val.checked = true
    console.log(arrayOfQuestions[i].chosen_answer);
}
const displayQuestion = () => {
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
const navigateQuestion = (e) => {
    if (e.target.innerHTML === 'Next') {
        if (i === arrayOfQuestions.length - 1) {
            document.getElementById('submit').classList.remove('d-none')
            return
        }
        i++
        displayQuestion()
    } else if (e.target.innerHTML === 'Previous') {
        if (i === 0) {
            return
        }else{
            document.getElementById('submit').classList.add('d-none')
        }
        i--
        displayQuestion()
    }
}
const total = ()=>{
    arrayOfQuestions.forEach(e =>{
        if (e.chosen_answer == e.answer) {
            console.log(e.chosen_answer, e.answer);
            score+= 100 / arrayOfQuestions.length  
        }        
    })
    document.querySelector('.con').innerHTML = ` <div class="card d-flex justify-content-center align-items-center" style="width: 35rem;">
   
    <div class="card-body">
    Your score is ${score}%
    </div>

     </div>`
    score = 0
}

document.getElementById('submit').addEventListener('click', total)
document.querySelector('.prev').addEventListener('click', navigateQuestion)
document.querySelector('.next').addEventListener('click', navigateQuestion)
