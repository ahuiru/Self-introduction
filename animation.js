


//・最初のローディング
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#809aeb',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#fff',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#809aeb',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});


//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});





//・creationとtechのしたから出てくる動き
function delayScrollAnime() {
	var time = 0.25;//遅延時間を増やす秒数の値
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得

		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {

				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック

					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる

					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述








// ・nameのランダム表示
var Obj = {
	loop: false,
	minDisplayTime: 2000,// アニメーションの間隔時間
	initialDelay: 900, // アニメーション開始までの遅延時間
	autoStart: true,
	in: {
		effect: 'fadeInUp',//animate.css の中にある採用したい動きのクラス名
		delayScale: 1,// 遅延時間の指数
		delay: 100,// 文字ごとの遅延時間
		sync: false,// アニメーションをすべての文字に同時適用するかどうか
		shuffle: true,// 文字表示がランダムな順に表示されるかどうか
	},
	out: {// 終了時のアニメーション設定をしたい場合はここに追記
	}
}
var element
//初期設定
function RandomInit() {
	element= $(".randomAnime");
	$(element[0]).textillate(Obj);
}

function RandomAnimeControl() {
		var elemPos = $(element[1]).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
			$(element[1]).textillate(Obj);
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	RandomAnimeControl();/*アニメーション用の関数を呼ぶ*/
});//ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	RandomInit(); /*初期設定を読み込み*/
	RandomAnimeControl();/*アニメーション用の関数を呼ぶ*/
});//ここまで画面が読み込まれたらすぐに動かしたい場合の記述







// 動きのきっかけとなるアニメーションの名前を定義
// function fadeAnime(){

//   //ふわっと動くきっかけのクラス名と動きのクラス名の設定
//   $('.fadeInUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
//   　　var elemPos = $(this).offset().top-50; //要素より、50px上の
//   　　var scroll = $(window).scrollTop();
//   　　var windowHeight = $(window).height();
//   　　if (scroll >= elemPos - windowHeight){
//   　　$(this).addClass('fadeIn');
//   　　// 画面内に入ったらfadeInというクラス名を追記
//   　　}else{
//   　　　$(this).removeClass('fadeIn');
//   　　// 画面外に出たらfadeInというクラス名を外す
//   　　}
//   　　});

//   //関数でまとめることでこの後に違う動きを追加することが出来ます
//   $('.fadeInDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
//   　　var elemPos = $(this).offset().top-50; //要素より、50px上の
//   　　var scroll = $(window).scrollTop();
//   　　var windowHeight = $(window).height();
//   　　if (scroll >= elemPos - windowHeight){
//   　　$(this).addClass('fadeDown');
//   　　// 画面内に入ったらfadeDownというクラス名を追記
//   　　}else{
//   　　　$(this).removeClass('fadeDown');
//   　　// 画面外に出たらfadeDownというクラス名を外す
//   　　}
//   　　});


//   }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

//   // 画面をスクロールをしたら動かしたい場合の記述
//     $(window).scroll(function (){
//       fadeAnime();/* アニメーション用の関数を呼ぶ*/
//     });// ここまで画面をスクロールをしたら動かしたい場合の記述




$(document).ready(function(){
  　$("p.question").on("click", function() {
  　　$(this).next().slideToggle(200);
  　});
  });


$(function() {
  // ・ナビゲーション
  $('body').hide().fadeIn(1500);
  $('.openbtn').hide().show(2000);
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
      $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
  });




  // 背景の幾何学
  particlesJS("particles-js", {"particles":{"number":{"value":57,"density":{"enable":true,"value_area":1122.388442605866}},"color":{"value":"#1f60be"},"shape":{"type":"circle","stroke":{"width":2,"color":"#4169e1"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5371430403899501,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#4169e1","opacity":0.5371430403899501,"width":0.9620472365193136},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":353.2535873510851,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;


});
