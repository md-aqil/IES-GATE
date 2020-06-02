


MicroModal.init();

  Splitting(); 

var mySwiper = new Swiper('.swiper-container.hero-banner', {
  speed: 400,
  spaceBetween: 50,
  effect: 'fade',
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination-hero-banner',
    type: 'bullets',
  },
});



(function() {
	$('select').each(function() {
		$(this).hide();
		makeElement($(this));
	});

	function makeElement(select) {
		var
		$div = $('<div />', {class:'ui-select'}).insertAfter(select),
		$nav = $('<span />').click(function() {
			$(this).parent().toggleClass('open');
		}).appendTo($div),
		$el = $('<ul />').appendTo($div);
		select.find('option').map(function(i) {
			
			var li = $('<li />').append($(this).text());
				li.click(onSelect.bind($div, li, $(this).val(), select, $nav));
			if($(this).attr('selected')) {
				li.addClass('selected');
			}
			var delay = i * 100 + 'ms';
			li.css({
				'-webkit-transition-delay': delay,
		        '-moz-transition-delay': delay,
		        '-o-transition-delay': delay,
		        'transition-delay': delay
			});
			$el.append(li);
		});
		var selected = $el.find('li.selected');
			selected = selected.length ? selected.html() : $el.find('li:first-child').addClass('selected').html();
		$nav.html(selected);
		// addAnimateDelay($el);
	}

	function onSelect(li, value, select, $nav) {
		this.removeClass('open');
		li.addClass('selected').siblings().removeClass('selected');
		select.val(value).trigger('change');
		$nav.html(li.html());
	}
})();

$('.click-me').click(function () {
	$('.drop-menu').toggleClass('open');
	
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '3',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	mousewheelControl: false,
	simulateTouch:false,

	// autoplay: {
	//   delay: 3000,
	//   disableOnInteraction: false,
	// },
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });
  

  var galleryThumbss = new Swiper('.gallery-thumbs-search-single', {
	spaceBetween: 15,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
  });
  var galleryTops = new Swiper('.search-single', {
	
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbss
	}
  });
  
  $('.drop').click(function () {
	$(this).toggleClass('open').siblings().removeClass('open');
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

$('.mobile-menu').click(function () {
	$('.navbar-items').toggleClass('open');
})


$('.accordian .accordian-title').click(function() {
	$(this).parent('li').toggleClass('active');
	$(this).parents('li').find('.ac-detail-item').slideToggle();
});



ScrollOut({

  });
  

  var swiper = new Swiper('.swiper-container.swiper-sq', {
	  spaceBetween: 10,
	pagination: {
	  el: '.swiper-pagination.custom',
	  dynamicBullets: false,
	  clickable: true,
	},
  });
  var swiper = new Swiper('.swiper-container.swiper-sq2', {
	spaceBetween: 10,
  pagination: {
	el: '.swiper-pagination.custom',
	dynamicBullets: false,
	clickable: true,
  },
});

 
//   tab

$('.tabgroup > div').hide();

$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
ScrollOut({
	cssProps: {
	  visibleY: true,
	  viewportY: true
	},
	targets: ".scrollable-pane",
  });
  

  $('.c-accr li').click(function () {
	$(this).find('.accr-item').slideToggle().siblings().slideUp();
})


$('.simple-menu .menu-icon').click(function () {
	$(this).parents('.simple-menu').find('.menu-item').slideToggle();
})



$('#news-ticker').marquee({

	// enable the plugin
	enable : true,  //plug-in is enabled

	// scroll direction
	// 'vertical' or 'horizontal'
	direction: 'vertical',

	// children items
	itemSelecter : 'li', 

	// animation delay
	delay: 1000,

	// animation speed
	speed: 1,

	// animation timing
	timing: 1,

	// mouse hover to stop the scroller
	mouse: true

	});  