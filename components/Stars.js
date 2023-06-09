import { useState } from "react";

function Stars({type,category,index}) {
  const [score, setScore] = useState(-1);

  return (
    <div className="flex items-center justify-evenly ">
        <input value={score} readOnly name={`${[type,index].join("_")}`} className="hidden" required/>
      {[0, 1, 2, 3, 4].map((_score) => {
        const color =
          score >= _score
            ? "text-yellow-400"
            : "text-gray-300 dark:text-gray-500";

        return (
          <svg
          key={_score}
            aria-hidden="true"
            className={`w-12 h-12 flex-1 cursor-pointer ${color}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setScore(_score)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      })}
    </div>
  );
}

export default Stars;
