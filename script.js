$(document).ready(function(){

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))    


$(".saveBtn").on("click",function(){
var textInput = $(this).siblings(".textInput").val()
var time = $(this).parent().attr("id")
console.log(textInput, time)
localStorage.setItem(textInput, time)
})


$("#9 .textInput").val(localStorage.getItem("9"))

// function changeColor(){
//     var timeNow = moment().hour()


//     $('.timeBlock').each(function () {
//         var timeBlock = parseInt($(this).attr("id")[1])

//         if(timeNow < timeBlock){
//             $(this).addClass('past')
//         } else 
//         if( timeNow === timeBlock ){
//             $(this).removeClass('past')
//             $(this).addClass('now')
//         } else {
//             $(this).removeClass('now')
//             $(this).removeClass('past')
//             $(this).addClass('future')
//         }


//     })
    
// }
// changeColor()
var timeNow = moment().hour()

if (timeNow > 9 ) {
    $('.hour9').addClass('past');
  } else if (timeNow === 9) {
    $('.time8').addClass('now');
  } else if (timeNow < 9) {
    $('.time8').addClass('future');
  }













})


