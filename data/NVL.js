const nvl_categories = {
  dyspneu: {
    name: "Dyspneu",
    ranges: {
      "< 5":{text:"Goed",color:"green"},
      "< 6":{text:"Gelijk",color:"orange"},
      ">= 6":{text:"Verhoogd",color:"red"},
    }
  },
  perifere: {
    name: "Perifeer",
    ranges: {
      "< 5":{text:"Goed",color:"green"},
      "< 6":{text:"Gelijk",color:"orange"},
      ">= 6":{text:"Verhoogd",color:"red"},
    }
  },
  central: {
    name: "Centraal",
    ranges: {
      "< 4":{text:"Goed",color:"green"},
      "< 5":{text:"Gelijk",color:"orange"},
      ">= 5":{text:"Verhoogd",color:"red"},
    }
  },
  tension: {
    name: "Angst / Spanning",
    ranges: {
      "< 5":{text:"Goed",color:"green"},
      "< 6":{text:"Gelijk",color:"orange"},
      ">= 6":{text:"Verhoogd",color:"red"},
    }
  },
};
const nvl_total_range={
  "< 13":{text:"Goed",color:"green"},
  "< 20":{text:"Hoognormaal",color:"#c7cd72"},
  "< 30":{text:"Licht verhoogd",color:"#f7b96a"},
  ">= 30":{text:"Sterk verhoogd",color:"red"},
}
const nvl_questions = [
  { question: "Pijnlijke steken in de borst", category: "tension" },
  { question: "Gespannenheid", category: "tension" },
  { question: "Een waas voor de ogen", category: "central" },
  { question: "Duizeligheid", category: "central" },
  { question: "In de war zijn, of het gevoel hebben het normale contact met de omgeving te verliezen", category: "central" },
  { question: "Een snellere of diepere ademhaling", category: "dyspneu" },
  { question: "Ademnood", category: "dyspneu" },
  { question: "Benauwd gevoel in of rond de borst", category: "dyspneu" },
  { question: "Opgeblazen gevoel in de buik", category: "unknown" },
  { question: "Tintelingen in vingers", category: "perifere" },
  { question: "Niet voldoende diep kunnen doorademen", category: "dyspneu" },
  { question: "Stijfheid van vingers of armen", category: "perifere" },
  { question: "Stijfheid rond de mond", category: "perifere" },
  { question: "Koude handen of voeten", category: "perifere" },
  { question: "Bonzen van het hart", category: "tension" },
  { question: "Angstig gevoel", category: "tension" },
];
export const NVL = {
  name: "NVL",
  questions: nvl_questions,
  categories: nvl_categories,
  total_range:nvl_total_range
};







