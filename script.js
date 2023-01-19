
//   $(window).on('load', function() {
   
//     $('#intro').modal('show');
    
 
   
//   });

// $(document).ready(function() {
//     var dialogShown = localStorage.getItem('wilmeModel')
    
//     if (!dialogShown) {
//         $(window).on("load",function(){
//             $('#intro').modal('show');
//             $.cookie('wilmeModel', 1)
//         });
//     }
//     });


$(document).ready(function() {
  var dialogShown = localStorage.getItem('wilmeModel')
  
  if (!dialogShown || dialogShown == 0) {
      $(window).on("load",function(){
          $('#intro').modal('show');
          localStorage.setItem('wilmeModel', 1)
      });
  }else if(dialogShown == 1){
    localStorage.setItem("wilmeModel", 0)
  }
  }
  
  );

//   $(document).ready(function() {
//     var dialogShown = $.cookie('dialogShown');
    
//     if (!dialogShown) {
//         $(window).load(function(){
//             $('#wizardmodal').modal('show');
//             $.cookie('dialogShown', 1);
//         });
//     }
//     });


//  const Red = -600;

//   if(Red < -1000){
//     return console.log("red is more favorite than -1000 and gets: " + 20 + " points")
//   }
// else if(Red < -800){
//   return console.log("red is more favorite than -800 and gets: " + 15 + " points")
// }
// else if(Red < -500){
//   return console.log("red is more favorite than -500 and gets: " + 10 + " points")
// }

  
  // function fizzBuck(numVar)
  // {
  //   for(let i = 1; i <= numVar; i++ )
  //   {
  //     if(i % 3 == 0 && i % 5 == 0)
  //     {
  //       console.log("fizz buzz")
  //     }
  //     else if(i % 3 == 0)
  //     { 
  //       console.log("fizz")
  //     }
  //     else if(i % 5 == 0)
  //     { 
  //       console.log("buzzz")
  //     }
    
  //     else{console.log(i)}
  //   }
  // }
  