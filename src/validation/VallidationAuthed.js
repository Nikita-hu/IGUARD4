import * as Yup from 'yup';

export const validationAuthed = Yup.object().shape({
    login: Yup.string()
        .required("Неверно ввели данные"),

    password: Yup.string()
        .required("Неверно ввели данные"),
});







