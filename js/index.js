$(function(){
 
 
    //Will listen for click of the submit button, and call the convertTextToBackground function
    $('form').submit(convertTextToBackground);

    function convertTextToBackground(event){

        event.preventDefault();

        //Take in value of user input and assign to city
        // Also convert to upper case to make user input non case sensitive
        var city = $('#city-type').val().toUpperCase();

        // Create a conditional that checks for different potential values of user input
        // Will then assign a class to the body that corresponds to the user input
        // Each class contains a background image that reflects the user input
        if (city === "NEW YORK" || city === "NEW YORK CITY" || city === "NYC") {
            $('body').attr('class','nyc');

        } else if (city === "SAN FRANCISCO" || city === "SF" || city === "BAY AREA") {
            $('body').attr('class','sf');
        
        } else if (city === "LOS ANGELES" || city === "LA" || city === "LAX") {
            $('body').attr('class','la');

        } else if (city === "AUSTIN" || city === "ATX") {
            $('body').attr('class','austin');

        } else if (city === "SYDNEY" || city === "SYD") {
            $('body').attr('class','sydney');

        } 

        // Then clear the input field so that user doesn't have to erase form
        $('#city-type').val('');


    }

})