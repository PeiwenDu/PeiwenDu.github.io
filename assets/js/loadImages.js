$(document).ready(function() {
    $.ajax({
        url: 'img/',
        success: function(data) {
            $(data).find('a').attr('href', function(index, value) {
                if (value.match(/\.(jpe?g|png|gif)$/)) {
                    const img = $('<img>').attr('src', 'images/' + value).addClass('slide');
                    $('.containerSlider').append(img);
                }
            });
        }
    });
});