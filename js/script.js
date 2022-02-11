$(function() {
    //Fuction to add leadingzero if value of the time is less than 10

    function add_leading_zero(number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();

        }
    }
    //Fuction to add AM/PM depending on the time of the day
    function AM_PM(daytime) {

        if (daytime < 12) {
            var time = "AM";
            return time.toString();
        } else {
            time = "PM"
            return time.toString();
        }
    }
    var c = false
        //Button T

    $("#timeButton").click(function time() {
        $("#text").css("display", "none")
        $(".time").css("display", "inline")
        var globalThis = window.setInterval(function() {
            var currentTime = new Date()
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            document.getElementById("hours").innerHTML = add_leading_zero(hours) + ":";
            document.getElementById("minutes").innerHTML = add_leading_zero(minutes) + " :";
            document.getElementById("seconds").innerHTML = add_leading_zero(seconds);
            document.getElementById("AM-PM").innerHTML = AM_PM(hours);

            return globalThis
        }, 1000);
    })

    //Button C

    $("#clear").click(function() {
        $("#screen").text("0")
        windows.clearInterval(globalThis)
    })

    //Getting the value of the click button

    var buttons = $(".box-")

    for (var i = 0; i < buttons.length; i++) {
        {
            if (buttons[i].innerHTML == "5") {
                console.log(buttons[i].innerHTML)
            }
            //console.log(buttons[i].innerHTML)

        }

    }
    $("#on_off").click(function() {
        $("#screen").text("Hello")
    })

})