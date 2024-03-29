import { Fragment, useRef, useState } from "react";
import Stars from "./Stars";
import { validateRequirement } from "@/utils";
import useLocalStorage from "@/utils/useLocalStorage";
import styles from "./Questionaire.module.scss";
import {answers} from "./constants.js";

function findMatchingScore(range,score){
  const [, text_score] = range
  ? Object.entries(range).find(([_range, text]) =>
      validateRequirement(score, _range)
    )
  : [];
  return text_score;
}

function Questionaire({ questionaire }) {
  const { questions, categories, total_range } = questionaire;
  const [summary, setSummary] = useState(null);
  const [warning, setWarning] = useState(null);
  const formRef = useRef(null);
  const summaryRef = useRef(null);
  const [mailLink, setMailLink] = useState(null);
  const [email] = useLocalStorage("moreno_email", "");

  function displayScore() {
    setSummary(null);
    setWarning(null);
    const { total, categories, questions, error } = calculateScore();
    if(error){
      
      setWarning(<div>Vraag {error} is niet ingevuld</div>)
    }else{
      console.log("categories",categories)
      emailScore({ total, categories, questions });
      setSummary(
        <div className="grid grid-cols-2">
        {categories.map((cat, index) => (
          <Fragment key={index}>
            <div>{cat?.category}:</div>
            <div style={{color: cat?.color || "black", fontWeight:"bold"}}>{cat?.score} - {cat?.text_score}</div>
          </Fragment>
        ))}
        <div className="font-medium">Totaal:</div>
        <div className="font-medium" style={{color: total?.color || "black", fontWeight:"bold"}}>
          {total.score} - {total?.text_score}
        </div>
      </div>
    );
  }
    setTimeout(() => {
      summaryRef.current.scrollIntoView();
    }, 50);
  }
  function today(){
    const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) {dd = '0' + dd;}
if (mm < 10) {mm = '0' + mm;}

return `${dd}-${mm}-${yyyy}`;
  }
  function emailScore(data) {
    const { total, categories, questions } = data;
    const target_email = email;
    var subject = `${questionaire.name} - `;
    var body = "";
    body += `${questionaire.name}, Ingevuld op ${today()}, `;
    body += `Totaal: ${total?.text_score} (${total.score}), `;
    for (const question of categories) {
      body += `${question.category}: ${question?.text_score} (${question.score}), `;
    }
    body += `\n`;
    body += `Vragen \n`;
    let i = 1;
    for (const question of questions) {
      body += `${i}. ${question.question}: ${answers[question.score]} (${question.score}) \n`;
      i = i + 1;
    }
    var uri = `mailto:${target_email}?subject=`;
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += encodeURIComponent(body);
    setMailLink(uri);
  }
  function calculateScore() {
    const form = formRef.current;
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    let total_score = 0;
    const _categories = {};
    const questions_with_score = [];
    for (const cat of Object.keys(categories)) {
      _categories[cat] = 0;
    }
    for (const [key, value] of Object.entries(formDataObj)) {
      const index = key.split("_")[1];
      const question = questions[index];
      const question_cat = question?.category;
      const score = parseInt(value);
      total_score += score;
      if(value==-1){
        return {error: parseInt(index)+1}
      }
      if (!_categories[question_cat]) {
        _categories[question_cat] = 0;
      }
      _categories[question_cat] += score;
      questions_with_score.push({ question: question?.question, score: score });
    }
    const _readable_categories = Object.entries(_categories)
      .map(([key, score]) => {
        const cat = categories[key];
        if (!cat) {
          return;
        }
        const {text, color} = findMatchingScore(cat?.ranges,score);

        return { category: cat?.name, score: score ,text_score:text, color};
      })
      .filter((n) => n);
    const {text, color} = findMatchingScore(total_range,total_score);
    const total = { score: total_score, text_score:text, color };
    return {
      total,
      categories: _readable_categories,
      questions: questions_with_score,
    };
  }
  return (
    <div className="flex flex-col gap-4">
      <form ref={formRef}>
        <div
          className={styles.grid + " grid rounded"}
          style={{ gridTemplateColumns: "minmax(50%,auto) minmax(50%,1fr)" }}
        >
          <div className="sticky top-0 z-10 p-4 text-sm font-medium text-white rounded-l bg-slate-500 md:text-md">
            Vraag
          </div>
          <div className="sticky top-0 z-10 flex flex-row items-center text-xs font-medium text-white rounded-r bg-slate-500 md:text-md">
            {answers.map((answer, index) => (
              <div key={index} className="flex-1 text-center ">
                {answer}
              </div>
            ))}
          </div>
          {questions.map((question, index) => {
            return (
              <Fragment key={index}>
                <div className="p-4">{index+1}: {question?.question}</div>
                <Stars
                  index={index}
                  category={question?.category}
                  type={"atl"}
                />
              </Fragment>
            );
          })}
        </div>
      </form>
      <hr />
      <div className="flex flex-row gap-3 px-4 mt-8">
        <button
          className="px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700"
          onClick={(e) => {
            e.preventDefault();
            displayScore();
          }}
        >
          Scores berekenen
        </button>
        {mailLink && (
          <a
            href={mailLink}
            target="_blank"
            className="px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700"
          >
            Email
          </a>
        )}
      </div>
      {warning && 
      <div class="p-4 mb-4 mx-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
      <span class="font-medium">Let op!</span> {warning}
    </div>
      }
      <div ref={summaryRef}>
        {summary && (
          <div className="block p-4 mx-4 bg-white border border-gray-200 rounded-lg">
            {summary}
          </div>
        )}
      </div>
    </div>
  );
}

export default Questionaire;
