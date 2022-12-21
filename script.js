const student = "Богданова Виктория Алексеевна"; // Делали с Ершовой

document.getElementById("student").innerHTML = student;

const consolePrise = +prompt("Введите цену приставки", 23500);
const transport = +prompt("Введите стоимость проезда", 120);
const dinner_m = +prompt("Введите сумму, которую даёт мама на обеды", 250);
const transport_m = +prompt("Введите сумму, которую мама даёт на проезд", 150);
let transport_final = transport_m - transport

const sem1_Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const sem1_Exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]);
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const sem2_Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const sem2_Exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [sem1_Week, sem1_Exam, holidays, sem2_Week, sem2_Exam];

let weekNumber = 0;
let dayNumber = 0;
let moneybox = 0;
if (transport > transport_m) {
    alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда');
    
} else {
    for (let i = 0; i < array.length; i++) {
    let typeOfWeek = array[i];

    for (let j = 0; j < typeOfWeek.length; j++) {
        weekNumber = weekNumber + 1;
        console.log(`Неделя номер ${weekNumber}`);
        let week = typeOfWeek[j]

        for (let k = 0; k < week.length; k++) {
            dayNumber = dayNumber + 1;
            console.log(`День номер ${dayNumber}`);
            let sumLesson = week[k];
            console.log(sumLesson);
            if (moneybox >= consolePrise) {
                break
            }
            if ((sumLesson > 0) && (sumLesson <= 3)) {
                console.log(`Денюжку откладываем, ибо пар в день: ${sumLesson}`);

                moneybox = moneybox + dinner_m + transport_final;

                console.log(`Отложили: ${dinner_m} руб., в копилке: ${moneybox} руб.`);

            } else if (sumLesson > 3) {
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${sumLesson}`);

                moneybox = moneybox + transport_final;
            } else {
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${sumLesson}`);
            }
            
            if (moneybox >= consolePrise) {
                alert(`Ура! Скопили!!! На ${dayNumber} день, сумму ${moneybox}`);
           }
        }  
    }
}
if ((moneybox < consolePrise) && (moneybox != consolePrise)) {
    alert(`На приставку накопить не удалось, но за всё время накоплено ${moneybox} руб`)
}
}