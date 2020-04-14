$(".eventButton").on("click", function () {
var keyword = $(this).attr("data-subject");

    function eventsDisplay() {

        var queryURL = "https://www.coursebuffet.com/search?q="+keyword
        $.ajax({
            url: queryURL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType: "json",
            method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response[0].courseId);
    for (var i = 0; i < 9; i++) {

        var eventDiv = $("<div class='eventDiv'>");
        var imageURL = response[i].imgUrl;
        var image = $("<img>");
        image.attr("src", imageURL);
        eventDiv.append(image);
        $("#events-display").append(eventDiv);
        var eventName = $("<div>");
        eventName.html(response[i].title);
        eventName.attr("style","font-weight: bold;");
        eventDiv.append(eventName);

        $("#events-display").append(eventDiv);

        var description = $("<div>");
        description.html(response[i].shortDescription);
        eventDiv.append(description);

        $("#events-display").append(eventDiv);

        var level = $("<div>");
        level.html("Level: "+response[i].level);
        level.attr("style","font-weight: bold;");
        eventDiv.append(level);


        $("#events-display").append(eventDiv);

        var btn = $("<button>");
        btn.addClass("event-btn");
        var eventURL = response[i].url;
        console.log(eventURL);
        btn.attr("onClick", `window.open("${eventURL}")`);
        btn.text("See more");
        eventDiv.append(btn);

        $("#events-display").append(eventDiv);
 
    }
  })
}
})