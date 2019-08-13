export const inputsArray = [
  {
    name: "1. Nazwa firmy",
    type: "text",
    id: "company",
    min_length: "3",
    max_length: "50",
    error: "Podaj nazwę firmy (min. 3 znaki)"
  },
  {
    name: "2. Numer NIP",
    type: "text",
    id: "NIP",
    min_length: "10",
    max_length: "10",
    error: "Podaj prawidłowy numer NIP"
  },
  {
    name: "3. Numer REGON",
    type: "text",
    id: "REGON",
    min_length: "9",
    max_length: "14",
    error: "Podaj prawidłowy numer REGON"
  },
  {
    name: "4. Ulica, numer lokalu",
    type: "text",
    id: "address",
    min_length: "3",
    max_length: "50",
    error: "Podaj adres siedziby firmy"
  },
  {
    name: "5. Kod pocztowy (bez myślnika)",
    type: "text",
    id: "postal",
    min_length: "5",
    max_length: "5",
    pattern: "^\d{2}-\d{3}$",
    error: "Podaj prawidłowy 5-cyfrowy kod pocztowy"
  },
  {
    name: "6. Miasto",
    type: "text",
    id: "city",
    min_length: "3",
    max_length: "40",
    error: "Podaj miasto siedziby firmy"
  },
  {
    name: "7. Data rozpoczęcia działalności",
    type: "date",
    id: "start_date",
    min_length: "",
    max_length: "",
    error: "Podaj datę rozpoczęcia działalności gospodarczej"
  },
  {
    name: "8. Częstotliwość rozliczania podatku PIT",
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "PIT_freq",
    error: "Zaznacz jedną z opcji"
  },
  {
    name: "9. Częstotliwość rozliczania podatku VAT",
    type: "radio",
    answers: ["miesięcznie", "kwartalnie"],
    id: "VAT_freq",
    error: "Zaznacz jedną z opcji"
  },
  {
    name: "10. Czy przysługuje Ci preferencyjna stawka ZUS?",
    type: "radio",
    answers: ["mały zus", "pół roku bez zusu"],
    id: "ZUS",
    error: "Zaznacz jedną z opcji"
  }
];
