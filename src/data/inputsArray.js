export const inputsArray = [
  {
    name: "1. Nazwa firmy",
    type: "text",
    id: "company"
  },
  {
    name: "2. Numer NIP",
    type: "number",
    id: "NIP"
  },
  {
    name: "3. Numer REGON",
    type: "number",
    id: "REGON"
  },
  {
    name: "4. Ulica, numer lokalu",
    type: "text",
    id: "address"
  },
  {
    name: "5. Kod pocztowy",
    type: "number",
    id: "postal"
  },
  {
    name: "6. Miasto",
    type: "text",
    id: "city"
  },
  {
    name: "7. Data rozpoczęcia działalności",
    type: "date",
    id: "start_date"
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
