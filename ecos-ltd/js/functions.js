$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')


	// Мини всплывающие окна
	$('.mini_modal_link').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
		} else {
			$('.mini_modal_link').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'pointer')
			}
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_link').removeClass('active')

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
		}
	})


	// Моб. меню
	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		$('header .bottom').addClass('show')

		$('.overlay').fadeIn()

		$('.close_header').fadeIn()

		$('body').addClass('lock')
    })

    $('body').on('click', '.close_header, .overlay', function(e) {
    	e.preventDefault()

    	$('header .bottom').removeClass('show')

		$('.overlay').fadeOut()

		$('.close_header').fadeOut()

		$('body').removeClass('lock')
	})
})

// Вспомогательные функции
function setHeight(className){
    let maxheight = 0
    let object = $(className)

    object.each(function() {
    	let elHeight = $(this).innerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    object.innerHeight( maxheight )
}


function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}