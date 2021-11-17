var date = new Date();

function renderCalendar() {
    date.setDate(1);
    var monthDays = document.querySelector('.days');
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var prevLastDay =  new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    var firstDayIndex = date.getDay();
    var lastDatyIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    var nextDays = 7 - lastDatyIndex - 1;

    var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    //document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date"><div><p>${prevLastDay - x + 1}</p></div></div>`
    }
    for(let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="current"><div><p class="today">${i}</p></div><div class="contents"></div></div>`;
        } else {
            days += `<div class="current"><div><p>${i}</p></div><div class="contents"></div></div>`;
        }
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date"><div><p>${j}</p></div></div>`;
    }
    monthDays.innerHTML = days;

    lectureContents();
}

function lectureContents() {
    var contents = document.querySelectorAll('.days > div.current');
    contents.forEach(item => {

        let testArr = [{num: 1} ,{num:2}, {num:3}, {num:4}];
        for (var key in testArr) {
            if(item.children[0].children[0].innerHTML == testArr[key].num) {
                var html = '';

                for(var key in testArr) {
                    if(key == 0) {
                        html += `<a href="#"><p>19:00 ~ 20:00</p><p>소믈리에와 함께하는 즐거운 양식의 세계</p></a>`;
                    } else {
                        html += `<hr><a href="#"><p>19:00 ~ 20:00</p><p>소믈리에와 함께하는 즐거운 양식의 세계</p></a>`;
                    }
                }
                item.children[1].insertAdjacentHTML('beforeend', html);
            }
        }
        
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.querySelector('#year').addEventListener('change', () => {
    let val = document.getElementById('year').value;
    date.setFullYear(val);
    renderCalendar();
});

renderCalendar();
