"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Questionaire)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Stars.js


function Stars({ type , category , index  }) {
    const [score, setScore] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-evenly ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                value: score,
                readOnly: true,
                name: `${[
                    type,
                    index
                ].join("_")}`,
                className: "hidden"
            }),
            [
                0,
                1,
                2,
                3,
                4
            ].map((_score)=>{
                const color = score >= _score ? "text-yellow-400" : "text-gray-300 dark:text-gray-500";
                return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    className: `w-5 h-5 flex-1 cursor-pointer ${color}`,
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    onClick: ()=>setScore(_score),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    })
                }, _score);
            })
        ]
    });
}
/* harmony default export */ const components_Stars = (Stars);

;// CONCATENATED MODULE: ./utils/index.js
function validateRequirement(number, requirementString) {
    const [operator, value] = requirementString.split(" ");
    return operator === "<=" ? number <= value : operator === ">=" ? number >= value : operator === "<" ? number < value : operator === ">" ? number > value : operator === "==" ? number == value : operator === "===" ? number === value : (()=>{
        throw new Error("Invalid operator in requirement string: " + requirementString);
    })();
}

;// CONCATENATED MODULE: ./components/Questionaire.js




const Answers = [
    "Nooit",
    "Zelden",
    "Soms",
    "Vaak",
    "Zeer vaak"
];
function Questionaire({ questionaire  }) {
    const { questions , categories , total_range  } = questionaire;
    const [summary, setSummary] = (0,external_react_.useState)(null);
    const formRef = (0,external_react_.useRef)(null);
    const [mailLink, setMailLink] = (0,external_react_.useState)(null);
    function displayScore() {
        const { total , categories , questions  } = calculateScore();
        emailScore({
            total,
            categories,
            questions
        });
        setSummary(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-2",
            children: [
                categories.map((cat, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    cat?.category,
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: cat?.score
                            })
                        ]
                    }, index)),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "font-medium",
                    children: "Totaal:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "font-medium",
                    children: [
                        total.score,
                        " - ",
                        total?.text_score
                    ]
                })
            ]
        }));
    }
    function emailScore(data) {
        const { total , categories , questions  } = data;
        const target_email = "moreno.van.rooijen@gmail.com";
        var subject = `${questionaire.name} - `;
        var body = "";
        body += `Vragen \n`;
        for (const question of questions){
            body += `${question.question}: ${question.score} \n`;
        }
        body += `\n`;
        body += `Categorieën \n`;
        for (const question of categories){
            body += `${question.category}: ${question.score} \n`;
        }
        body += `\n`;
        body += `Totaal: ${total.score} - ${total?.text_score} \n`;
        var uri = `mailto:${target_email}?subject=`;
        uri += encodeURIComponent(subject);
        uri += "&body=";
        uri += encodeURIComponent(body);
        console.log(uri);
        setMailLink(uri);
    }
    function calculateScore() {
        const form = formRef.current;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        let total_score = 0;
        const _categories = {};
        const questions_with_score = [];
        for (const [key, value] of Object.entries(formDataObj)){
            const index = key.split("_")[1];
            const question = questions[index];
            const question_cat = question?.category;
            const score = parseInt(value);
            total_score += score;
            if (!_categories[question_cat]) {
                _categories[question_cat] = 0;
            }
            _categories[question_cat] += score;
            questions_with_score.push({
                question: question?.question,
                score: score
            });
        }
        const _readable_categories = Object.entries(_categories).map(([key, score])=>{
            if (!categories[key]) {
                return;
            }
            return {
                category: categories[key]?.name,
                score: score
            };
        }).filter((n)=>n);
        const [score, text_score] = total_range ? Object.entries(total_range).find(([range, text])=>validateRequirement(total_score, range)) : [];
        console.log("score", score);
        const total = {
            score: total_score,
            text_score
        };
        return {
            total,
            categories: _readable_categories,
            questions: questions_with_score
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                ref: formRef,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-2 rounded",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p-4 text-sm font-medium bg-gray-200 rounded-l md:text-md",
                            children: "Vraag"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row items-center text-xs font-medium bg-gray-200 rounded-r md:text-md",
                            children: Answers.map((answer, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1 text-center ",
                                    children: answer
                                }, index))
                        }),
                        questions.map((question, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "p-4",
                                        children: question?.question
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Stars, {
                                        index: index,
                                        category: question?.category,
                                        type: "atl"
                                    })
                                ]
                            }, index);
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row gap-3 px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",
                        onClick: (e)=>{
                            e.preventDefault();
                            displayScore();
                        },
                        children: "Scores berekenen"
                    }),
                    mailLink && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: mailLink,
                        className: "px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",
                        children: "Email"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-4",
                children: summary
            })
        ]
    });
}
/* harmony default export */ const components_Questionaire = (Questionaire);


/***/ })

};
;