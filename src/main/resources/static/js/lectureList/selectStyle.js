/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
    $(this).children('select').css('display', 'none');
    
    var $current = $(this);
    
    $(this).find('option').each(function(i) {
      if (i == 0) {
        $current.prepend($('<div>', {
          class: $current.attr('class').replace(/sel/g, 'sel__box')
        }));
        
        var placeholder = $(this).text();
        $current.prepend($('<span>', {
          class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
          text: placeholder,
          'data-placeholder': placeholder
        }));
        
        return;
      }
      
      $current.children('div').append($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
        text: $(this).text()
      }));
    });
  });
  
  // Toggling the `.active` state on the `.sel`.
  $('.sel').click(function() {
    $(this).toggleClass('active');
  });
  
  // Toggling the `.selected` state on the options.
  $('.sel__box__options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();
    
    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');
    
    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
  });
  
if(document.querySelector('#searchBtn') != null) {
    
  document.querySelector('#searchBtn').addEventListener('click', () => {
    let category = document.querySelector('.listSearchContainer .categorySearch > div > span').innerText;
    let target = document.querySelector('.listSearchContainer .targetSearch > div > span').innerText;
    let status = document.querySelector('.listSearchContainer .registStatus > div > span').innerText;
    let year = document.querySelector('.listSearchContainer .yearSearch > div > span').innerText;
    let month = document.querySelector('.listSearchContainer .monthSearch > div > span').innerText;
    let day = document.querySelector('.listSearchContainer .daySearch > div > span').innerText;
    let time = document.querySelector('.listSearchContainer .timeSearch > div > span').innerText;
    let typing = document.querySelector('.listSearchContainer .typingSearch > div > input').value;

    switch(category) {
        case category == '정기강좌' :
            category = 1;
            break;
        case category == '단기강좌' :
            category = 2;
            break;
        case category == '무료강좌' :
            category = '단기강좌';
            break;
            default : 
        category = null;
    }

    switch(target) {
        case target == '성인강좌' :
        target = '1';
        break;
        case target == '아동강좌' :
        target = '2';
        break;
        case target == '영유아강좌' :
            target = '3';
            break;
            default :
            target = null;

    }

   if(status == '전체' || status == '접수 상태') {
       status = null;
   }

   if(year == '전체' || year == '개강 년도') {
       year = null;
   }

   if(month =='전체' || month =='개강 월') {
       month = null;
   }

   if(day == '전체' || day == '개강 요일') {
       day = null;
   }

   if(time == '전체' || time == '개강 시간') {
       time = null;
   }

   if(typing == '') {
       typing = null;
   }

    console.log(category);
    console.log(target);
    console.log(status);
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(time);
    console.log(typing);
});

}



if(document.querySelector('#scheduleBtn') != null) {
    
document.querySelector('#scheduleBtn').addEventListener('click', () => {
    let category = document.querySelector('.scheduleContainer .categorySearch > div > span').innerText;
    let target = document.querySelector('.scheduleContainer .targetSearch > div > span').innerText;
    let status = document.querySelector('.scheduleContainer .registStatus > div > span').innerText;
    let year = document.querySelector('.scheduleContainer .yearSearch > div > span').innerText;
    let month = document.querySelector('.scheduleContainer .monthSearch > div > span').innerText;
    let day = document.querySelector('.scheduleContainer .daySearch > div > span').innerText;
    let time = document.querySelector('.scheduleContainer .timeSearch > div > span').innerText;
    let typing = document.querySelector('.scheduleContainer .typingSearch > div > input').value;

    switch(category) {
        case category == '정기강좌' :
            category = 1;
            break;
        case category == '단기강좌' :
            category = 2;
            break;
        case category == '무료강좌' :
            category = '단기강좌';
            break;
            default : 
        category = null;
    }

    switch(target) {
        case target == '성인강좌' :
        target = '1';
        break;
        case target == '아동강좌' :
        target = '2';
        break;
        case target == '영유아강좌' :
            target = '3';
            break;
            default :
            target = null;

    }

   if(status == '전체' || status == '접수 상태') {
       status = null;
   }

   if(year == '전체' || year == '개강 년도') {
       year = null;
   }

   if(month =='전체' || month =='개강 월') {
       month = null;
   }

   if(day == '전체' || day == '개강 요일') {
       day = null;
   }

   if(time == '전체' || time == '개강 시간') {
       time = null;
   }

   if(typing == '') {
       typing = null;
   }

    console.log(category);
    console.log(target);
    console.log(status);
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(time);
    console.log(typing);
});
}