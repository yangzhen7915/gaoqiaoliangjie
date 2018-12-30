$(function(){


	$.ajax({
		url:'/employee/checkRootLogin',
		type:'get',
		success:function(result){

			if(result.error && result.error == 400){

				location.href = "login.html";

			}

		}
	})


	// 登出
	$('#loginOut').on('click',function(){

		$.ajax({
			type:'get',
			url:'/employee/employeeLogout',
			success:function(result){
				console.log(result)
				if(result.success){
					location.href = "login.html";
				}else{
					alert('登出失败');
				}
			}
		})

	});

	//菜单
/*导航菜单*/
$('.navbar-brand').on('click',function(){
    $('.left').toggle();
    $('.right').toggleClass('menu');
});


	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});