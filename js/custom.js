jQuery(function($) {
	// validate signup form on keyup and submit
	$("#jobprogrssCustomerSignupForm").validate({
		rules: {
			first_name: "required",
			last_name: "required",
			email:{
				email: true
			},
		},
		messages: {
			first_name: "Please enter the first name.",
			last_name: "Please enter the last name.",
		},
	});

	// default customer type 1 selected first type is commercial
	$("input:checkbox[class='jobprogress-customer-type1']").prop("checked", true);
	$(this).prop("checked", true);
	
	$(".jobprogress-customer-type").on('change',function(){
		var all_customer_types = "input:checkbox[class='jobprogress-customer-type']";
		if($(this).attr('name') === 'jobprogress_customer_type2') {
			$('.jobprogress-residential-type').hide();
			$('.jobprogress-commercial-type').show();
		} else {
			$('.jobprogress-commercial-type').hide();
			$('.jobprogress-residential-type').show();
		}
		$(all_customer_types).prop("checked", false);
		$(this).prop("checked", true);
	});

});