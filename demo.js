import NProgress from "./nprogress";
import $  from "jquery";

$("body").show();
setTimeout(function () {
    NProgress.done();
    $(".fade").removeClass("out");
}, 1000);

$("#b-40").click(function () {
    NProgress.set(0.4);
});
$("#b-inc").click(function () {
    NProgress.inc();
});
$("#b-100").click(function () {
    NProgress.done();
});
$("#b-rm").click(function () {
    NProgress.remove();
});
$("#b-hide").click(function () {
    NProgress.hide();
});