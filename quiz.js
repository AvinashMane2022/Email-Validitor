const quizDB = [
    {
        question: "Q1. Number of primitive data types in Java are?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans3"
    },
    {
        question: "Q2. Automatic type conversion is possible in which of the possible cases?",
        a: "Byte to Int",
        b: "Int to Long",
        c: "Long to Int",
        d: "Int to Short",
        ans: "ans2"
    },
    {
        question: "Q3. Select the valid statement.",
        a: "Char[] ch= new char(5);",
        b: "Char[] ch= new char[5];",
        c: "Char[] ch= new char();",
        d: "Char[] ch= new char[];",
        ans: "ans2"
    },
    {
        question: "Q4. When an array is passed to a method, what does the method receive?",
        a: "The Reference of Array",
        b: "A Copy of The Array",
        c: "Length of The Array",
        d: "Copy of First Element",
        ans: "ans1"
    },
    {
        question: "Q5. Arrays in java are- ",
        a: "Object Reference",
        b: "Objects",
        c: "Primitive Data types",
        d: "Nope",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        
    });
     return answer;
};

const deselectAll = () =>
{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() =>
{
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;
    deselectAll();
    
    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        if(score == 5 || score == 4)
        {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👍</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
     else
    {
        showScore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length} 👎</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
    `;
    showScore.classList.remove('scoreArea');
    }
}
});