function add_leading_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();

    }
}

function AM_PM(daytime) {

    if (daytime < 12) {
        var time = "AM";
        return time.toString();
    } else {
        time = "PM"
        return time.toString();
    }
}


$(".box-1").click(function() {
    $("#text").css("display", "none")
    $(".time").css("display", "inline")
    window.setInterval(function() {
        var currentTime = new Date()
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        document.getElementById("hours").innerHTML = add_leading_zero(hours) + " :";
        document.getElementById("minutes").innerHTML = add_leading_zero(minutes) + " :";
        document.getElementById("seconds").innerHTML = add_leading_zero(seconds);
        document.getElementById("AM-PM").innerHTML = AM_PM(hours);
    }, 1000);
})
$(".box-2").click(function() {
    $("#screen").text("")
})
$(".box-3").click(function() {
    $("#screen").text("ROOT-CALCULATOR")
})