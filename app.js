// Define quiz data

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Text Transfer Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 0, // Note: margin controls space *between* elements. Padding controls space *inside* elements.
  },
  {
    question: "Which company developed the JavaScript programming language?",
    options: [
      "Microsoft",
      "Google",
      "Netscape",
      "Apple",
    ],
    correct: 2, // Netscape Communications (specifically Brendan Eich)
  },
  {
    question: "In JavaScript, what keyword is used to declare a variable that cannot be reassigned?",
    options: [
      "var",
      "let",
      "const",
      "static",
    ],
    correct: 2, // const
  },
];


// initializing js

const quiz=document.querySelector(".quiz")
const answerElm=document.querySelectorAll(".answer");
const [questionELm,option_1,option_2,option_3,option_4]=document.querySelectorAll(".question,.option_1,.option_2,.option_3,.option_4")
const submitbtn=document.querySelector("#submit")

let curentquiz=0;
let score=0;

// quize loading

const quizload=()=>{
    const {question,options}=quizData[curentquiz];
    questionELm.innerText=`${curentquiz+1}:${question}`;
    options.forEach((curoption,index)=>(window[`option_${index+1}`].innerText=curoption));
}

quizload();

const getdata=()=>{
    let ans_idx=null;
    answerElm.forEach((curoption,index)=>{
        if(curoption.checked){
            ans_idx=index;
        }
    });
    return ans_idx;
}


const deselectans=()=>{
    return answerElm.forEach((currelm)=>(currelm.checked=false));
};

// Button functions


submitbtn.addEventListener("click",()=>{
    const seletedata=getdata();

    if (seletedata === null) {
        alert("Please select an answer!");
        return;
    };


    if(seletedata===quizData[curentquiz].correct){ 
        score++;
    };

    curentquiz++;

    if(curentquiz < quizData.length){
        deselectans();
        quizload();
    }else{
        quiz.innerHTML=`<h3>Your Score is ${score}</h3><br><br>
        <div class="btn">`
    };
});
