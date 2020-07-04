var user_input_stream = ''; //Coleta todas as combinações de teclas do usuário
var eingabe; //verifique a variável => tudo o que está no campo de entrada é armazenado em cache e processado aqui (às vezes, a lista de chaves não reage rápido o suficiente para o espaço, por exemplo, "hello w" é transferido, portanto, ocorre um processamento adicional)
var backspace_counter = 0;

setInterval(console.log(`&sz= ${start_time}, 
&ez= ${$end_time}, 
&user_input=  ${$user_input_stream},
&backspace_counter= ${backspace_counter},
&speedtest_id= ${$("#logo").attr("speedtest_id")}`), 500);



const promisse = fetch("https://10fastfingers.com/anticheat/generate_word_picture?rand=1474322863", {"credentials":"include","headers":{},"referrer":"https://10fastfingers.com/anticheat/view/1/1","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});



$(document).ready(function () {
    activate_keylistener();

    //show "Start" Button
    $("#start-btn").show();

    //if user presses "Start"-Button, generate
    $("#start-btn").click(function () {
        //console.log("start");
        start_test();
    });
});

function start_test() {
    $("#start-btn").hide();
    generate_word_picture();
    $("#word-input").focus();
}

function generate_word_picture() {
    $("#word-img").html('<img src="https://10fastfingers.com/anticheat/generate_word_picture?rand=' + Math.floor((Math.random()*9999999999)+1) + '" alt="" />');
}


//aguarda a entrada feita em #inputfield
function activate_keylistener() {

    $("textarea#word-input").keyup(function (event) {
        if (event.which == 8) {

        }
    });
}



setInterval(() => {
    backspace_counter = 0
}, 500);

//conta o tempo
function count_down() {
    countdown--;

    var first_part;
    var second_part;

    first_part = Math.floor(countdown / 60);
    second_part = countdown % 60;

    if (second_part < 10)
        second_part = '0' + second_part;

    $("#timer").text(first_part + ":" + second_part);

    if (countdown > 9) {
        $("#timer").text("0:" + countdown);
    } else if (countdown > 0) { 
        $("#timer").text("0:0" + countdown);
    } else if {
        //END => a contagem regressiva chega a 0 segundo, interrompe a contagem regressiva e a avaliação com o Ajax
        $("#timer").text("0:00");
        $("#timer").addClass("off");
        $("#row1").hide();
        $("#words").fadeTo('fast', 0.3);

        window.clearInterval(setval);
        setval = "";

        end_time = get_current_time().toString(16);

        var send_data = "sz=" + start_time + "&ez=" + end_time + "&user_input=" + user_input_stream + "&backspace_counter=" + backspace_counter + "&speedtest_id=" + $("#logo").attr("speedtest_id");



        $.ajax({
            type: 'POST',
            url: "/speedtests/auswertung", //auswertung === avaliação
            cache: false,
            dataType: 'json',
            data: send_data,
            success: function (data) {
                $("#auswertung-result").html(data['result']);
                $("#auswertung-result").show();

                $("#badge-box").html(data['badge']);
                $("#badge-box").show();

                $("#recent-active-users").load("/speedtests/active_users", function () {
                    $("div.user[rel=popover]").popover({
                        offset: 0,
                        animate: false,
                        html: true,
                        placement: "top",
                        content: function () {
                            return $("#popover-userid-" + $(this).attr("userid")).html();
                        },
                        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner" style="width: 348px;"><div class="popover-content" style="width: 320px;"><p></p></div></div></div>'
                    });

                    $("#recent-active-users .user").delay(200).fadeIn(300);
                });

                //hides the secondary main-ad and resizes the "main-ad-box" to fit on the right side next to "result" & "share"
                //$("#ad-main-secondary").hide();
                $("#ad-main").css('margin', 'none');
                $("#ad-main").css('float', 'left');
                $("#ad-main-secondary").css('float', 'left');
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr);
                console.log(textStatus);
                console.log(errorThrown);

                error_wpm = Math.round(error_keystrokes / 5);
                $("#error-box #wpm").text(error_wpm);
                $("#error-box #keystrokes").text(error_keystrokes);
                $("#error-box #correct-words").text(error_correct);
                $("#error-box #wrong-words").text(error_wrong);

                $("#error-box").show();
            }
        });
    }
}

function get_current_time() {
    var d = new Date();
    return d.getTime();
}






























//<![CDATA[
$(document).ready(function () {
    $(function () {
        $("#switch-typing-test-language").click(function () {
            $("#language-list").slideToggle();
        });

        $("#inputfield").attr("dir", $("#typing-direction").attr("value"));

        var loggedin_user_id = $("#loggedin_user_id").attr("value");
        $("tr[user_id=\"" + loggedin_user_id + "\"]").addClass("highlighted");

        //prevent copy and paste
        $("#inputfield").bind("cut copy paste", function (e) {
            e.preventDefault();
        });

        $("#submit-anticheat").click(function () {
            $.ajax({
                type: "POST",
                url: "/anticheat/auswertung_anticheat",
                data: "eingabe_string=" + $("#word-input").val() + "&backspace_counter=" + backspace_counter,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                /*dataType: 'json',*/
                cache: false,
                success: function (data) {
                    $("#ausgabe-ergebnis").html(data).show();
                }
            });
        });
    });


    $(function () {

        setInterval(function () {
            var count = $("#activity-module div.list-group-item").size();
            //console.log(count);
            if (count > 5)
                $("#activity-module #children div.list-group-item:last").hide().remove();

        }, 350000);
    });


    $(function () {
        load_notifications();
        //setInterval(load_notifications, 300000); //reload every 5 minutes automatically
    });
});
//]]>