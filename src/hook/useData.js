export const useData = () => {
    const today = new Date();
    const dayIndex = today.getDay();
    const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
    const monthIndex = today.getMonth()
    return { monthIndex, adjustedIndex }
};

export const useDataCookie = () => {
    const now = new Date()
    const endOfDay = new Date(now)
    endOfDay.setHours(23, 59, 59, 999)
    return Math.floor((endOfDay - now) / 1000)
}

export const useDataTask = () => {
    
    return new Date().toLocaleDateString("ru-RU", {
        day: "2-digit", 
        month: "2-digit", 
        year: "numeric" 
    }).replace(/\//g, '.'); 


}
