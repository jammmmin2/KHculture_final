$('.cart').on('click', function(e){
    let test = 1;
    if (test == 1) {
        if(confirm('로그인이 필요합니다. 로그인창으로 이동하시겠습니까?')) {

        } else {
            return;
        }
    }

    let name = this.parentElement.parentElement.children[1].children[1].children[0].innerText;
    if(confirm(name + "강좌를 장바구니에 담으시겠습니까?")) {
        console.log("이동");
    }
})

// $('.firstToggleBtn2').click(function(){
//     $('div.divToggle1').addClass('divHide');
//     $('.oneSecondDiv').removeClass('divHide');
//     $('.projectBtn1').removeClass('btnClicked');
//     $(this).addClass('btnClicked');
// });

$('.alignStandard a').on('click', function(e){
    // let test = $('this').attr('data-click');
    $('.alignStandard a').removeClass('line');
    $(this).addClass('line');
    let alignStandard = this.getAttribute('data-click');
    console.log(alignStandard);
    //검색 함수
})

$('.applyInpossible').on('click', function(){
    let test = 2;
    if(test == 1) {
        alert('접수 기한이 아닙니다.')
    } else {
        alert('정원이 마감된 강좌 입니다.');
    }
})

$('.applyPlan').on('click', function(){
    let name = this.parentElement.parentElement.children[1].children[1].children[0].innerText;
    let month = name.substring(0, name.indexOf('/'));
    let date = name.substr(name.indexOf('/') + 1, 2);
    alert('해당 강좌의 접수는 ' + new Date().getFullYear() + '년 ' + month + '월 ' + date + '일부터 가능합니다.');
})

