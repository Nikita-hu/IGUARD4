import * as Yup from 'yup';

export const validationAuthed = Yup.object().shape({
    login: Yup.string()
        .required("Неверно ввели данные"),

    password: Yup.string()
        .required("Неверно ввели данные"),


});

export const validationTask = Yup.object().shape({

    addFollowTask: Yup.string()
        .required("Введите задачу")
        .max(49, "Ввод должен быть не болле")
});







