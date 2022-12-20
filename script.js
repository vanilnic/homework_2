const student = "Богданова Виктория Алексеевна"; // Делали с Ершовой

document.getElementById("student").innerHTML = student;



const consolePrise = prompt("Введите цену приставки", 23500);
const transport = +prompt("Введите стоимость проезда", 120);
const dinner_m = +prompt("Введите сумму, которую даёт мама на обеды", 250);
const transport_m = +prompt("Введите сумму, которую мама даёт на проезд", 150);
let transport_final = transport_m - transport

if (transport > transport_m) {
    alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда');
    breakpoints
}
const sem1_Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const sem1_Exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]);
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const sem2_Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const sem2_Exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [sem1_Week, sem1_Exam, holidays, sem2_Week, sem2_Exam];

let weekNumber = 0;
let dayNumber = 0;
let moneybox = 0;


for (let i = 0; i < array.length; i++) {
    let typeOfWeek = array[i];

    for (let j = 0; j < typeOfWeek.length; j++) {
        weekNumber = weekNumber + 1;
        console.log(`Неделя номер ${weekNumber}`);
        let week = typeOfWeek[j]
        // console.log(week);

        for (let k = 0; k < week.length; k++) {
            dayNumber = dayNumber + 1;
            console.log(`День номер ${dayNumber}`);
            let sumLesson = week[k];
            console.log(sumLesson);
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
                alert(`Ура! Скопили!!! На ${dayNumber} день, 2000сумму ${moneybox}`);
                breakpoints
            }
        }
    }
}
if ((moneybox < consolePrise) && (moneybox != consolePrise)) {
    alert(`На приставку накопить не удалось, но за всё время накоплено ${moneybox} руб`)
}


//let result_o = ((4*16*dinner_m + 2*dinner_m) + (2*23*dinner_m + 3*dinner_m));
//let result_p = ((6*16+2)*(transport_m - transport)+((5*23+3)*(transport_m - transport)));


//let result = (result_o + result_p) 

//console.log(result);

//if (result >= consol){
 //   alert("true");
//} else {
    //alert("false");
//}


//let b=0
//for (a=0; a<13; a++) {
    //if (semester1[0][a]<=3 && semester1[0][a]>0){
    //    b++
  // }
//}
//alert(b);


//let b = 0                                           //кол-во дней с кол-вом пар < 3
//for (a=0; a<13; a++) {
    //if (semester1[0][a]<3 && semester1[0][a]>0){
    //    b++
   //}
//}
//alert(b*16);

//let c = 0
//for (d=0; d<13; d++) {
    //if (semester1[1][d]<3 && semester1[1][d]>0){
   //     c++
   //}
//}
//alert(c*23);