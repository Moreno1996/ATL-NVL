import { useState } from "react";
import Stars from "./Stars";

const Answers = ["Nooit", "Zelden", "Soms", "Vaak", "Zeer vaak"];
function Questionaire({ questionaire }) {
  const questions = questionaire?.questions;
  const categories = questionaire?.categories;
  const [summary, setSummary] = useState(null);
  function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("formDataObj", formDataObj);
    let total = 0;
    const _categories = {};
    const questions_with_score = [];
    for (const [key, value] of Object.entries(formDataObj)) {
      const index = key.split("_")[1];
      const question = questions[index];
      const question_cat = question?.category;
      const score = parseInt(value);
      total += score;
      if (!_categories[question_cat]) {
        _categories[question_cat] = 0;
      }
      _categories[question_cat] += score;
      questions_with_score.push({ question: question?.question, score: score });
    }
    const _readable_categories = Object.entries(_categories)
      .map(([key, score]) => {
        if (!categories[key]) {
          return;
        }
        return { category: categories[key]?.name, score: score };
      })
      .filter((n) => n);
    console.log({ total, _readable_categories, questions_with_score });
    setSummary(
      <div className="grid grid-cols-2">
        {_readable_categories.map((cat) => (
          <>
            <div>{cat?.category}:</div>
            <div>{cat?.score}</div>
          </>
        ))}
        <div className="font-medium">Totaal:</div>
        <div  className="font-medium">{total}</div>
      </div>
    );
  }
  return (
    <div>
    <form onSubmit={submitForm}>
      <div className="grid grid-cols-2 rounded">
        <div className="bg-gray-200 p-4 rounded-l font-medium text-sm md:text-md">
          Vraag
        </div>
        <div className="flex flex-row items-center bg-gray-200 font-medium text-xs md:text-md rounded-r">
          {Answers.map((answer) => (
            <div className="flex-1 text-center	">{answer}</div>
          ))}
        </div>
        {questions.map((question, index) => {
          return (
            <>
              <div className="p-4">{question?.question}</div>
              <Stars index={index} category={question?.category} type={"atl"} />
            </>
          );
        })}

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Opslaan
        </button>
      </div>
    </form>
    {summary}</div>
  );
}

export default Questionaire;
