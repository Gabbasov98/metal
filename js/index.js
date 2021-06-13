$(document).ready(function() {

    $(".product__tab").click(function() {
        let path = $(this).attr("data-tabs-path");
        $(".product__tab").removeClass("product__tab--active");
        $(`.product__tab[data-tabs-path='${path}']`).addClass("product__tab--active");
        $(".product__content").removeClass("product__content--active");
        $(`.product__content[data-tabs-content='${path}']`).addClass("product__content--active");
        console.log(path)
    })

    $('.form__tel input').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });
})