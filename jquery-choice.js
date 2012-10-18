(function( $ ){

  $.fn.choice = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'selected'   : function(element, selected, index) {},
      'unselected' : function(element, selected, index) {},
      'max': -1,
    }, options);

    var placeInList = function(list, item) {
      for (var x=0; x<list.length; x++) {
	if (list[x] == 0) {
	  list[x] = item;
	  return x;
	}
      }
      //we couldn't fit it anywhere.
      return -1;
    };

    var removeFromList = function(list, item) {
      var index = list.indexOf(item);
      list[index] = 0;
      return index;
    };

    var selected = [];
    return this.each(function() {        
      console.log("Each"+this);
	$(this).click(function() {
	  if (selected.indexOf(this) >= 0) {

	    console.log("Already selected - unselecting");
	    var index = removeFromList(selected,this);
	    settings['unselected'](this, selected, index);

	  } else {

	    console.log("Not selected yet! "+selected);
	    var index = placeInList(selected,this);
	    if (index >= 0) {
	      settings['selected'](this, selected,index);
	    } else if (selected.length < settings['max']) {
	      selected.push(this);
	      settings['selected'](this, selected, selected.length-1);
	    }

	  }
	  console.log("List: "+selected);
	});
    });

  };
})( jQuery );

