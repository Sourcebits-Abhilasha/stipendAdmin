/*================================================================
=>                   Service = EditCollegeAPI
==================================================================*/
/*global app, $http*/

app.service('editCollegeAPI', ['$rootScope', '$q', 'appConfig', '$http', function($rootScope, $q, appConfig, $http) {

    'use strict';

    this.editcollegelist = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/getCollegeDetailsByID/' + data;

        $http.get(serviceUrl)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveCollegeDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/updateCollegeForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveFreshmanDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/updateFreshMenProfileForWeb';

        $http.post(serviceUrl, data)

        .success(function(data) {
                console.log('Freshman save data=======>', data)
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveGeographicDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeGeographicsForWeb';

        $http.post(serviceUrl, data)

        .success(function(data) {
                console.log('geographics save data=======>', data)
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveEthenicityDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeEthnicityForWeb';

        $http.post(serviceUrl, data)

        .success(function(data) {
                console.log('Ethenicity save data=======>', data)
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveCalendarDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeCalendarForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('Calendar save data=======>', data)

                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    this.saveWeatherDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeWeatherForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess weather', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };

    this.saveProminentAlumniDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addProminentAluminiForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess saveProminentAlumniDetail', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };

    this.saveCollegeRankingDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addRankingsForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess college ranking', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };

    this.saveIntendedStudyDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeIntendedStudyForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess intended Study', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };
    this.saveQuickFactsDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addQuickFactsForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess addQuickFactsForWeb', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };

    this.saveLinkAndAddressDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeAddressForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess aaddCollegeAddressForWeb', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };

    this.saveFeesAndFinancialDetail = function(data) {

        var deferred = $q.defer();
        var serviceUrl = appConfig.baseURL + '/addCollegeFeesForWeb';

        $http.post(serviceUrl, data)
            .success(function(data) {
                console.log('sucess aaddCollegeAddressForWeb', data);
                deferred.resolve(data);
            })
            .error(function(err) {
                console.log('error');
                deferred.reject(err);
            });
        console.log('promise');
        return deferred.promise;
    };
    // this.editFacultyList = function (contentdata) {
    // 	console.log('contentdata======>',contentdata);
    // 	var deferred = $q.defer();
    // 	var serviceUrl = appConfig.baseURL + '/jsonEditFaculty';
    // 	$http.post(serviceUrl,contentdata)
    // 		.success(function (data) {
    // 			deferred.resolve(data);
    // 		})
    // 		.error(function (err) {
    // 			deferred.reject(err);
    // 		});

    // 	return deferred.promise;
    // };

}]);


/*-----  End of Service = EditCollegeAPI  ------*/
