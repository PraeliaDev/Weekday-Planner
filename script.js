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
  
  if (timeNow > 10 ) {
    $('.hour10').addClass('past');
  } else if (timeNow === 10) {
    $('.time8').addClass('now');
  } else if (timeNow < 10) {
    $('.time8').addClass('future');
  }
  
  if (timeNow > 11 ) {
    $('.hour11').addClass('past');
  } else if (timeNow === 11) {
    $('.time8').addClass('now');
  } else if (timeNow < 11) {
    $('.time8').addClass('future');
  }

  if (timeNow > 12 ) {
    $('.hour12').addClass('past');
  } else if (timeNow === 12) {
    $('.time8').addClass('now');
  } else if (timeNow < 12) {
    $('.time8').addClass('future');
  }

  if (timeNow > 13 ) {
    $('.hour13').addClass('past');
  } else if (timeNow === 13) {
    $('.time8').addClass('now');
  } else if (timeNow < 13) {
    $('.time8').addClass('future');
  }

  if (timeNow > 14 ) {
    $('.hour14').addClass('past');
  } else if (timeNow === 14) {
    $('.time8').addClass('now');
  } else if (timeNow < 14) {
    $('.time8').addClass('future');
  }

  if (timeNow > 15 ) {
    $('.hour15').addClass('past');
  } else if (timeNow === 15) {
    $('.time8').addClass('now');
  } else if (timeNow < 15) {
    $('.time8').addClass('future');
  }

  if (timeNow > 16 ) {
    $('.hour16').addClass('past');
  } else if (timeNow === 16) {
    $('.time8').addClass('now');
  } else if (timeNow < 16) {
    $('.time8').addClass('future');
  }

  if (timeNow > 17 ) {
    $('.hour17').addClass('past');
  } else if (timeNow === 17) {
    $('.time8').addClass('now');
  } else if (timeNow < 17) {
    $('.time8').addClass('future');
  }








})


