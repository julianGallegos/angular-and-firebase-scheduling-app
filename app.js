
angular.module('scheduleApp', ['firebase'])

//this is where we set our main controller as well as access firebase
.controller('mainController', function($scope, $firebase){


// the rest of the application will go here

//establish our connection to firebase here
var ref = new Firebase("https://crackling-torch-5198.firebaseio.com/days")
var fb = $firebase(ref);

//use this funciton to set the default data
// on html use ng-click="reset()" to execute the code below when clicked

// syncs object to be returned in json format
var syncObject = fb.$asObject();

syncObject.$bindTo($scope, 'days')

$scope.reset = function(){

	fb.$set({
		monday: {
			name: 'Monday',
			slots: {
				0900: {
					time: '9:00am',
					booked: false
				},
				0110: {
					time: '11:00am',
					booked: false
				}
			}
		},
		tuesday: {
			name: 'Tuesday',
			slots: {
				0900: {
					time: '9:00am',
					booked: false
				},
				0110: {
					time: '11:00am',
					booked: false
				}
			}
		}
	});


};

});