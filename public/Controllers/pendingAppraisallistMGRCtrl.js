
var pendingAppraisallistMGRCtrl=	function (httpFactory){
var vm=this;

	vm.edit=function(id){
     alert(id);
	localStorage.setItem('empId',id);
	window.location.assign("/appraisalFormMGR");

	}


	var apprisalListMGR={
	"managerEmail":localStorage.getItem("email"),
	"status":"1",
	"managerSubmitted":"0"
	}


httpFactory.getAppraisalApi(apprisalListMGR).then (function(response){

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
	.controller('pendingAppraisallistMGRCtrl', pendingAppraisallistMGRCtrl);