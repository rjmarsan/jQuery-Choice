(function( $ ){

  $.fn.choice = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'selected'   : function(element, id, total) {},
      'unselected' : function(element, id, total) {},
      'max': -1,
    }, options);

    var selected = [];
    return this.each(function() {        
      console.log("Each"+this);
	$(this).click(function() {
	  if (selected.indexOf(this) >= 0) {
	    console.log("Already selected - unselecting");
	    selected.splice(selected.indexOf(this),1);
	    settings['unselected'](this, selected);
	  } else {
	    console.log("Not selected yet! "+selected);
	    if (selected.length < settings['max']) {
	      selected.push(this);
	      settings['selected'](this, selected);
	    }
	  }
	});
    });

  };
})( jQuery );

