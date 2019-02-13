'use strict';
$(function () {
    $.ajax({
        url: './products.json',
        beforeSend: function () {
            $.fancybox.showLoading();
        }
    }).done(function (res) {
        res.forEach(i => {
            $(`#${i.type}`).append(`${_.template($('#productTemplate').html())(i)}`);
        });
        $('#sale').before('<h2 class = "title">Распродажа</h2>');
        $('#promo').before('<h2 class = "title">Промо-акция</h2>');
        $('#recommended').before('<h2 class = "title">Рекомендуемые товары</h2>');
        $.fancybox.hideLoading();
    });
});
