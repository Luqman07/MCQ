let score = 0
let i = 0
let getValue;
let count = 180
let submitCheck = false

const arrayOfQuestions = [
    {
        question: 'What is the current world record time for the 100m race',
        options: [9.58, 9.63, 9.68],
        answer: 9.58,
        chosen_answer: ''
    },
    {
        question: 'Is Will Smith an Oscar winning actor',
        options: ['True', 'False'],
        answer: 'False',
        chosen_answer: ''
    },
    {
        question: 'What is the capital of Uganda',
        options: ['Kampala', 'Ouagadougou', 'Khartoum'],
        answer: 'Kampala',
        chosen_answer: ''
    },
    {
        question: 'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win',
        options: [5, 12, 6],
        answer: 6,
        chosen_answer: ''
    },
    {
        question: 'Which Tennis Grand Slam is played on a clay surface',
        options: ['Wimbledon', 'Roland Garros', 'US Open'],
        answer: 'Roland Garros',
        chosen_answer: ''
    },
    {
        question: 'What is smallest planet in our solar system',
        options: ['Earth', 'Pluto', 'Mercury'],
        answer: 'Mercury',
        chosen_answer: ''
    },
    {
        question: 'In what year did Tony Blair become British Prime Minister',
        options: [1997, 1994, 1995],
        answer: 1997,
        chosen_answer: ''
    },
    {
        question: 'What is the capital of New Zealand',
        options: ['Suva', 'Canberra', 'Wellington'],
        answer: 'Wellington',
        chosen_answer: ''
    },
    {
        question: 'What are the five colours of the Olympic rings',
        options: ['Green, Blue, Yellow, Gold and Red', 'Orange, Maroon, Green, Red and Blue', 'Blue, Yellow, Green, Black and Red'],
        answer: 'Blue, Yellow, Green, Black and Red',
        chosen_answer: ''
    },
    {
        question: 'Which Athlete has won the most Olympic medals',
        options: ['Michael Phelps', 'Carl Lewis', 'Usain Bolt'],
        answer: 'Michael Phelps',
        chosen_answer: ''
    },
    {
        question: 'Which actor played Neo in The Matrix',
        options: ['Keanu Reeves', 'Robert Pattison', 'Paul Rudd'],
        answer: 'Keanu Reeves',
        chosen_answer: ''
    },
    {
        question: 'Which colour pill does Neo Swallow in The Matrix',
        options: ['Red', 'Green', 'Blue'],
        answer: 'Red',
        chosen_answer: ''
    },
    {
        question: 'Which of the following presidents was assasinated',
        options: ['John F. Kennedy', 'Jimmy Carter', 'Franklin D. Roosevelt'],
        answer: 'John F. Kennedy',
        chosen_answer: ''
    },
    {
        question: 'World War 1 took place between',
        options: ['1939-1945', '1912-1916', '1914-1918'],
        answer: '1914-1918',
        chosen_answer: ''
    },
    {
        question: 'What year did Nigeria win Olympic gold medal in football',
        options: [1992, 1996, 2004],
        answer: 1996,
        chosen_answer: ''
    },
    {
        question: 'Who was the second man to set foot on the moon',
        options: ['Neil Armstrong', 'Buzz Aldrin', 'Scott Carpenter'],
        answer: 'Buzz Aldrin',
        chosen_answer: ''
    },
    {
        question: 'General Yakubu Gowon was the youngest Head of State in Nigeria, what was his age?',
        options: [37, 32, 34],
        answer: 32,
        chosen_answer: ''
    },
    {
        question: 'Which of the following states make up the North central geopolitical zone',
        options: ['Nasarawa, Bornu, Adamawa, Taraba, Niger, Kwara', 'Benue, Kogi, Kwara, Niger, Nasarawa, Plateau, FCT', 'Sokoto, Kaduna, FCT, Gombe, Jigawa, Kebbi'],
        answer: 'Benue, Kogi, Kwara, Niger, Nasarawa, Plateau, FCT',
        chosen_answer: ''
    },
    {
        question: 'What is the capital of Belgium',
        options: ['Brussels', 'Bujumbura', 'Kingston'],
        answer: 'Brussels',
        chosen_answer: ''
    },
    {
        question: 'In 1966, the Nigerian coup d\'etat was led by',
        options: ['Chukuma Kaduna Nzeogwu and Emmanuel Ifeajuna', 'Timothy Onwuatuegwu and Chris Anuforo', 'Adewale Ademoyega'],
        answer: 'Chukuma Kaduna Nzeogwu and Emmanuel Ifeajuna',
        chosen_answer: ''
    }
]
const startQuiz = () => {
    document.querySelector('.con').innerHTML = `
      <div class="text-center">
        <h1>20 Questions</h1> 
        <h3>Time: 180s</h3> 
        <div class="mt-3"><button class="btn btn-dark" id="start">Start </button></div>
        <div class="spinner-border text-secondary spin d-none"></div>
      </div>
    `
}
startQuiz()
const setTimer = (fun) => {
    setTimeout(fun, 2000);
}


const interval = () => {
    let countDom = document.getElementById('count')
    let countDown = setInterval(() => {
        console.log('hey');
        if (submitCheck) {
            clearInterval(countDown);
        }
        else if (count === 0) {
            console.log('count=0');
            clearInterval(countDown)
            document.querySelector('.con').innerHTML = `<div class="spinner-border text-secondary"></div>`
            setTimer(total)
        } else {
            countDom.innerHTML = count
            count--
        }
    }, 1000);

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


const template = () => {
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

    document.getElementById('submit').addEventListener('click', () => {
        submitCheck = true
        document.querySelector('.con').innerHTML = `<div class="spinner-border text-secondary"></div>`
        setTimer(total)


    })
    document.querySelector('.btn').addEventListener('click', navigateQuestion)
    displayQuestion()
    interval()

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
            document.querySelector('.next').disabled = false
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

