/*
 name:    Badge Plugin for jQuery Mobile v1.1.0
 version: 1.0
 auther:  Yu Ishihara
 url:     http://normo.jp
 */

(function($,window){

	$.widget( 'mobile.badge', $.mobile.widget, {
		options: {
			version: '1.0'
		},
		_create: function() {
			var element = this.element;
			$(element).addClass('ui-badge');
			$(element).append('<span class="ui-badge-'+$(element).attr('data-badge')+'"></span>');
			if($(element).attr('data-badge-only') === undefined || $(element).attr('data-badge-only') === "true") {
				$(element).addClass('ui-badge-only');
			}
		}
	});
	
	$(document).bind("pageinit", function(){
		$(':jqmData(badge)').each(function(i) {
			$(this).badge();
		});
	});

}) (jQuery,this);

