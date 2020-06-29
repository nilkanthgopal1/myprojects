
$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
	   title:check_fname,
	   html:true,
	   placement:'right'
	});
 // $("#btn").hide();
  $("#firstnameMsg").hide();
  $("#lastnameMsg").hide();
  $("#emailMsg").hide();
  $("#passMsg").hide();
  $("#confPassMsg").hide();
  $("#mobileMsg").hide();


  var error_fname=false;
  var error_lname=false;
  var error_email=false;
  var error_password=false;
  var error_repassword=false;
  var error_mobile=false;

  $("#firstname").focusout(function(){
	check_fname();
	buttonState();
  });

  $("#lastname").focusout(function(){
	check_lname();
	buttonState();
  });

  $("#email").focusout(function(){
	validateEmail();        
	buttonState();
  });
	 
  // use focusout event on password
  $("#pass").focusout(function(){
	validatePassword();
	buttonState();
  });


  $("#confpass").focusout(function(){
	check_retype_password();
	buttonState();
  });

  //use focusout event on mobile

   $("#mobile").focusout(function(){
	validateMobile();
	buttonState();
  });

}); 



function check_fname()
  {
	  var fetch_data='';
	var pattern=/^[a-zA-Z]*$/;
	var fname=$("#firstname").val();
	if(pattern.test(fname) && fname !==''){
	  $("#firstnameMsg").hide();
	  $("#firstname").css("border","3px solid deepskyblue");
	}
	else if(fname === ''){
	   
	  $("#firstnameMsg").html("<p class='text-danger'>Please enter First name</p>");
	  $("#firstnameMsg").show();
	  $("#firstname").css("border","2px solid red");
	  var error_fname=true; 
	  fetch_data="<p class='text-danger'>Please enter First name</p>";
	}
	else{
	  $("#firstnameMsg").html("<p class='text-danger'>Should contain only characters</p>");
	  $("#firstnameMsg").show();
	  $("#firstname").css("border","2px solid red");
	  var error_fname=true;
	  fetch_data="<p class='text-danger'>Should contain only characters</p>";
	}
	return fetch_data;
  }

  function check_lname()
  {
	var pattern=/^[a-zA-Z]*$/;
	var lname=$("#lastname").val();
	if(pattern.test(lname) && lname !==''){
	  $("#lastnameMsg").hide();
	  $("#lastname").css("border","3px solid deepskyblue");
	}

	else if(lname ===''){
	  $("#lastnameMsg").html("<p class='text-danger'>Enter Last name</p>");
	  $("#lastnameMsg").show();
	  $("#lastname").css("border","2px solid red");
	  var error_lname=true;
	}
	else{
	  $("#lastnameMsg").html("<p class='text-danger'>Should contain only characters</p>");
	  $("#lastnameMsg").show();
	  $("#lastname").css("border","2px solid red");
	  var error_lname=true;
	}
  }

function validateEmail(){
  // get value of input email
  var email=$("#email").val();
  // use regular expression
   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if(reg.test(email) && email !== ''){
	$("#emailMsg").hide();
	$("#email").css("border","3px solid deepskyblue");
   }
   else if(email === ''){
	$("#emailMsg").html("<p class='text-danger'>Enter email</p>");
	  $("#emailMsg").show();
	  $("#email").css("border","2px solid red");
	  var error_email=true;
   }
   else{
	$("#emailMsg").html("<p class='text-danger'>Invalid email</p>");
	  $("#emailMsg").show();
	  $("#email").css("border","2px solid red");
	  var error_email=true;
   }

}
function validatePassword(){
  //get input password value
  var pass=$("#pass").val();
  var reg=/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
  //use regular expression
  if(reg.test(pass) && pass !== ''){
	$("#passMsg").hide();
	$("#pass").css("border","3px solid deepskyblue");
  }
  else if(pass === ''){
	  $("#passMsg").html("<p class='text-danger'>Enter Password</p>");
	  $("#passMsg").show();
	  $("#pass").css("border","2px solid red");
	  var error_password=true;

  }
  else{
	$("#passMsg").html("<p class='text-danger'>Should contain atleast 1 Uppercase,1 special charcter and number</p>");
	  $("#passMsg").show();
	  $("#pass").css("border","2px solid red");
	  var error_password=true;
  }

}

