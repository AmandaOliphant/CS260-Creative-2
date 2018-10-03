$(document).ready(function() {

    $("#submitCard").click(function(e) {
        e.preventDefault();
        var value = $("#cardNameField").val();
        console.log(value);
        var image = $("#cardImage").attr("src",)
        image.attr="http://www.wizards.com/magic/autocard.asp?name=Call of the Herd"

    })

    $("#numberChoice").change(function(e) {
        e.preventDefault();
        var value = $("#numberChoice").val();
        console.log(value);

    })

    $("#cardNameField").keyup(function() {
        //Make and return links to cards on hover
        var dataList = document.getElementById('card-datalist');
        dataList.innerHTML = '';
        var input = document.getElementById('cardNameField');

        $.ajax({
             type:'GET',
             url: 'UST.json',
             dataType:'json',
             success:function(data){
                 var cards = data.cards;
                 $.each(cards, function(index, value) {
                     var cardName = value.name.toUpperCase();
                     if(cardName.startsWith($("#cardNameField").val().toUpperCase())) {
                         var option = document.createElement('option');
                         option.value = value.name;
                         dataList.appendChild(option);
                     }
                 });

             }
         });

         input.placeholder = "Search Magic cards";
     })

});
