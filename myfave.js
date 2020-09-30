

$(document).ready(

    function () {

        show_button_cuisine()
    }
)


show_button_cuisine = function () {

    var getUserData = JSON.parse(localStorage.getItem("saved_locations"));

    for (var i = 0; i < getUserData.length; i++) {

        console.log("getUserData", getUserData[i]);

        var getRestoType = getUserData[i].cuisine;

        var getRadiusUser = getUserData[i].radius;

        var cardResto = $('<div>').attr({ "class": "card bg-warning m-2" });
        var cardBodyResto = $('<div>').attr({ "class": "card-body bg-warning" });


        var cuisineIcon = $('<i class="fas fa-utensils"></i>');
        var cuisineText = $('<p>').text(getRestoType);
        var cuisineRadius = $('<p>').text(getRadiusUser + "M");

        var cuisineButton = $('<button>').attr({ "class": "col btn-warning", "value": i, "onclick": "add_search_term(" + i + ")" });

        cuisineButton.append(cuisineIcon);
        cuisineButton.append(cuisineText, cuisineRadius);

        cardBodyResto.append(cuisineButton);
        cardResto.append(cardBodyResto);
        $('#cuisine-button').append(cardResto);

    }



}

add_search_term = function (i) {

    var getUserData = JSON.parse(localStorage.getItem("saved_locations"));


    var lng = getUserData[i].lon;

    var lat = getUserData[i].lat;

    var radius_select = getUserData[i].radius;

    var resto_type = getUserData[i].cuisine;

    localStorage.setItem("geo_lng", lng);
    localStorage.setItem("geo_lat", lat);
    localStorage.setItem("geo_resto_type", resto_type);
    localStorage.setItem("geo_radius", radius_select);


    window.location = "display_page.html";
}