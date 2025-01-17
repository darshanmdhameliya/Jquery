// Traversing - Ancestors

// parent()
// parents()
// parentsUntil()

//parent()
// Ancestors na prents ne css lage
// $(function(){
//     $("span").parent().css({'color':'red',"border": "2px solid red"})
// })

//parents()
// Ancestors na badha prents ne css lage
// $(function(){
//     $("span").parents().css({'color':'red',"border": "2px solid red"})
// })

// Ancestors pachi tame nakhela selector sudhi aave
// $(function(){
//     $("span").parents('.insidemain').css({'color':'red',"border": "2px solid red"})
// })

// parentsUntil()
// Ancestors pachi tame nakhela selector sudhi aave nakhelo hoy te no aave
// $(function(){
//     $("span").parentsUntil('div').css({'color':'red',"border": "2px solid red"})
// })



// Traversing - Descendants

// children()
// find()

// children()
// $(function(){
//     $('.main').children().css({'color':'red',"border": "2px solid red"})
// })
// $(function(){
//     $('.main').children("p.second").css({'color':'red',"border": "2px solid red"})
// })

// find()
// $(function(){
//     $('.main').find("span").css({'color':'red',"border": "2px solid red"})
// })
// $(function(){
//     $('.main').find("*").css({'color':'red',"border": "2px solid red"})
// })


// Traversing - Siblings

// siblings()
// next()
// nextAll()    
// nextUntil()
// prev()
// prevAll()
// prevUntil()


// siblings() method
$(document).ready(function () {
    $("h2").siblings().css({ "color": "red", "border": "2px solid red" });
});
$(document).ready(function () {
    $("h2").siblings("p").css({ "color": "red", "border": "2px solid red" });
});


// next() Method
// $(document).ready(function () {
//     $("h2").next().css({ "color": "red", "border": "2px solid red" });
// });

// nextAll() Method
// $(document).ready(function () {
//     $("h2").nextAll().css({ "color": "red", "border": "2px solid red" });
// });

// nextUntil() Method
// $(document).ready(function () {
//     $("h2").nextUntil('h5').css({ "color": "red", "border": "2px solid red" });
// });

// prev(), prevAll() & prevUntil() Methods



// Traversing - Filtering

// first()
// last()
// eq()
// filter()
// not() 

// first() Method

// $(function(){
//     $("div").first().css("background-color","yellow");
// });

// second() Method

// $(function(){
//     $("div").last().css("background-color","yellow");
// });

// eq() method

// $(function(){
//     $("div").eq(1).css("background-color","yellow");
// });

// filter() Method
// tame jema class nakhelo hoy tema j css lage

// $(function(){
//     $("p").filter('.filter').css("background-color","yellow");
// });

// not() Method
// tame jema class nakhelo hoy tema css no lage baki badha ma lage

// $(function(){
//     $("p").not('.filter').css("background-color","yellow");
// });