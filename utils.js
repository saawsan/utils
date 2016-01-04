/* jshint strict: true */
/* global jQuery: false, $: false */

var UTILS = UTILS || {};
(function ($) {
	'use strict';
	/*todo Cookies*/


	/**
	 * Vertical align an absolute positionned element inside an relative positionned element
	 * by adding a negative margin-top that equals half the element itself
	 *
	 * @method     verticalAlignElements
	 * @param      {jQuery Object}  $elmToAlign  element to position
	 */
	UTILS.verticalAlignElements = function($elmToAlign) {
		$elmToAlign = $elmToAlign || $('.js-vertical-align-large, .js-vertical-align');

		$elmToAlign.each(function(){
			var $this = $(this);
			var nOffset = ($this.outerHeight())/2;

			// var sCurrentBreakpoint = MB.getBreakpoint();
			// var bInScope = false;

			/* test scope */
			// if($this.hasClass('js-vertical-align-large')){
			// 	bInScope = (sCurrentBreakpoint === 'xlarge' ||  sCurrentBreakpoint === 'large' ||  sCurrentBreakpoint === 'smallmedium');
			// }
			// if($this.hasClass('js-vertical-align')){
			// 	bInScope = true;
			// }

			// if(bInScope) {
				$this.css('margin-top', '-'+nOffset+'px');
			// } else {
			// 	$this.css('margin-top', '');
			// }
		});
	};
	
	/**
	 * Set focus to the targeted element when user clicks on a bypass link.
	 * tabindex=-1 allows any dom element to be focused via javascript
	 * (Accessibility)
	 *
	 * @method     bypassFocus
	 */
	UTILS.bypassFocus = function(){
		$("#bypass a").on('click', function(e){
			var sSkipTo = "#"+this.href.split('#')[1];
			$(sSkipTo).attr('tabindex', -1).on('blur focusout', function () {
				$(this).removeAttr('tabindex');
			}).focus();
		});
	};

	/**
	 * If current hash matches an #id in the page, scroll to display it
	 *
	 * @method     handleHash
	 */
	UTILS.handleHash = function(){
		if(window.location.hash === '') {
			return;
		}
		var sTargetId = window.location.hash.replace('#','').replace('anchor-','');
		var $targetElm = $('#'+sTargetId);
		var nOffset = 0; 

		switch(MB.getBreakpoint()) {
			case 'small':
			case 'smallmedium':
				nOffset = 85; 
				break;
			default:
				nOffset = 0;
		}

		if($targetElm.length) {
			$('html, body').animate({
				scrollTop:$targetElm.offset().top - nOffset
			}, 500);
		}
	};

	/**
	 * Convert a preformatted string to object 
	 * Example : sData = "type=clic;cat=action;name=Activite::Filtres::Prix::5_10euros"
	 *
	 * @method     getTagObject
	 * @param      {string}  sData       data to convert
	 * @param      {string}  separator   separator character, default: ";"
	 * @param      {string}  assignchar  assign character, default: "="
	 * @return     {object}  result of the conversion
	 */
	UTILS.getTagObject = function(sData, separator, assignchar){
		separator = separator || ';';
		assignchar = assignchar || '=';

		var oData = {};
		var tData = sData.split(separator);

		for(var i=0; i<tData.length; i++){
			var tProperty = tData[i].split(assignchar);
			oData[tProperty[0]] = tProperty[1];
		}
		return oData;
	};

	/**
	 * Handle sticky nav: Add class .is-sticky when scrollTop is higher than 300px.
	 *
	 * @method     handleSticky
	 */
	UTILS.handleSticky = function() {
		//Handle Sticky nav for small/medium (large handled with nav.js)
		var $sticky = $('.sticky');
		var $stickyWrapper = $sticky.parent();
		//Set parent Height to avoid gap.
		$stickyWrapper.css('height', $sticky.outerHeight());
		var nStickyNavTop = $sticky.offset().top;
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300){
				$sticky.addClass('is-sticky');
			} else{
				$sticky.removeClass('is-sticky');
			}
		});
	};


})(jQuery);