jQuery(function ($) {
    var validator = $('#news_action').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {},
        highlight: function (element) {
            $(element).parent().addClass('error')
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('error')
        }
    });
});