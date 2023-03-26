$(document).ready(function() {
    const repoUrl = 'https://api.github.com/repos/PeiwenDu/PeiwenDu.github.io/contents/assets/img/';
    $.getJSON(repoUrl, function(data) {
        $.each(data, function(i, item) {
            if (item.type === 'file' && item.name.match(/\.(jpe?g|png|gif)$/)) {
                const imageUrl = item.download_url;
                var img;
                console.log(i);
                if (i == 0) {
                    img = $('<img>').attr('src', imageUrl).attr('id', 'slideimg' + i).addClass('slide').addClass('showMe');
                } else {
                    img = $('<img>').attr('src', imageUrl).attr('id', 'slideimg' + i).addClass('slide');
                }
                $('.containerSlider').append(img);
            }
        });
    });
});