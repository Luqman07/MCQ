let score = 0
let i = 0
let getValue;
let count = 10

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
const startQuiz = () => {
    document.querySelector('.con').innerHTML = ` 
     <button class="btn btn-dark" id="start">Start </button>
     <div class="spinner-border text-secondary spin d-none"></div>
    `
}
startQuiz()
const setTimer = (fun) => {
    setTimeout(fun, 2000);
}


const interval = () => {
    let countDown = setInterval(() => {
        console.log('hey');
        if (count === 0) {
            clearInterval(countDown)
            document.querySelector('.con').innerHTML = `<div class="spinner-border text-secondary"></div>`
            setTimer(total)
        } else {
           
            document.getElementById('count').innerHTML = count 
            count--
        }
    }, 2000);

}

const checkAndStoreAns = (e) => {
    getValue.forEach(ele => {
        ele.checked = false
    })
    val = e.target
    arrayOfQuestions[i].chosen_answer = val.value
    val.checked = true
    console.log(arrayOfQuestions[i].chosen_answer);
}


const template =()=>{
    document.querySelector('.con').innerHTML = `
    <div style="width: 900px; ">
    <div class="mx-auto main" >
        <div class="card">
            <div class="card-header d-flex justify-content-between">
               <p class="num lg"></p>
               <h5 id="count"></h5>
            </div>
            <div class="card-body">
                <p id="question"></p>
                <form id="options" action=""></form>
            </div>

        </div>
        <div class="d-flex justify-content-between mt-3 btn">
            <div>
                <button class="btn btn-primary prev">Previous</button>
            </div>
            <div>
                <button class="d-none btn btn-success" id="submit">Submit</button>
            </div>

            <div>
                <button class="btn btn-primary next">Next</button>
            </div>
        </div>
    </div>

</div>
    `
    document.getElementById('submit').addEventListener('click', total)
    document.querySelector('.btn').addEventListener('click', navigateQuestion)
    

    displayQuestion()
}


const displayQuestion = () => {
    interval()
   
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
        ele.addEventListener('change', checkAndStoreAns)
        if (ele.value === arrayOfQuestions[i].chosen_answer) {
            ele.checked = true
        }
    })
    i === 0 ? document.querySelector('.prev').disabled = true : document.querySelector('.prev').disabled = false

   
}
let start = document.getElementById('start')
let spin = document.querySelector('.spin')
start.addEventListener('click', () => {
    start.classList.add('d-none')
    spin.classList.remove('d-none')
    setTimer(template)
})
const navigateQuestion = (e) => {
    if (e.target.innerHTML === 'Next') {
        i++
        displayQuestion()
        if (arrayOfQuestions.length - 1 === i) {
            document.querySelector('.next').disabled = true
            document.getElementById('submit').classList.remove('d-none')
        }

    } else if (e.target.innerHTML === 'Previous') {
        if (i === 0) {
            return
        } else { 
            document.getElementById('submit').classList.add('d-none')
        }
        i--
        displayQuestion()
    }
}
const total = () => {
    console.log('Hey');
    arrayOfQuestions.forEach(e => {
        if (e.chosen_answer == e.answer) {
            score += 100 / arrayOfQuestions.length
        }
    })
    document.querySelector('.con').innerHTML = ` <div class="card d-flex justify-content-center align-items-center" style="width: 35rem;">
   
    <div class="card-body">
    Your score is ${score}%
    </div>

     </div>`
    score = 0
}

