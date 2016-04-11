$(function(){

  	$(window).on('scroll resize',function(){
  		show_fixed_menu();
  		toggle_fixed_expanded_menu();
  	});
	show_fixed_menu();

	// show 固定菜单的时机:
	function show_fixed_menu(){
		if( $('.home-header ul.menu').css('display') != 'none' ){
			var top = $('.home-header ul.menu').offset().top;
			var height = $('.home-header ul.menu').height();
			if( $(document).scrollTop() > ( top + height ) ){
				$('.fixed-menu').slideDown(300);
			}else{
				$('.fixed-menu').fadeOut(300);
			}
		}else{
			$('.fixed-menu').css('display','block');
		}
	}

	// 右侧划出展开的菜单  点击触发：
	$('.fixed-menu ul.menu-icon').click(function(){
		$('.fixed-expanded-menu').toggleClass('fixed-expanded-menu-toggle');
	});
	// 页面缩放触发：
	toggle_fixed_expanded_menu();
	function toggle_fixed_expanded_menu(){
		if( $('.fixed-menu ul.menu-icon').css('display') != 'block' ){
			$('.fixed-expanded-menu').removeClass('fixed-expanded-menu-toggle');
		}
	}

	// dl dt点击事件  自制手风琴
	$('.about-section .col-left dl dt').click(function(){
		$(this).find('i').toggleClass('i-active');
		var this_dd = $(this).parent().find('dd');
		var all_dd = $(this).parent().parent().find('dl dd');
		all_dd.each(function(){
			if( $(this).html() == this_dd.html() ){
				$(this).slideToggle(300);
			}else{
				$(this).slideUp(300);
				$(this).parent().find('dt i').removeClass('i-active');
			}
		});
	});

	// 点击GIVE 或 CONNECT 滚动条scroll到相应位置
	$('.give-link , .connect-link').click(function(){
		$("html,body").animate({scrollTop: $('.footer').offset().top},700);
	});











































































});