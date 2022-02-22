
new fullpage('#fullpage', {
	scrollBar: true,
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
});

$(".pdf a").click(function(){
alert("준비중입니다!");
});
//어바웃미(".aboutBtn") 클릭시 나타나는 프로필 aboutModal

const aboutBtn = document.querySelector(".aboutBtn");
const profile = document.querySelector(".aboutModal");
const photo = document.querySelector(".photo");
const closeBtn = document.querySelector(".close_btn");

aboutBtn.addEventListener("click", el => {
	profile.classList.add("on");
	aboutBtn.classList.add("off");

});

closeBtn.addEventListener("click", el => {
	profile.classList.remove("on");
	aboutBtn.classList.remove("off");
})

photo.addEventListener("mouseover", el => {
	photo.classList.add("click");
});

