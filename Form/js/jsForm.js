
$(document).ready(function () {
    var example_array = {
        Value1: '',
        Value2: 'debian',
        Value3: 'fedora',
        Value4: 'centos',
        Value5: 'ubuntu'
    };

    var select = document.getElementById("example-select");
    for (index in example_array) {
        select.options[select.options.length] = new Option(example_array[index], index);
    }

    $("#btnSend").click(function () {
        let name = $("#name").val();
        let version = $("#version").val();
        let store = $("#store").val();
        let spread = $("#spread").val();
        let architecture = $("#architecture").val();
        let description = $("#description").val();
        var e = document.getElementById("example-select");
        var distribution = e.options[e.selectedIndex].text;
        let ArraygetInput = {
            name: name,
            version: version,
            store: store,
            spread: spread,
            architecture: architecture,
            description: description,
            distribution: distribution

        };
        // test for get value input
        // alert(ArraygetInput.name);
        // alert(ArraygetInput.distribution)
    });

    $("[data-validation]").blur(function () {

        if ($(this).attr("data-validation").toLowerCase() == "on") {

            eval($(this).attr("data-validation-rule").toLocaleLowerCase() + "(this)")
        } else {
        }
    }).after("<div class='invalid-feedback'></div>");

    function required(Item) {

        var myVal = $(Item).val();
        $(Item).removeClass("is-valid is-invalid")
        if (myVal.length == 0) {
            $(Item).next(".invalid-feedback").text("لطفا فیلد مورد نظر را پر کنید ")
            $(Item).addClass("is-invalid")

        } else {
            $(Item).addClass("")
        }

    }


})