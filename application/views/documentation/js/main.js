��B�~�+9P
wassets/scss/vendor/bootstrap/mixins/_buttons.scss 100644 100644 0 �#Z�|��mՙ(�Lk�Ǒ���#Z�|��mՙ(�Lk�Ǒ��assets/scss/vendor/bootstrap/mixins/_caret.scss 100644 100644 0 'Fd����c��b\�^]'Fd����c��b\�^]assets/scss/vendor/bootstrap/mixins/_clearfix.scss 100644 100644 0 �w�7=�cT�{����O�w�7=�cT�{����Oassets/scss/vendor/bootstrap/mixins/_deprecate.scss 100644 100644 0 �Ŗ4!;_�I���a�j��Ŗ4!;_�I���a�j�assets/scss/vendor/bootstrap/mixins/_float.scss 100644 100644 0 k7j%�Ȃ��	�N��t�k7j%�Ȃ��	�N��t�assets/scss/vendor/bootstrap/mixins/_forms.scss 100644 100644 0 9�/<�#�� �m��KN+�~�9�/<�#�� �m��KN+�~�assets/scss/vendor/bootstrap/mixins/_gradients.scss 100644 100644 0 ���K~����{�v��P����K~����{�v��P�asse                                                                                                                                                                                                                                                                           ){
		$('a[href=#'+page.attr('id')+']').parent().addClass('active');
		
		page.css({opacity:0 , display:'' , position:'relative' , top:'0px' , left:'0px'});
		CTween.setPos(page,{x:500});
		CTween.animate(page , 500 , {opacity:'1' , x:0} , {ease:'easeOutQuart'});
		
		if(hide_tween && ((hide_tween.$element && hide_tween.$element[0] === page[0]) || (hide_tween[0] === page[0]))){
			hide_tween.stop(true);
		}
		
	};
	
	var hidePage = function(page){
		$('a[href=#'+page.attr('id')+']').parent().removeClass('active');
		page.css({position:'absolute'});
		var to = {opacity:'0' , x : 500};
		hide_tween = CTween.animate(page , 500 , to , {ease:'easeOutQuart', complete:function(){
			page.css('display' , 'none');
		}});
	};
	

	$(window).on('hashchange' , updatePage);
	updatePage();
	
	$(window).on('resize' , onresize);
	
	function onresize(){
		content.height($(window).height() - $('.header').height() - parseInt($('#content').css('padding-top'))*2 - 1);
	}
	onresize();
	
	
	var sidebar = $('#sidebar'),
		side_w	= $('.toc').outerWidth(),
		show	= true,
		togg	= $('.toggle'), 
		base_marg = parseInt(content.css('margin-left'));
		
	togg.on('click',function(){
		togg.toggleClass('out');
		if(show){
			show = false;
			CTween.animate(sidebar , 500 , {left:-side_w+'px'} , {ease:'easeOutQuart'});
			CTween.animate(content , 500 , {marginLeft:base_marg-side_w} , {ease:'easeOutQuart'});
		}else{
			show = true;
			CTween.animate(sidebar , 500 , {left:'0px'} , {ease:'easeOutQuart'});
			CTween.animate(content , 500 , {marginLeft:base_marg} , {ease:'easeOutQuart'});
		}
		
	});
	
});