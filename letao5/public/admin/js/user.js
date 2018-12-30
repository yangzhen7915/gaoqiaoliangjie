$(function(){
	var page=1;
	$.ajax({
		url:'/user/queryUser',
		type:'get',
		data:{
			page:1,
			pageSize:5
		},
		success:function(result){
			console.log(result)
			$('#userBox').html(template('userTpl',{data:result}));

			/* 分页渲染 */
			setPaginator(page,Math.ceil(result.total/result.size));
		}
	});


	$('body').on('click','#deleteBtn',function(){
		var id = $(this).attr('data-id');
		var isDelete = Number($(this).attr('data-isDelete')) ? 0 : 1;
		//alert(isDelete)
		$.ajax({
			url:'/user/updateUser',
			type:'post',
			data:{
				id:id,
				isDelete:isDelete
			},
			success:function(result){
				if(result.success){
					location.reload()
				}else{
					if(result.error){
						alert(result.message);
					}
				}
			}
		})
	});

	/* 分页 */
	var setPaginator = function(pageCurr, pageSum, callback) {
        // $(".pagination") bootstrap是3.0使用 ul , 2.0使用div
        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3,
            size: "small",
            currentPage: pageCurr, //当前页数
            totalPages: pageSum, //总页数 注意不是总条数
            onPageClicked: function(event, originalEvent, type, page) {
				page = page;
				console.log(page); /*重置当前页*/
				callback && callback();
				$.ajax({
						url:'/user/queryUser',
						type:'get',
						data:{
							page:page,
							pageSize:5
						},
						success:function(result){
							console.log(result)
							$('#userBox').html(template('userTpl',{data:result}));
							console.log(page,444888);
							setPaginator(page,Math.ceil(result.total/result.size));
						}
				});
            }
        });
    }
});