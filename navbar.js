$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".topnav").addClass("sticky");
        } else {
            $(".topnav").removeClass("sticky");
        }
    })
}
