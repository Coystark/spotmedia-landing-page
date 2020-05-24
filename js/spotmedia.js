( ($) => {

    /* Ativar tooltip's */ 

    $('[data-toggle="tooltip"]').tooltip()

    /* Main-navbar */

    $(document).on("scroll", () => {
        if($(document).scrollTop() > 50){
            $(".main-navbar").addClass("small-size");
            $(".main-navbar .logo").addClass("small-size");
        } else{
            $(".main-navbar").removeClass("small-size");
            $(".main-navbar .logo").removeClass("small-size");
        }
    });

    /* Cadastro */

    $('.form-signup button').on('click', (event) => {
        event.preventDefault();

        startSignupLoading();

        setTimeout( () => {
            stopSignupLoading('ok', 'CPF/CNPJ inválido.<br>E');
        }, 3000);


    });
    
    function startSignupLoading() {

        $("#fullname").prop("disabled", true);
        $("#phone").prop("disabled", true);
        $("#cpf-cnpj").prop("disabled", true);
        $("#email").prop("disabled", true);
        $("#birth").prop("disabled", true);
        $("#pages").prop("disabled", true);
        $(".button-send").prop("disabled", true);

        $('.signup-loading').css('display', 'flex');
        $('.form-signup').css('opacity', '0.3');
        $('#wraper-loading-animation').css('display', 'block');

        $('#signup-error').text('');
        
    }

    function stopSignupLoading(result, message = '') {

        if(result === "ok") {
            $('#wraper-loading-animation').css('display', 'none');
            $('#signup-success').css('display', 'block');
        }
        else if(result === "error") {

            $("#fullname").prop("disabled", false);
            $("#phone").prop("disabled", false);
            $("#cpf-cnpj").prop("disabled", false);
            $("#email").prop("disabled", false);
            $("#birth").prop("disabled", false);
            $("#pages").prop("disabled", false);
            $(".button-send").prop("disabled", false);

            $('#wraper-loading-animation').css('display', 'none');
            $('.signup-loading').css('display', 'none');
            $('.form-signup').css('opacity', '1.0');

            $('#signup-error').text(message);
        }

    }

    /* Smooth Scrolling */

    $('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {

            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                return false;
                } else {
                $target.attr('tabindex','-1');
                $target.focus();
                };
            });
        }
    }
    });



})(jQuery);