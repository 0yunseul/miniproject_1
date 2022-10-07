// .top 인 요소를 기준으로 다음요소를 찾아서 있으면 (현재요소) .top을 제거하고 다음요소에 .top을 추가하는데, 3초에 한번씩 순환
// $()
// .querySelector()
//const sceneIntervalID = setInterval(changeScene, 3000);
//function changeScene(){
    // 현재요소 찾고
    // 다음요소 찾아서
    // 있으면 .top을 전달(현재에서 제거, 다음에 붙이기)
    // 없으면 강제로 1번에 다시 전달하고 3초뒤에 원래 흐름대로 반복/순환
//}

$(function () {
    var intervalID = setInterval(changeSlide, 3000);

    function changeSlide(){
        var firstSlide = $('.container_visual div.top');
        var nextSlide = firstSlide.next();
        if(nextSlide.length <= 0) {
            nextSlide = $(".container_visual div:first")
        }
        firstSlide.removeClass("top")
        nextSlide.addClass("top")
    } 

  

       


})
