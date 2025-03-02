import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Имя обязательно"),

  email: Yup.string()
    .email("Некорректный email")
    .required("Email обязателен"),

  login: Yup.string()
    .required("Логин обязателен"),

  password: Yup.string()
    .required("Пароль обязателен")
    .matches(/^[0-9]+$/, 'Пароль должен содержать только цифры'),

  dateOfBirth: Yup.string()
    .required('Дата рождения обязательна')
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Неверный формат даты (дд.мм.гггг)'),

  gender: Yup.string()
    .required("Полe обязателенo"),
});







