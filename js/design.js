$(".con_item").click(function(){
	$(".sub_box_bg").stop().show();

	var imgSrc = $(this).find("img").attr("src");
	var imgTitle =  $(this).find(".title_p").text();
	var imgTxt = $(this).find(".txt").text();
	//.text(); 메서드를 붙이지 않으면 원래 가지고있던 html문서가 옮겨지는 오류가 생긴다.

	$(".sub_list img").attr({src:imgSrc});
	$(".sub_title").text(imgTitle);
	$(".sub_txt").html(imgTxt);

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



