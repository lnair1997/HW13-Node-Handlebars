// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".btnDevoured").on("click", function (event) {
    const id = $(this).data("id");
    const devoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function () {
        console.log("changed burger to");
        location.reload();
      });
  });


  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".deleteBtn").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});