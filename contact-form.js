$(document).ready(function(){$("#submit").click(function(){var e=$("input[name=name]");var t=$("input[name=email]");var n=$("input[name=website]");var r=$("textarea[name=comment]");if(e.val()==""){e.addClass("hightlight");return false}else e.removeClass("hightlight");if(t.val()==""){t.addClass("hightlight");return false}else t.removeClass("hightlight");if(r.val()==""){r.addClass("hightlight");return false}else r.removeClass("hightlight");var i="name="+e.val()+"&email="+t.val()+"&website="+n.val()+"&comment="+encodeURIComponent(r.val());$(".text").attr("disabled","true");$(".loading").show();$.ajax({url:"process.php",type:"GET",data:i,cache:false,success:function(e){if(e==1){$(".form").fadeOut("slow");$(".done").fadeIn("slow");$("input[name=name]").val("");$("input[name=email]").val("");$("input[name=website]").val("");$("textarea[name=comment]").val("")}else alert("Sorry, unexpected error. Please try again later.")}});return false})})