
$(document).ready(function(){


  $("body").on("click",()=>{
    console.log("ANYTHING ELSE");
  })

  let checkedValsArr = [];
  function checkedVals(){
    checkedValsArr = [];
      $('input[name=save_hospital]:checked').each(function(){
        checkedValsArr.push($(this).val());
      });   
  }


$(".submit-saved").on("click", function() {
      // event.preventDefault();
    console.log("ANYTHING");
    checkedVals();
    console.log(checkedValsArr);

    var savedHospitals = {
      id: 1,//TODO get this from anibal later
      saved_hospitalIds: checkedValsArr.toString(),
      
    }
    console.log(savedHospitals);


    $.ajax({
      url: "/api/id",
      type: 'PUT',
      data: savedHospitals,
      success: function(res) {
        console.log("ANYTHING BUT AN ALERT");
        alert('Your hospitals have been saved for later.');
          //     // If there is a user in the table console log the data
          //     if (data) {
          //       console.log(data);
              
          //     }
          //     // If there is not a match tell the user they can't save anything 
          //     else {
          //       alert("Sorry you are not able to save");
          //     }
      }
    });

  });

    
  });