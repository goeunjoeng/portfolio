$(".sub_box_bg").hide();
$(".img1 img, .img2 img").click(function(){
	$(".sub_box_bg").stop().show();
	console.log("클릭");

	var imgSrc = $(this).attr("src");

	$(".sub_list img").attr({src:imgSrc});

});
$(".close_btn").click(function(){
	$(".sub_box_bg").stop().hide();	
});

$(".txt_box").hide();
$(".con_item").on("mouseenter",function(){
	$(this).find(".txt_box").stop().fadeIn(600);
});
$(".con_item").on("mouseleave",function(){
	$(this).find(".txt_box").stop().fadeOut(400);
});