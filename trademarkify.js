(function( $ ) {
 
    $.fn.trademarkify = function( options ) {

        var settings = $.extend({
            // Choose icon to transform and if the position is superscript or subscript
            icon: "®",
            script: "sup"
        }, options );

        this.children().each(function () {

            var result = str_replace_all($(this).html(),settings.icon,"<"+settings.script+">"+settings.icon+"</"+settings.script+">");

            $(this).html(result);

        });

        function str_replace_all(htmlInput, stringOriginal, stringReplace){

            try{

                return htmlInput.replace( new RegExp(stringOriginal, "gi"), stringReplace ) ;   

            } catch(exception){
                
                return htmlInput;
            
            }
        }

    }; 
 
}( jQuery ));