import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      questionText: "Ko je predsednik Srbije?",
      answerOptions: [
        { answerText: "Nikola Kojo", isCorrect: false },
        { answerText: "Manmohan Singh", isCorrect: false },
        { answerText: "Aleksandar Vučić", isCorrect: true },
        { answerText: "Deep Patel", isCorrect: false },
      ],
    },
    {
      questionText: "U kojem manastiru se nalazi freska Beli Anđeo?",
      answerOptions: [
        { answerText: "Gračanica", isCorrect: false },
        { answerText: "Mileševa", isCorrect: true },
        { answerText: "Tumane", isCorrect: false },
        { answerText: "Studenica", isCorrect: false },
      ],
    },
    {
      questionText: "Koja voćka je spasila Srbiju od bankrota 1864. godine?",
      answerOptions: [
        { answerText: "Jabuka", isCorrect: false },
        { answerText: "Šljiva", isCorrect: true },
        { answerText: "Breskva", isCorrect: false },
        { answerText: "Dunja", isCorrect: false },
      ],
    },
    {
      questionText:
        "Jedne od najpoznatijih ex-yu filmova „Maratonci trče počasni krug“ i „Ko to tamo peva“ režirao je slavni srpski režiser:",
      answerOptions: [
        { answerText: "Petar Ljubojević", isCorrect: false },
        { answerText: "Dusko Kovačević", isCorrect: false },
        { answerText: "Zdravko Šotra", isCorrect: false },
        { answerText: "Slobodan Šijan", isCorrect: true },
      ],
    },
    {
      questionText:
        "Koje godine je Srbija pobedila na Evroviziji pesmom „Molitva“ koju izvodi Marija Šerifović?",
      answerOptions: [
        { answerText: "2006", isCorrect: false },
        { answerText: "2002", isCorrect: false },
        { answerText: "2010", isCorrect: false },
        { answerText: "2007", isCorrect: true },
      ],
    },
    {
      questionText: "Ko je komponovao himnu „Bože pravde“",
      answerOptions: [
        { answerText: "Davorin Jenko", isCorrect: true },
        { answerText: "Stanislav Binički", isCorrect: false },
        { answerText: "Isidor Bajić", isCorrect: false },
        { answerText: "S. S. Mokranjac", isCorrect: false },
      ],
    },
    {
      questionText: "Ko se nalazi na novčanici od 500 dinara?",
      answerOptions: [
        { answerText: "Milutin Milankovic", isCorrect: false },
        { answerText: "Jovan Cvijić", isCorrect: true },
        { answerText: "Stevan Stojanović Mokranjac", isCorrect: false },
        { answerText: "Slobodan Jovanović", isCorrect: false },
      ],
    },
    {
      questionText:
        "Šta Pobednik na Kalemegdanu drži u svojoj levoj ruci, ako znamo da u desnoj drži mač?",
      answerOptions: [
        { answerText: "Štit", isCorrect: false },
        { answerText: "Sokola", isCorrect: true },
        { answerText: "Vagu", isCorrect: false },
        { answerText: "Baklju", isCorrect: false },
      ],
    },
    {
      questionText: "Kog datuma se slavi sveti Sava?",
      answerOptions: [
        { answerText: "2. avgusta", isCorrect: false },
        { answerText: "27. Januara", isCorrect: true },
        { answerText: "19. Septembra", isCorrect: false },
        { answerText: "1. maja", isCorrect: false },
      ],
    },
    {
      questionText: "Koje godine je bio Kosovski boj?",
      answerOptions: [
        { answerText: "1387", isCorrect: false },
        { answerText: "1339", isCorrect: false },
        { answerText: "1389", isCorrect: true },
        { answerText: "1363", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div
      id="quiz"
      className="h-full flex flex-col items-center xs:mb-[150px] ss:mb-[150px] sm:mb-[120px] md:mb-[120px] lg:mb-[100px] xlg:mb-[150px] text-white"
    >
      <h2 className="text-7xl text-center xs:text-[2rem] ss:text-[2rem] sm:text-[3rem] font-[900] text-red-500 py-10 sm:py-4 xs:py-4 mx-20 xs:mx-0">
        How Much{" "}
        <span className="text-blue-500 flex item-center justify-center">
          Do You Know About{" "}
        </span>
        <span className="text-white flex item-center justify-center">
          {" "}
          Serbia ?
        </span>
      </h2>
      <div className="bg-[#eff7ff] qq w-[40%] xs:w-[80%] ss:w-[75%] sm:w-[70%] min-h-[200px] rounded-[15px] p-[20px] mb-2 mt-10 shadow-md flex justify-evenly mx-auto">
        {showScore ? (
          <div className="flex text-[24px] items-center">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div className="w-[80%] text-center">
            <div className="w-full relative">
              <div className="mb-[20px]">
                <span className="text-[28px]">
                  Question {currentQuestion + 1}
                </span>
                /{questions.length}
              </div>
              <div className="mb-[20px]">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="w-full flex flex-col justify-between space-y-4">
              {questions[currentQuestion].answerOptions.map(
                (answerOptions, id) => (
                  <button
                    key={id}
                    className="w-full text-[16px] color-white white hover:bg-[#0c4076] rounded-[15px] flex p-[8px] justify-start items-center bg-white/30 cursor-pointer"
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
