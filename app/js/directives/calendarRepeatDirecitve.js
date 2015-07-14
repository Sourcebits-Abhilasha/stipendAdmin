/*================================================================
Directive = calendarRepeatDirecitve
==================================================================*/
/*global app,$*/
app.directive('myPostRepeatDirective', ['$rootScope', '$compile', function($rootScope, $compile) {
    'use strict';
    var counter = 0;
  return function(scope, element, attrs) {
    
    ++counter;
    console.log(scope.data);
    var ele = element.find('input')[1];
    ele.id = ele.id +''+counter;
    $('#'+ele.id).datetimepicker();
  };
}]);

/*-----  End of Directive = calendarRepeatDirecitve  ------*/