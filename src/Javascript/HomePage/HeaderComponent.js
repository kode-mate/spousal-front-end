import $ from 'jquery'

$(function () {
  $('.tabs').on('click', 'a', function (e) {
    $('.tabs a').removeClass('active')
    $(this).addClass('active')

    let activeWidth = $(this).innerWidth()
    let itemPos = $(this).position()

    $('.selector').css({
      'left': `${itemPos.left + 2}px`,
      'width': `${activeWidth + 30}px`
    })
  })
})
