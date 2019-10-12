$( document ).ready(function() {
    $('.glx-teaser').remove();
    $('.divCloseBut').remove();
    $('.ads-position').remove();
    $('#divMyVideo').siblings().remove();
    $('#divDownload').remove();
    $('#ad-container').remove();
    $('*[id^="adsIfrme"]').each(function() {
        if($(this).prop('id') != 'adsIfrme') $(this).remove();
    });
    $('*[id^="divAds"]').remove();
    $('body').children().last().remove();
    $('iframe').remove();
});