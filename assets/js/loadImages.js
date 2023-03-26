$(document).ready(function() {
    const repoUrl = 'https://api.github.com/repos/PeiwenDu/PeiwenDu.github.io/contents/assets/img/';
    $.getJSON(repoUrl, function(data) {
        $.each(data, function(i, item) {
            if (item.type === 'file' && item.name.match(/\.(jpe?g|png|gif)$/)) {
                const imageUrl = item.download_url;
                const img = $('<img>')
                    .attr({
                        src: imageUrl,
                        id: 'slideimg' + i
                    })
                    .addClass('slide');
                if (i == 0) {
                    img.addClass('showMe');
                }
                $('.containerSlider').append(img);
            }
        });
    });
});