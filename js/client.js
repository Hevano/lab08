$(document).ready(function() {
    console.log("script ready to go!");
    var json = false;

    $('#getHTML').click(function(e) {
        json = false;
        $('#getJSON').css("backgroundColor","#939393");
        $('#getHTML').css("backgroundColor","white");
        console.log("Flicked!", json);
    });

    $('#getJSON').click(function(e) {
        json = true;
        $('#getHTML').css("backgroundColor","#939393");
        $('#getJSON').css("backgroundColor","white");
        console.log("Flicked!", json);
    });

    /* Gets a list of fruit facts from the server
    $('#b0').click(function(e) {
        console.log($(e["currentTarget"]).attr("id"), "This is id");
        $.ajax({
            url: "/ajax-GET-fruitfacts",
            dataType: "html",
            type: "GET",
            data: { format: "html-list", fruit: $(e["currentTarget"]).attr("id")},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#facts").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#facts").html("<p>Woop</p>");
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    }); */


    /* GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA */
    $('div.meme').click(function(e) {
        let type = ["html","html-list"];
        if(json) {
            type = ["json","json-list"];
        }
        console.log("AJAX", type, json);

        $.ajax({
            url: "/ajax-GET-fruitfacts",
            dataType: type[0],
            type: "GET",
            data: { format: type[1], fruit: $(e["currentTarget"]).attr("id")},
            success: function(data) {
                if(json) {
                    console.log("SUCCESS JSON:", data);
                    var div = $("#facts");
                    let htmlStr = "<ul>";
                    for(let i = 0; i < data.length; i++) {
                        htmlStr += "<li>" + data[i] + "</li>";
                    }
                    htmlStr += "</ul>";
                    div.html(htmlStr);
                }
                else {
                    console.log("SUCCESS HTML:", data);
                    $("#facts").html(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });


    /* PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
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
    }); */

});
