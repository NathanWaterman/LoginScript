// password protection script

$(document).ready(function(){
	submitLogin();
});


/********************LOGIN FUNCTION*************************/
function submitLogin(){
	$("#submit").click(function(event){
			event.preventDefault();
			var checkUser = $('#user').val();
			var checkPass = $('#pass').val();
			//alert(checkUser);
			//alert(checkPass);
	
		$.ajax({
				type: "GET",
				url:"site/login/login.html",
				dataType:"text",
				success:function(data){
			//data.split('\n')[0]);
			var txtInfoA = data.split('\n')[0];
			var txtInfoB = data.split('\n')[1];
			var txtInfoC = data.split('\n')[2];
	
			alert(txtInfoA);
			alert(txtInfoB);
	
				if(checkUser === txtInfoA && checkPass === txtInfoB){
					alert("success");
					$('.view-site-btn,.main-content-site,.rewards-site,.restricted-site').css("opacity","1");
					$('.view-site-btn').attr('target','_blank').attr( 'href', 'https://dl.dropboxusercontent.com/u/105155522/site/login/' + 	txtInfoC);
					$('.restricted-site').attr('target','_blank').attr( 'href', 'https://dl.dropboxusercontent.com/u/105155522/site/login/' + txtInfoC);
					$("#user").css("border","inset 2px");
					$("#pass").css("border","inset 2px");
				
				}
					if(checkUser != txtInfoA){
						$("#user").css("border","red inset 2px");
						//alert("try again");
					}//if
					if(checkPass != txtInfoB){
						$("#pass").css("border","red inset 2px");
						//alert("try again");
					}//if
			
				}//if
			});//ajax
	});//submit click function
}//submitLogin function
