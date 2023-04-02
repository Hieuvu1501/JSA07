$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
 });
 
 function Unavailable() {
    window.location.assign('unavailable.html')
 }

function weatherHanoi() {
    window.location.href="main.html"
}