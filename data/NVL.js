const nvl_categories = {
  central: {
    name: "Centrale klachten",
    ranges: {
      "< 4":"Goed",
      "< 5":"Gelijk",
      ">= 5":"Verhoogd",
    }
  },
  perifere: {
    name: "Perifere klachten",
    ranges: {
      "< 5":"Goed",
      "< 6":"Gelijk",
      ">= 6":"Verhoogd",
    }
  },
  dyspneu: {
    name: "Dyspneu of subjectieve adembelemmering",
    ranges: {
      "< 5":"Goed",
      "< 6":"Gelijk",
      ">= 6":"Verhoogd",
    }
  },
  tension: {
    name: "Spanning",
    ranges: {
      "< 5":"Goed",
      "< 6":"Gelijk",
      ">= 6":"Verhoogd",
    }
  },
};
const nvl_total_range={
  "< 13":"Normale score",
  "< 20":"Normaal tot hoog",
  "< 29":"Licht verhoogd",
  ">= 30":"Sterk verhoogd",
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







