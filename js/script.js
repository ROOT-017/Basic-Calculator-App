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

    //Global Variables
    var timeState = false
    var on_off = false
    var on_offState = 0
    var onBackgroundColor = "#00ff00"
    var offBackgroundColor = "#ff0000"
    var cssBackgroundColorProperty = "background-color"

    //Calcutaed value is always none initialy
    $(".calculatedValue").css("display", "none")
    $(".box-on").css("display", "none")
        //TimeButton
    $("#timeButton").click(function time() {
        if (on_off == true) {
            //Display time
            $(".calculatedValue").css("display", "none")
            $("#text").css("display", "none")
            $(".time").css("display", "inline")
            globalThis.clear = window.setInterval(function() {
                var currentTime = new Date()
                var hours = currentTime.getHours();
                var minutes = currentTime.getMinutes();
                var seconds = currentTime.getSeconds();
                document.getElementById("hours").innerHTML = add_leading_zero(hours) + ":";
                document.getElementById("minutes").innerHTML = add_leading_zero(minutes) + " :";
                document.getElementById("seconds").innerHTML = add_leading_zero(seconds);
                document.getElementById("AM-PM").innerHTML = AM_PM(hours);
            }, 1000);
        }
    })

    //Button Clear
    $("#clear").click(function() {
        if (on_offState == true) {

            window.clearInterval(clear)
            $(".time").css("display", "none")
            $("#text").css("display", "none")
            $(".calculatedValue").css("display", "inline")
        }
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

    //on_off button
    $("#on_off").click(function() {
        if (on_offState == 1) {
            on_off = false
            on_offState -= 1
            console.log(on_offState, on_off)
            $("#on_off").css(cssBackgroundColorProperty, offBackgroundColor)
            $("#text").css("display", "inline")
            window.clearInterval(clear)
            $(".time").css("display", "none")
            $(".calculatedValue").css("display", "none")
            $("#on_off").text("OFF")

        } else {
            on_off = true
            on_offState = +1
            console.log(on_offState, on_off)
            $("#on_off").css(cssBackgroundColorProperty, onBackgroundColor)
            $("#text").css("display", "none")
            $(".calculatedValue").css("display", "inline")
            $(".time").css("display", "none")
            $("#on_off").text("ON")
            window.clearInterval(clear)
                //$("#time").css("display", "none")
        }
        /*   $("#on_off").css(cssBackgroundColorProperty, on_offBackgroundColor)
             
          $("#text").css("display", "inline")
          $(".calculatedValue").css("display", "none")
          $(".time").css("display", "none")
          window.clearInterval(clear)
              //$("#time").css("display", "none")
             */

        //}


    })

})
const calculator = document.querySelector(".box")
const keys = calculator.querySelector(".innerContainer")
keys.addEventListener("click", e => {
    if (e.target.matches("div")) {
        // Do something 
        const key = e.target
        const action = key.dataset.action

        if (!action) {
            console.log("number key!")
        }
        if (
            action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide' || action == "modulus"
        ) {
            console.log('operator key!')
        }
        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'equal') {
            console.log('equal key!')
        }
        if (action === 'time') {
            console.log('time key!')
        }
        if (action === 'on_off') {
            console.log('On_OFF key!')
        }
    }
    const display = document.querySelector('.calculator__display')

    keys.addEventListener('click', e => {
        if (e.target.matches('div')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                }
            }
            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'decimal') {
                display.textContent = displayedNum + '.'
            }
            if (
                action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action == "modulus"
            ) {
                key.classList.add('is-depressed')
            }
            keys.addEventListener('click', e => {
                if (e.target.matches('button')) {
                    const key = e.target
                        // ...

                    // Remove .is-depressed class from all keys
                    Array.from(key.parentNode.children)
                        .forEach(k => k.classList.remove('is-depressed'))
                }
            })
        }

    })
})