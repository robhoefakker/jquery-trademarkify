# jquery-trademarkify

This module let's you put registred trademark symbols in superscript or subscript automatically. 

## How to use
Make sure you are using jQuery.
Then import the jquery-trademarkify.min.js:
````javascript
<script src="jquery-trademarkify.min.js"></script>
````
Then call the script on a dom element. You can set the desired icon and super/sub script.
````javascript
<script>
    jQuery('body').trademarkify({
        icon: "®",
        script: "sup"
    });
</script>
````
