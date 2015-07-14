/*================================================================
Directive = editcollege
==================================================================*/
/*global app,$*/
app.directive('editcollege', ['$rootScope', function($rootScope) {
    'use strict';

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            console.log(element);
            
            (function() {
                $("#accordion").accordion({
                    collapsible: true,
                    heightStyle: "content",
                    autoHeight: false,
                    navigation: false,
                    beforeActivate: function( event, ui ) {
                    	debugger;
                    }
                });
            })();

            console.log('Directive === edit_college');
            $(function() {
                $("#tabs").tabs();
            });
        }


    };

}]);


/*-----  End of Directive = editcollege  ------*/
