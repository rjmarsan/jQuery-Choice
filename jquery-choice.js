(function( $ ){

  $.fn.choice = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'selected'   : function(element, index, selected) {},
      'unselected' : function(element, index, selected) {},
      'max'        : 10000,
      'allselected': function() {},
      'cleared'    : function() {},
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

    var sizeOfList = function(list) {
      var count = 0;
      for (var x=0; x<list.length; x++) {
	if (list[x] != 0) {
	  count += 1;
	}
      }
      return count;
    }


    var selected = [];
    return this.each(function() {        
      console.log("Each"+this);
	$(this).click(function() {
	  if (selected.indexOf(this) >= 0) {

	    //console.log("Already selected - unselecting");
	    var index = removeFromList(selected,this);
	    settings['unselected'](this, index, selected);
	    if (sizeOfList(selected) == 0) {
	      settings['cleared']();
	    }

	  } else {

	    //console.log("Not selected yet! "+selected);
	    var index = placeInList(selected,this);
	    if (index >= 0) {
	      settings['selected'](this, index, selected);
	      if (sizeOfList(selected) == settings['max'])
		settings['allselected']();
	    } else if (selected.length < settings['max']) {
	      selected.push(this);
	      settings['selected'](this, selected.length-1, selected);
	      if (sizeOfList(selected) == settings['max'])
		settings['allselected']();
	    }

	  }
	  //console.log("List: "+selected);
	});
    });

  };
})( jQuery );

