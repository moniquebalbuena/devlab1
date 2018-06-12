/*global $*/
$(document).ready(function(){
    
var contact1 = "contact.html";
var me1 = "aboutme.html";
var portfolio = "port.html";

$("#email").click(function(){
    window.location = contact1;
});

$("#me").click(function(){
    window.location = me1
});

$("#port").click(function(){
    window.location = portfolio
});

$("#github").click(function(){
    window.location = "https://github.com/moniquebalbuena/devlab1";
});

})