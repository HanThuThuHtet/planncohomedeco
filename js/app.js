console.log(`hey`);

$(document).ready(function(){


	//Start Bcaktptop
	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 370){
			$(".btn-backtotops").fadeIn(1000);
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}
	});
	//End Baacktotop

	// console.log(`ji`);

	// Start Header
		// Start nav
		
			//for burger
			$(".navbuttons").click(function(){
				$(".navbuttons").toggleClass("crossxs");
			});

			//for nav
			$(window).scroll(function(){

				let getscrolltop = $(this).scrollTop();
				//console.log(getscrolltop);

				if(getscrolltop >= 200){
					$(".navbar").addClass("navmenus");
				}
				else{
					$(".navbar").removeClass("navmenus");
				}

				// console.log(`hye`);
			});



			



		// End nav
	// End Header


	//Start Properities
	$(".propertylists").click(function(){

		


		//for active item
		// $(this).addClass("activeitems").siblings().removeClass("activeitems");

		$(this).addClass("activeitems");
		$(this).siblings().removeClass("activeitems");
	});



		//for filter

		$(".propertylists").click(function (){

		let getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue);

		// let getattvalue = $(e.target).attr("data-filter");

		if(getattvalue === "all"){
			$(".filters").show("explode",1000);

		}
		else{

			$(".filters").hide(); //this is fire

			$(".filters").not("."+getattvalue).hide("slide",500); //change string to class

			// let notclass =$(".filters").not("."+getattvalue);
			// notclass.hide();

			$(".filters").filter("."+getattvalue).show("slide",1000);

			// $(".filters").not("."+getattvalue).remove("explode",1000);
			


		}


	});



	// for img overlay or lightbox2 
	lightbox.option({
		showImageNumberLabel:false,
	});


	


//End Properities


//Start Ads
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();

		console.log(getscrolltop);

		if(getscrolltop >= 900){

			$(".adshomes").addClass("fromlefts");
			$(".adstitles").addClass("fromrights");
		}else{

			$(".adshomes").removeClass("fromlefts");
			$(".adstitles").removeClass("fromrights");
		}
	});
//End Ads

//Start Footer
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);

//End Footer

});


