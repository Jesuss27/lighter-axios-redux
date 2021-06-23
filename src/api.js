// Base URL
const base_url="https://api.rawg.io/api/"

//Get the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month
    }  ; 
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day
    }  ; 
}

// get current day, month, and year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate= `${currentYear}-${currentMonth}-${currentDay}`
// Last Year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}` ;
//Next Year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}` ;

console.log(lastYear);





//popular games
const popular_games= `games?key=03c4f9caf21844ca9365563067028e1a&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//upcoming games
const upcoming_games= `games?key=03c4f9caf21844ca9365563067028e1a&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//new games
const newGames = `games?key=03c4f9caf21844ca9365563067028e1a&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;



export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`