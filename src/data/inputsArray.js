export const inputsArray = [
  {
    name: "1. Nazwa firmy",
    type: "text",
    id: "company",
    min_length: "3",
    max_length: "50"
  },
  {
    name: "2. Numer NIP",
    type: "text",
    id: "NIP",
    min_length: "10",
    max_length: "10"
  },
  {
    name: "3. Numer REGON",
    type: "text",
    id: "REGON",
    min_length: "9",
    max_length: "14"
  },
  {
    name: "4. Ulica, numer lokalu",
    type: "text",
    id: "address",
    min_length: "3",
    max_length: "50"
  },
  {
    name: "5. Kod pocztowy",
    type: "text",
    id: "postal",
    min_length: "5",
    max_length: "5",
    pattern: "^\d{2}-\d{3}$"
  },
  {
    name: "6. Miasto",
    type: "text",
    id: "city",
    min_length: "3",
    max_length: "40"
  },
  {
    name: "7. Data rozpoczęcia działalności",
    type: "date",
    id: "start_date",
    min_length: "",
    max_length: ""
  },
  {
    name: "8. Częstotliwość rozliczania podatku PIT",
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "PIT_freq"
  },
  {
    name: "9. Częstotliwość rozliczania podatku VAT",
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "VAT_freq"
  },
  {
    name: "10. Czy przysługuje Ci preferencyjna stawka ZUS?",
    type: "radio",
    answers: ["mały zus", "pół roku bez zusu"],
    id: "ZUS"
  }
];
