import NProgress from "./nprogress";
import $ from "jquery";

$("body").show();
$(".fade").removeClass("out");

$("#b-40").click(function () {
    NProgress.set(0.4);
});

$("#b-0").click(function () {
    NProgress.set(0);
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

$("#b-start").click(function () {
    NProgress.start();
});
