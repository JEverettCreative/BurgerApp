// $(".devour").on("submit", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");
//     var newSleep = $(this).data("newsleep");

//     var newSleepState = {
//     sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/cats/" + id, {
//     type: "PUT",
//     data: newSleepState
//     }).then(
//     function() {
//         console.log("changed sleep to", newSleep);
//         // Reload the page to get the updated list
//         location.reload();
//     }
//     );
// });
  