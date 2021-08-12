const myQuestions = [
    {
        question: 'Javascript is _________ language.',
        answers: { 
        a: 'Programming', 
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
            },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Javascript is _________ language.',
        answers: { 
        a: 'Programming', 
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
            },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    }
];



// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "JavaScript",
//         correct: "d",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Cascading Simple Sheets",
//         d: "Cars SUVs Sailboats",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
// ];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const reloadBtn = document.getElementById('reloadBtn')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const submitBtn = document.getElementById('submitBtn')
const quiz_score = document.getElementById('quiz-score')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = myQuestions[currentQuiz];


    console.log( myQuestions[currentQuiz].answers.a)


    questionEl.innerText = currentQuizData.question
    a_text.innerText = "a. " + currentQuizData.answers.a 
    b_text.innerText = "b. " + currentQuizData.answers.b
    c_text.innerText = "c. " + currentQuizData.answers.c
    d_text.innerText = "d. " + currentQuizData.answers.d

    if(currentQuiz == 0){
        prevBtn.style.display = "none";
        submitBtn.style.display = "none";
        reloadBtn.style.display = "none";
    } else if (currentQuiz == myQuestions.length-1){
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
        reloadBtn.style.display = "block";
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
        reloadBtn.style.display = "none";
    }

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            console.log(answerEl)
            answer = answerEl.id
        }
    })

    return answer
}

nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === myQuestions[currentQuiz].correctAnswer) {
            score++
        }

        currentQuiz++


        loadQuiz()
        
    }
})

prevBtn.addEventListener('click', () => {
    
    currentQuiz--

    loadQuiz()

    const answer = getSelected()

    if(answer) {
        if(answer === myQuestions[currentQuiz].correctAnswer) {
            score++
        }   
        
    }
})

submitBtn.addEventListener('click', () => {


    const answer = getSelected()

    if(answer) {
        if(answer === myQuestions[currentQuiz].correctAnswer) {
            score++
        }   
        
    }
    quiz_score.innerHTML = `
                <h2>You answered ${score}/${myQuestions.length} questions correctly</h2>
                `
})

reloadBtn.addEventListener('click', () => {
    location.reload();
})