import { useDataTask } from '../hook/useData';

export const Style = (status) => {
    const styles = {
        border: 'none',
        textDecoration: 'none',

    };

    if (status === 'Отложено') {
        styles.border = '2px solid #ff9100'
    }
    if (status === 'Выполнено') {
        styles.textDecoration = 'line-through'
    }

    if (status === 'В работе') {
        styles.border = '2px solid #76ff03'
    }

    if (status === 'Нужно сделать') {
        styles.border = '2px solid #ff1744'
    }
    return styles;
};

export const TaskEnd = (status) => {
    let a = '';
    const style = {
        textDecoration: 'none',
    }
    if (status === 'Выполнено') {
        a = `Дата завершения: ${useDataTask()}`
    }
    return a
};