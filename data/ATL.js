const atl_categories = {
  difficulty_moving: {
    name: "Moeilijk bewegen",
  },
  exhausted: {
    name: "Vermoeid",
  },
  mental_distress: {
    name: "Mentale onrust",
  },
};
const atl_questions = [
  { question: "Vermoeid gevoel", category: "exhausted" },
  { question: " Moe wakker worden", category: "exhausted" },
  { question: "Onrustig slapen", category: "exhausted" },
  { question: "Geen zin om iets te ondernemen", category: "unknown" },
  {
    question: "Veel tijd nodig om bij te komen na lichaamsbeweging",
    category: "difficulty_moving",
  },
  { question: "Een inspanning te kort kunnen volhouden", category: "difficulty_moving" },
  { question: "De aandacht slecht bij een ding houden", category: "mental_distress" },
  { question: "Gauw afgeleid zijn", category: "mental_distress" },
  { question: "Drukte in het hoofd", category: "unknown" },
  { question: "Onnodige fouten maken", category: "mental_distress" },
  { question: "Tekort aan rust", category: "exhausted" },
  { question: "Moeite met ontspannen", category: "exhausted" },
  { question: "Geen energie om iets te ondernemen", category: "unknown" },
  { question: "Prikkelbaar", category: "mental_distress" },
  { question: "Moeite met lopen en bewegen", category: "difficulty_moving" },
  { question: "Stijfheid van het lichaam ", category: "difficulty_moving" },
];
export const ATL = {
  questions: atl_questions,
  categories: atl_categories,
};
