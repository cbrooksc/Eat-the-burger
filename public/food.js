// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newdevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/food/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[burger_name=]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/food", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log("created new burger " + data);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/burger/delete/" + id, {
        method: "DELETE"
      }).then(
        function(data) {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  