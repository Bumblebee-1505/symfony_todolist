let shaped = document.querySelector('.dashboard-shape')


let countDays = new Date();
let days = new Date(countDays.getFullYear(), countDays.getMonth() + 1, 0);


for (let i = 1; i <= days.getDate(); i++) {
    shaped.appendChild(shaped.cloneNode())

    // shape = document.querySelector('div')
    // shape.className = 'dashboard-shape'
    // container.appendChild(shapes)
}

let curMonth = new Date().getMonth();
switch (curMonth) {
    case 0:
        document.querySelector(".dashboard-month").innerHTML = "Январь";
        break;

    case 1:
        document.querySelector(".dashboard-month").innerHTML = "Февраль";
        break;
    case 2:
        document.querySelector(".dashboard-month").innerHTML = "Март";
        break;
    case 3:
        document.querySelector(".dashboard-month").innerHTML = "Апрель";
        break;

    case 4:
        document.querySelector(".dashboard-month").innerHTML = "Май";
        break;

    case 5:
        document.querySelector(".dashboard-month").innerHTML = "Июнь";
        break;

    case 6:
        document.querySelector(".dashboard-month").innerHTML = "Июль";
        break;

    case 7:
        document.querySelector(".dashboard-month").innerHTML = "Август";
        break;

    case 8:
        "Сентябрь";
        document.querySelector(".dashboard-month").innerHTML = "Октябрь";
        break;

    case 9:
        document.querySelector(".dashboard-month").innerHTML = "Октябрь";
        break;

    case 10:
        document.querySelector(".dashboard-month").innerHTML = "Ноябрь";
        break;

    case 11:
        document.querySelector(".dashboard-month").innerHTML = "Декабрь";
        break;

    default:
        break;
}
