jQuery(document).ready($ => {
  let $table = $('table'),
    $header = $('#header'),
    $thead = $('thead');
  $thead.find('th').each(function() {
    const $newdiv = $('<div />', {
      style: `width:${$(this).width()}px`,
    });
    $newdiv.text($(this).text());
    $header.append($newdiv);
  });

  const $viewport = $(window);

  $viewport.scroll(function() {
    $header.css({
      left: -$(this).scrollLeft(),
    });
  });
});
