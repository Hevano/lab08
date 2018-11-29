$(document).ready(function() {
    console.log("script ready to go!")

    // Gets a list of fruit facts from the server
    $('#facts').click(function(e) {
        console.log(e, "This is e");
        $.ajax({
            url: "/ajax-GET-fruitfacts",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", fruit: 0},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#facts").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#facts").html("<p>Woop</p>");
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });


    /* GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#mainMenu #getJSONList').click(function(e) {
        console.log(e, "This is e")

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            fruit: 0,
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#facts");
                let htmlStr = "<ol>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ol>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    }); */


    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function(e) {
        let formData = { firstName: $("#firstName").val(),
                         lastName: $("#lastName").val(),
                         email: $("#email").val()
                       };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                              + " " + data[1]['lastName']
                              + " " + data[1]['email']
                             );

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
