
	
var pendingAppraisallistHRCtrl=	function (httpFactory){
var vm=this;
	vm.edit=function(id){
    alert(id);
	localStorage.setItem('empId',id);
	window.location.assign("/appraisalFormhr");

	}

	var apprisalListHR={
	"HRemail":localStorage.getItem("email"),
	"status":"2",
	"HRSubmitted":"0"
	}


	httpFactory.getAppraisalApi(apprisalListHR).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//$scope.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})

	}
	
	
	angular.module('myApp')
	.controller('pendingAppraisallistHRCtrl', pendingAppraisallistHRCtrl);