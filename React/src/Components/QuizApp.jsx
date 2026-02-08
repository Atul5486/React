import Questions from "../QuizApp/Questions";
import Timer from "../QuizApp/Timer";
import Result from "../QuizApp/Result";
import { useState } from "react";

const QuizApp = () => {
  const [over, setOver] = useState(false);
  const [score,setScore]=useState(0);
  return (
    <div>
      {over ?
      <Result score={score} setScore={setScore} setOver={setOver}/>:
      <> 
      <Timer setOver={setOver}/>
      <Questions setOver={setOver} setScore={setScore} score={score}/>
      </>
      }
    </div>
  );
};

export default QuizApp; 