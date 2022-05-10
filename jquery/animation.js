$(function() {
  // ・ナビゲーション
  $('.openbtn').hide().show(2000);
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
      $("#g-nav").toggleClass('panelactive');
      $(".circle-bg").toggleClass('circleactive');
  });

  $("#g-nav a").click(function () {
      $(".openbtn").removeClass('active');
      $("#g-nav").removeClass('panelactive');
      $(".circle-bg").removeClass('circleactive');
  });

  // 背景の幾何学
  particlesJS("particles-js", {"particles":{"number":{"value":57,"density":{"enable":true,"value_area":1122.388442605866}},"color":{"value":"#1f60be"},"shape":{"type":"circle","stroke":{"width":2,"color":"#4169e1"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5371430403899501,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#4169e1","opacity":0.5371430403899501,"width":0.9620472365193136},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":353.2535873510851,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

});


// aboutとcreationsとcontactの右からのスライド
function fadeAnime(){
  $('.fadeRightTrigger').each(function(){
    var elemPos = $(this).offset().top-20;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function (){
  fadeAnime();
});



//・最初のローディング
var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 1000,
  color: '#809aeb',
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#809aeb',
    },
    autoStyleContainer: false
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

//アニメーション
bar.animate(1.0, function () {
  $("#splash").delay(500).fadeOut(800);
});



//・creationとtechの下から出てくる動き
function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//スクロールが入ったら+親要素にクラスplayがなければ
			$(childs).each(function () {

				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうか

					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;

					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		} else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
    }
	})
}

$(window).scroll(function (){
  delayScrollAnime();
});



// creationsの画像ポップアップ
const modal = $('.modal-container');
const img = modal.find('img');

$('img.popup').each(function(index) {
  $(this).click(function() {
    img.attr('src', $(this).attr('src'));
    modal.show();
  })
});

modal.click(function() {
  $(this).hide();
});



// ・nameのランダム表示
var Obj = {
	loop: false,
	minDisplayTime: 2000,
	initialDelay: 900,
	autoStart: true,
	in: {
		effect: 'fadeInUp',
		delayScale: 1,
		delay: 100,
		sync: false,
		shuffle: true,
	},
}
var element
//初期設定
function RandomInit() {
	element= $(".randomAnime");
	$(element[0]).textillate(Obj);
}

$(window).on('load', function () {
	RandomInit(); /*初期設定を読み込み*/
});



// question
$(document).ready(function(){
  $("p.question").on("click", function() {
    $(this).next().slideToggle(200);
  });
});
