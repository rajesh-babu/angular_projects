var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	
	$scope.noOfItemsPerPage = 10;
	$scope.reportDataArr = []; //declare an empty array
	
	$scope.reportDataArr = JSON.parse(document.getElementById("reportDataSection").innerHTML); 
	
	/*
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854047650", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/devon",targeturl:"http://www1.tiaa-cref.org/tcm/devon",redirecttype:"301",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854047621", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/OpeningDoorsAlbany",targeturl:"https://publictools.tiaa-cref.org/public/publictools/events/eventswelcome?eventId=1-2P0VHCK",redirecttype:"310",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854047653", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/clarkson",targeturl:"http://www1.tiaa-cref.org/tcm/clarkson",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854047889", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/calacademy",targeturl:"http://www1.tiaa-cref.org/tcm/calacademy",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048108", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/thayeracademy",targeturl:"http://www1.tiaa-cref.org/tcm/thayeracademy",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048113", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/necmusic",targeturl:"http://www1.tiaa-cref.org/tcm/necmusic",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048118", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/hotchkiss",targeturl:"http://www1.tiaa-cref.org/tcm/hotchkiss",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048348", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/apha",targeturl:"http://www1.tiaa-cref.org/tcm/apha",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048351", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/msu",targeturl:"http://www1.tiaa-cref.org/tcm/msu",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048637", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/colbysawyer",targeturl:"http://www1.tiaa-cref.org/tcm/colbysawyer",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"}); 
	
	$scope.reportDataArr.push({asseturl:"/cs/ContentServer?id=1324352010695&AssetType=TIAA_Link&target=Variables.target&cs_environment=standard&pagename=OpenMarket%2FXcelerate%2FActions%2FEditFront&function=edit&cs_formmode=WCM", rulename:"Auto-Generated-Redirect-1457854048641", sourcedomain:"public-www-at.test.tiaa.org",sourceurl:"/woosterschool",targeturl:"http://www1.tiaa-cref.org/tcm/woosterschool",redirecttype:"302",copyquerystring:"Y",policyid:"3453",isactivated:"Yes"});  */
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
});