//Waits for DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {

    //Adding new burger with submit
    $("#add-burger-button").click(function(e){
        e.preventDefault();
        
        let newBurgerInfo = $("#add-burger");

        let newBurger = {
            burger_name: newBurgerInfo.val()
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            // Reload the page for new burger
            location.reload();
            }
        );
    });

});

