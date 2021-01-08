//Waits for DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {

    //Adding new burger with submit
    $("#add-burger-button").click(function(e){
        e.preventDefault();
        
        let newBurgerInfo = $("#add-burger");

        let newBurger = {
            burger_name: newBurgerInfo.val()
        };

        //POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                //Reload the page for new burger
                location.reload();
            }
        );
    });

    //Update burger devoured
    $(".devour-button").click(function(e){
        e.preventDefault();

        let id = $(this).parent().data("id");

        //Value must be "1"; cannot be "true"
        let nowDevoured = {
            devoured: 1
        };

        //PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(
            function() {
                //Reload the page for updated data
                location.reload();
            }
        )
    })

});

