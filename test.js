let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // БЛОК КАЛЕНДАРЯ

    // ОЧИСТКА КЛІТИНОК ПІСЛЯ ПЕРЕХОДУ НА НАСТУПНИЙ МІСЯЦЬ
    tbl.innerHTML = "";

    // ДАНІ МІСЯЦЯ ЧЕРЕЗ DOM МОДЕЛЬ
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // СТВОРЕННЯ ВСІХ КЛІТИНОК.
    let date = 1;
    
    for (let i = 0; i < 6; i++) {
        // СТВОРЮЄ СТРОКУ ТАБЛИЦІ.
        let row = document.createElement("tr");
        
        //СТВОРЕННЯ КЛІТИНОК ДЛЯ ДАННИХ МІСЯЦЯ.
        for (let j = 1; j < 8; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
                
            }
            else if (date > daysInMonth) {
                break;
                
            }
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("color-today-date");
                } // КОЛІР СЬОГОДНІШНЬОГО ДНЯ.
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
                
            }
        }
        
        tbl.appendChild(row); // ДОДАВАННЯ КОЖНОЇ СТРОКИ В БЛОК КАЛЕНДАРЯ.
    }
}