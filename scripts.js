
$(document).ready(function() {
    $("#submitCard").click(function(e) {
        e.preventDefault();
        var value = $("#searchField").val();
        console.log(value);

    })

    $("#numberChoice").change(function(e) {
        e.preventDefault();
        var value = $("#numberChoice").val();
        console.log(value);

    })

});
