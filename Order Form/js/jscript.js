function todaytxt(){
				var today = new Date();
				return today.getMonth()+1+"/"+today.getDate()+"/"+today.getFullYear();
			}


			function startform(){
				document.order.formdate.value=todaytxt();
				document.order.product.focus();
			}

			function dollars(n){
				n=eval(n);
				n=Math.round(n*100)/100;
				return (n == Math.round(n)) ? n+=".00" : (n*10 == Math.round(n*10)) ? n+="0" : n;
			}

			function total_price(){
				s1=eval(document.order.sub1.value);
				s2=eval(document.order.sub2.value);
				s3=eval(document.order.sub3.value);
				document.order.total.value=dollars(s1+s2+s3);
			}

			function order_price(){
				item_index=document.order.product.selectedIndex;
				item_value=document.order.product.options[item_index].value;
				qty_ordered=document.order.qty.selectedIndex;
				document.order.sub1.value=dollars(item_value*qty_ordered);
				document.order.sub2.value=dollars(item_value*qty_ordered*0.06);
				total_price();
			}

			function shipping_price(field){
				document.order.sub3.value=dollars(field.value);
				total_price();
			}


			function showForm(){
				document.getElementById("pup-up-order").style.display="block";

			}

			function hideform(){
				document.getElementById("pup-up-order").style.display="none";	
			}

			function checkform() {
				product_ok=true;
				if (document.order.sub1.value == "0.00") product_ok=false;
				if (document.order.sub2.value == "0.00") product_ok=false;
				if (document.order.sub3.value == "0.00") product_ok=false;

				shipping_ok=true;
				if (document.order.sname.value == "") shipping_ok=false;
				if (document.order.sstreet.value == "") shipping_ok=false;
				if (document.order.scity.value == "") shipping_ok=false;
				if (document.order.szip.value == "") shipping_ok=false;



					billing_ok=true;
				if (document.order.bname.value == "") billing_ok=false;
				if (document.order.bstreet.value == "") billing_ok=false;
				if (document.order.bcity.value == "") billing_ok=false;
				if (document.order.bzip.value == "") billing_ok=false;


				credit_ok=true;
				if(document.order.cname.value == "") credit_ok = false;
				if(document.order.cnumber.value == "") credit_ok = false;
				cardchecked = false;

				for(i=0; i<=5; i++){
					if(document.order.cname.checked){
						cardchecked= true;
					}
				}

				if(cardchecked ==  false) credit_ok=false;

				payment_ok = (credit_ok || billing_ok);

				form_ok = (product_ok && shipping_ok && payment_ok);



				if (form_ok) {
					alert("Your order has been submitted");
				} else {
					if (product_ok==false ) alert("Select a product, quantity, and shipping method!");
					if (shipping_ok==false) alert("Enter shipping address!");

					if (payment_ok==false) alert("Enter billing address or credit card!");

				}

				return form_ok;
			} 

			function copy_shipping() {
				if (document.order.billcb.checked) {
					document.order.bname.value=document.order.sname.value;
					document.order.bstreet.value=document.order.sstreet.value;
					document.order.bcity.value=document.order.scity.value;
					document.order.bstate.selectedIndex=document.order.sstate.selectedIndex;
					document.order.bzip.value=document.order.szip.value;
				}
			}
