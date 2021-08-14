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
var listAnswer = [];

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    questionEl.innerText = myQuestions[currentQuiz].question
    a_text.innerText = "a. " + myQuestions[currentQuiz].answers.a 
    b_text.innerText = "b. " + myQuestions[currentQuiz].answers.b
    c_text.innerText = "c. " + myQuestions[currentQuiz].answers.c
    d_text.innerText = "d. " + myQuestions[currentQuiz].answers.d

    if(currentQuiz == 0){
        prevBtn.style.display = "none";
        submitBtn.style.display = "none";
    } else if (currentQuiz == myQuestions.length-1){
        prevBtn.style.display = "block";
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
        submitBtn.style.backgroundColor = "red"
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer
}



nextBtn.addEventListener('click', () => {
    const answer = getSelected()

    listAnswer[currentQuiz] = answer;

    currentQuiz++


    loadQuiz()
})

prevBtn.addEventListener('click', () => {
    
    currentQuiz--

    loadQuiz()

    const answer = getSelected()

    listAnswer[currentQuiz] = answer;   
    
})

submitBtn.addEventListener('click', () => {

    prevBtn.style.display = "none";
    reloadBtn.style.display = "block";


    const answer = getSelected()
    listAnswer[currentQuiz] = answer;  

    let score = 0;

    for (let i = 0; i < listAnswer.length; i++){
        if(listAnswer[i] === myQuestions[i].correctAnswer){
            score++;
        }
    }

    quiz_score.innerHTML = `
                <h3>You answered ${score} of ${myQuestions.length} questions correctly</h3>
                `
})

reloadBtn.addEventListener('click', () => {
    location.reload();
})

