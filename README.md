# jQuery Choice

This is a simple plugin to facilitate the selection of a certain number of elements from a group. The syntax is simple and easy to use, and hopefully will avoid unnecessary work on someone's part.

# How to use

```javascript
$(".choice-elements").choice({
    //called when an element is selected
    //element: html element, index: selected index, starting at 0
    selected:      function(element, index, list) {},

    //called when an element is unselected
    //element: html element, index: selected index, starting at 0
    unselected:    function(element, index, list) {},
        
    //the maximum number of elements to be selected
    max:           3,
        
    //called when the maximum number of elements have been selected
    allselected:   function() {},

    //called when no more elements are selected
    cleared:       function() {}
});
```

