
/*================================================================
=>                   Service = FacultylistAPI
==================================================================*/
/*global app, $http*/

app.service('CollegeAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getcollegelist = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/listOfColleges';
	
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = FacultylistAPI  ------*/