function check_retype_password()
  {
	var password=$("#pass").val();
	var  retype_password=$("#confpass").val();
	if(password !== retype_password)
	{
	  $("#confPassMsg").html("<p class='text-danger'>Passwords did not match</p>");
	  $("#confPassMsg").show();
	  $("#confpass").css("border","2px solid red");
	  var error_repassword=true;
	}

	else if(retype_password === ''){
	  $("#confPassMsg").html("<p class='text-danger'>Enter password</p>");
	  $("#confPassMsg").show();
	  $("#confpass").css("border","2px solid red");
	  var error_repassword=true;
	}
	else{
	  $("#confPassMsg").hide();
	  $("#confpass").css("border","3px solid deepskyblue");
	}
  }

function validateMobile(){
	 // get value of mobile input
	 var mobile=$("#mobile").val();
  //use regular expression
  var reg=/^(0|[+91]{3})?[7-9][0-9]{9}$/;

  if(reg.test(mobile) && mobile !== '')
  {
	$("#mobileMsg").hide();
	$("#mobile").css("border","3px solid deepskyblue");
  }
  else if(mobile === '')
  {
	$("#mobileMsg").html("<p class='text-danger'>Enter mobile</p>");
	  $("#mobileMsg").show();
	  $("#mobile").css("border","2px solid red");
	  var error_mobile=true;
  }
  else{
	$("#mobileMsg").html("<p class='text-danger'>Invalid mobile</p>");
	  $("#mobileMsg").show();
	  $("#mobile").css("border","2px solid red");
	  var error_mobile=true;
  }
}
function buttonState(){
  $("input[type=submit]").attr("disabled", "disabled");
  $('input').change(function(){
	  //Validate your form here, example:
	  var validated = false;
	  if(validateEmail() && validatePassword()) validated = true;

	  //If form is validated enable form
	  if(validated) $("input[type=submit]").removeAttr("disabled");                             
});

  // if(validateEmail() && validatePassword()){
  //   // if the both email and password are validate
  //   // then button should show visible
  //   $("#btn").removeAttr('disabled');
  // }else{
  //   // if both email and pasword are not validated
  //   // button state should hidden
  //   //$("#btn").attr('disabled',true);
  // }


  /*function for Country,State,City */
  
  function getCountries()
{
	var req= new XMLHttpRequest();
	req.open("GET", "getCountries", true);
	req.send();
	req.onreadystatechange=function() 
	{
		
		if (req.readyState==4 && req.status==200)
		{
			var obj = JSON.parse(req.responseText);
			var country= document.getElementById("country");
			for(var i=0; i<obj.length; i++)
				{
				var op=document.createElement("option");
				op.value=obj[i].countryId;
		
				op.text=obj[i].countryName;
				country.add(op);
				
				}
		}
	}
}
function getState()
{
	var req= new XMLHttpRequest();
	var cid= document.getElementById("country").value;
	alert(cid);
	req.open("GET", "getStates", true);
	req.send();
	req.onreadystatechange=function() 
	{
		
		if (req.readyState==4 && req.status==200)
		{
			var obj = JSON.parse(req.responseText);
			var state= document.getElementById("state");
			for(var i=0; i<obj.length; i++)
				{
				var op=document.createElement("option");
				op.value=obj[i].stateId;
		
				op.text=obj[i].stateName;
				state.add(op);
				}
		}
	} 
}
function getCity()
{
	var req= new XMLHttpRequest();
	var cityid= document.getElementById("state").value;
	alert(cityid);
	req.open("GET", "getCities?id="+cityid, true);
	req.send();
	req.onreadystatechange=function() 
	{
		
		if (req.readyState==4 && req.status==200)
		{
			var obj = JSON.parse(req.responseText);
			var state= document.getElementById("cities");
			for(var i=0; i<obj.length; i++)
				{
				var op=document.createElement("option");
				op.value=obj[i].cityId;
		
				op.text=obj[i].cityName;
				state.add(op);
				
				}
		}
	}
}
 

}
