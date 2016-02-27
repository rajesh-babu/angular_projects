angular.module('mobileApp', [])

.controller('mainController', function($scope, $http) {
	
	$scope.executionModeArr = [
        { data: 1, option: 'Select Execution Mode' },
        { data: 2, option: 'Single Browser Execution'},
        { data: 3, option: 'Sequential Execution' },
        { data: 4, option: 'Parallel Execution' },
		{ data: 5, option: 'Android Device Execution' },
		{ data: 6, option: 'IOS Device Execution' }
    ];
	$scope.executionTypeArr = [
        { data: 1, option: 'Select Execution Type' },
        { data: 2, option: 'Browser'},
        { data: 3, option: 'Device' }
    ];
	$scope.executionModeSelection = $scope.executionModeArr[0];
	
	$scope.executionTypeSelection = $scope.executionTypeArr[0];

    $scope.sortType = 'devicename'; // set the default sort type

    $scope.sortReverse = false; // set the default sort order

    $scope.searchDevice = ''; // set the default search/filter term

    $http.get('input/devices.json')

		.then(function(res) {

			$scope.devices = res.data;
		});

    $scope.exetype = function(exetype) {

        alert('hi');
    };

    $scope.displayPhone = function(device) {

        if (device === "Samsung S6") {

            $scope.imgSRC = "assets/images/01_samsungs6.jpg";
        } else if (device === "iPhone6") {

            $scope.imgSRC = "assets/images/02_iphone6.jpg";
        } else if (device === "Samsung S5") {

            $scope.imgSRC = "assets/images/01_samsungs6.jpg";
        } else if (device === "iPhone6 plus") {

            $scope.imgSRC = "assets/images/02_iphone6.jpg";
        }
    }
    $scope.doPost = function(item) {
		
		alert(JSON.stringify(item));

        $http.post('MobileServlet')

        .then(function(res) {

        });

    };

})
.filter('filterExecutionMode', function () {
	return function (fe, selection) {
		var items = {selection: selection, out: [] };
		angular.forEach(fe, function (value, key) {
			if (this.selection.option === "Single Browser Execution") {
				if (value.multiMode === "false") {this.out.push(value); }
			}else if (this.selection.option === "Parallel Execution" || this.selection.option === "Sequential Execution") {
				if (value.multiMode === "true") {this.out.push(value); }
			}else if (this.selection.option === "Android Device Execution") {
				if (value.os === "Android") {this.out.push(value); }
			}else if (this.selection.option === "IOS Device Execution") {
				if (value.os === "iOS") {this.out.push(value); }
			}else{
				this.out.push(value);
			}
		}, items);
		return items.out;
	};
})
.filter('filterExecutionType', function () {
	return function (feType, selection) {
		var items = {selection: selection, out: [] };
		angular.forEach(feType, function (value, key) {
			if (this.selection.option === "Browser") {
				if (value.type === "browser") {this.out.push(value); }
			}else if (this.selection.option === "Device") {
				if (value.type === "device") {this.out.push(value); }
			}else{
				this.out.push(value);
			}
		}, items);
		return items.out;
	};
});