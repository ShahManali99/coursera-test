(function(){
'use strict';

	var app = angular.module('myFirstApp', []);

	app.controller('MyFirstController',	function ($scope, $filter){
		$scope.name = "Billu";
		$scope.sayHello = function(){
			return "Hello Coursera!";
		};

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		}
	});

	app.controller('NameCalculatorController', NameCalculatorController);
	NameCalculatorController.$inject = ['$scope'];
	function NameCalculatorController($scope){
		$scope.name = "";
		$scope.totalValue = 0;
		$scope.displayNumeric = function(){
			var totalNameValue = calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue;
		}
	};

	function calculateNumericForString(string){
		var totalStringValue = 0;
		for(var i=0; i<string.length; i++)
			totalStringValue += string.charCodeAt(i);
		return totalStringValue;
	}

	app.controller('MsgController',	MsgController);
	app.filter('loves', LovesFilter)
	MsgController.$inject = ['$scope', lovesFilter];
	function MsgController($scope, lovesFilter){
		$scope.name = "Manali";
		$scope.sayMessage = function(){
			return "Manali likes to eat healthy snacks at night!";
		};

		$scope.sayLovesMessage = function(){
			return "Manali loves to eat healthy snacks at night!";
		};

		$scope.stateOfBeing = "hungry"
		$scope.feedMe = function(){
			$scope.stateOfBeing = "fed";
		}

		$scope.cookieCost = .45;
	};

	function LovesFilter(){
		return function(input) {
			input = input || "";
			input = input.replace("likes", "loves");
			return input;
		}
	}

})();

/*
<a href="#" onclick="add(); return false;">More</a>
<ul id="the-list">
<li>First Item</li>
</ul>

<script>
counter=1;
function add(){
	var x = document.createElement('li');
	x.className = "list-item";
	x.innerHtml = "the counter is : "+counter;
	document.getElementById('the-list').appendChild(x);
	counter++;
}
</script>



function PartyAnimal(nam){
	this.x=0;
	this.name=nam;
	console.log("In the constructor");
	console.log("Built:"+nam);
	this.party=function(){
		this.x+=1;
		console.log(nam+"=" + this.x);
	}
}
s = new PartyAnimal("Sally");
s.party();

j = new PartyAnimal("Jim");
j.party();

s.party();
*/


