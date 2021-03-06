/*!
 * Global javascript functions for the website: api.leipzig.de
 * http://api.leipzig.de
 *
 * Copyright 2011, Thomas Apfelbacher
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * 
 *
 * Date: 13 Jan 11 10:00:00 2011 -0100
 */
 
/* jQueryTools tabs with slideshow*/
$(document).ready(function () {

  	// check if the slider exists. if ist true init the slideshow
  	if ($("#Slider").length){
   			$("#Rotator").scrollable({ items: '.panes',mousewheel: true, speed:600,circular: true }).autoscroll({ autopause: true, interval: 15000, autoplay: true }).navigator({navi:'ul.scrollerlinks', naviItem: 'a'}); // get handle to the scrollable api
		
		/*
   		Alte Komponente mit Tabs jetzt aber scroller
   		 $(".slidertabs").tabs(".panes > div", {
			// enable "cross-fading" effect
			effect: 'slide',
			event: 'click',
			// start from the beginning after the last tab
			rotate: true
		// use the slideshow plugin. It accepts its own configuration
		}).slideshow({
			// start the slideshow
			autoplay: true,
			interval: 9000
		});
		
		*/
		}
	
	$( ".accordion" ).accordion({ collapsible: true, active: false, autoHeight: false  });
    $( ".date" ).datepicker({ dateFormat: 'yy-mm-dd' });
    $( ".time" ).timepicker({hourText: 'Stunde', amPmText: ['', '']});		
	
  	// after a check if there exists a form on the actual page -> html5form and h5validate
  	// html5form: make incompatible browser ready for HTML5 forms and show replace-fields on all non-webkit-browsers
  	//http://www.matiasmancini.com.ar/ajax-jquery-validation-html5-form.html	
  	if ($("form").length){
    	 /*
    	 $('.api-form').html5form({
            allBrowsers : true,
            colorOn :'#292929',
            colorOff :'#999'
        });
        */
	//validate the form and show additional infos on required input-fields
	//http://ericleads.com/h5validate/
 	$('.api-form').h5Validate({
			errorClass:'inputerror'
		});  
  	}
  	//
  	
  	
  	/* deprecated -> durch html5form plugin ersetzt
  	/* Placeholderfunktion der HTML5-Formulare funktionieren nur in Webkit-Browsern - js Workaround für alle Browser
  	$('[placeholder]').focus(function() {
  		var input = $(this);
  		if (input.val() == input.attr('placeholder')) {
    		input.val('');
    		input.removeClass('placeholder');
  			}
	}).blur(function() {
  		var input = $(this);
  		if (input.val() == '' || input.val() == input.attr('placeholder')) {
    		input.addClass('placeholder');
    		input.val(input.attr('placeholder'));
  			}
	}).blur().parents('form').submit(function() {
  		$(this).find('[placeholder]').each(function() {
    		var input = $(this);
    		if (input.val() == input.attr('placeholder')) {
      		input.val('');
    		}
  		})
	});    */

	// check and set parent checkboxes after reload
	$('.panel .parent').attr('checked', false).each(
		function() {
			var classes = $(this).attr('class').split(' ');
			var flag = true;
			$(this).parents('table:eq(0)').find('.child').filter('.' + classes[1]).each(
				function() {
					if (this.checked == false)
					flag = false;
				}
			);
			$(this).filter('.' + classes[1]).attr('checked', flag);
		}
	);
	
	// check all function in panel
	$('.panel .parent').click(
		function() {
			var classes = $(this).attr('class').split(' ');
			$(this).parents('table:eq(0)').find('.child').filter('.' + classes[1]).attr('checked', this.checked);
		}
	);
	//clicking the last unchecked or checked checkbox should check or uncheck the parent checkbox
	$('.panel .child').click(
		function() {
			var classes = $(this).attr('class').split(' ');
			if ($(this).parents('table:eq(0)').find('.parent').filter('.' + classes[1]).attr('checked') == true && this.checked == false)
				$(this).parents('table:eq(0)').find('.parent').filter('.' + classes[1]).attr('checked', false);
			if (this.checked == true) {
				var flag = true;
				$(this).parents('table:eq(0)').find('.child').filter('.' + classes[1]).each(
					function() {
						if (this.checked == false)
						flag = false;
					}
				);
				$(this).parents('table:eq(0)').find('.parent').filter('.' + classes[1]).attr('checked', flag);
			}
		}
	);
});