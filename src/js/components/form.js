import { validateForms } from "./../functions/validate-forms.js";

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

const rulesFactoryForm = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Слишком короткое имя",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
      {
        rule: "customRegexp",
        value: /^[A-zА-я]+$/i,
        errorMessage: "Имя должно содержать буквы",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
];

validateForms("#factory-form", rulesFactoryForm, afterForm);
