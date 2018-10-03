/*global$*/
$(document).ready(function() {
    //Initialize Keyup function for City Recommendation
    $("#cardNameField").keyup(function() {
        //Make and return links to cards on hover
        var results = "<ul>";
        
        $.ajax({
             type:'GET',
             url: 'UST.json',
             dataType:'JSON',
             success:function(data){
                 $.each(data, function(key, val){
                     var cardName = val.name.toUpperCase();
                     if(cardName.startsWith($("#cardNameField").val().toUpperCase())){
                         results += "<li>";
                         results += val.name;
                         resutls += "</li>";
                     }
                 })
             },
         });

        results += "</ul>";
        $("#txtHint").html(results);
      })
  });  