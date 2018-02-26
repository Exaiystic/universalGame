//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Subroutine goldenPoint is an award that will give the player extra points, based on RNG.
function goldenPoint(){
	//console.log("goldenPoint triggered");
//	$( "#goldenPointIcon" ).remove();
	
//	w = window.outerWidth;
//	h = window.outerHeight;
//		width = Math.floor(Math.random() * (w - 0) + 0);
//		height = Math.floor(Math.random() * (h - 0) + 0);
//		var div = document.createElement('div');
//		div.innerHTML = "<img src = \"helmet.png\"></img>";
//		div.style.position = "absolute";
//		div.style.left = width + "px";
//		div.style.top = height + "px";
//		div.id = "goldenPointIcon";
//		$( "body" ).append( div);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Line 9 refers to the div named Mil_Click within the html file. The line itself states
//that the following code is a module using the angularJS library.
//Whereas line 10 refers to the div named Ctrl, this line also states that everything within
//this div can potentially be part of a function, but nothing outside of the div can 
//be part of the function.
//Line 11 states that the initial amount of clicks registered will be 0, this stops players from buying
//upgrades straight away.

				var app = angular.module('Mil_Click', []);
				app.controller('Ctrl', function($scope, $interval) {
				$scope.clickNumber=0;
		
//Lines 17 to 21 state that the initial amount of obstacle courses, firing ranges, propaganda, censorship,
//and invasions are set to 0 at the start of the game. This means that the player will receive no
//points over time when they first start the game.
		
				$scope.numObstacleCourse=0;
				$scope.numFiringRange=0;
				$scope.numPropaganda=0;
				$scope.numMediaCensorship=0;
				$scope.numInvadeCountry=0;
				
//Lines 27 to 31 determine the initial cost of all of the upgrades for when the game has been launched.
//The prices are at their lowest so that the player does not have too much trouble obtaining the 
//upgrades for what they're worth.
				
				$scope.obstacleCourseCost=50;
				$scope.firingRangeCost=100;
				$scope.propagandaCost=250;
				$scope.mediaCensorshipCost=1000;
				$scope.invadeCountryCost=5000;
				
//Line 37 states that "$scope.buttonclick" is a function.
//Line 38 says that when the buttonclick function is run the program should increase the amount of
//clicks that the player has.
				
				$scope.buttonclick = function() {
					$scope.clickNumber++
				}
				
//Line 48 tells the code that "$scope.purchaseObstacleCourse" is a function.
//Line 49 increases the number of obstacle courses the player has by one when the function is run.
//Line 50 takes away the number of points that the player has by the cost of the obstacle course
//they have just bought.
//Line 51 then doubles the current cost for an obstacle course so that the game gets progressively
//harder over time.
	
				$scope.purchaseObstacleCourse = function() {
					$scope.numObstacleCourse++;
					$scope.clickNumber -= $scope.obstacleCourseCost;
					$scope.obstacleCourseCost = Math.ceil($scope.obstacleCourseCost * 2);
				}
				
//Line 62 tells the code that "$scope.purchaseFiringRange" is a function. This means that the function
//will be triggered when the player clicks on the button to buy a firing range.
//Line 63 increases the number of obstacle courses that the player currently has by one when the function
//is run.
//Line 64 takes away the number of points that the player has by the cost of the firing range they have
//just bought.
//Line 65 then doubles the current cost for another firing range.
				
				$scope.purchaseFiringRange = function() {
					$scope.numFiringRange++;
					$scope.clickNumber -= $scope.firingRangeCost;
					$scope.firingRangeCost = Math.ceil($scope.firingRangeCost * 2);
				}
				
//Line 76 states that "$scope.purchasePropaganada" is a function, which will be run when the player
//presses the button to trigger buy the upgrade.
//Line 77 says to the game that when the function is initiated, the number of propaganda upgrades
//that have been bought will increase by 1.
//Line 78 deducts the cost of the upgrade from the player's amount of clicks.
//Line 79 multiplies the cost of the upgrade by 2 and then rounds the value upwards to the highest
//whole number.
				
				$scope.purchasePropaganda = function() {
					$scope.numPropaganda++;
					$scope.clickNumber -= $scope.propagandaCost;
					$scope.propagandaCost = Math.ceil($scope.propagandaCost * 2);
				}
				
//Line 89 states that "$scope.purchaseMediaCensorship" is a function, which will be run when the player
//presses the button to trigger the purchase.
//Line 90 says to the game that when the function is execute, the number of times that this upgrade
//is bought is increased by 1.
//Line 91 reduces the amount of clicks that the player has by the cost of the purchased upgrade.
//Line 92 doubles the cost of the upgrade and then rounds it upwards to the nearest whole number.
				
				$scope.purchaseMediaCensorhsip = function() {
					$scope.numMediaCensorship++;
					$scope.clickNumber -= $scope.mediaCensorshipCost;
					$scope.mediaCensorshipCost = Math.ceil($scope.mediaCensorshipCost * 2);
				}
				
//Line 103 states that "$scope.purchaseInvadeCountry" is a function, the function will be executed when
//the player presses the purchase upgrade button.
//Line 104 increases the number of countries invaded by one when the player clicks on the button, triggering
//the function.
//Line 105 takes the cost of the upgrade form the total amount of clicks that the player has.
//Line 106 doubles the cost that the polayer will have to pay for the next time they would like to buy the
//same upgrade.
				
				$scope.purchaseInvadeCountry = function() {
					$scope.numInvadeCountry++;
					$scope.clickNumber -= $scope.invadeCountryCost;
					$scope.invadeCountryCost = Math.ceil($scope.invadeCountryCost * 2);
				}
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
//Line 118 states that the following bracketed code belongs to an angularJS function. This function in particular
//gives the upgrades functionality which gives the player clicks over time.
//Line 119 determines how much points one of the upgrades gives the player over time. The amount of points over
//is calculated with x/100, where x is how many points will be obtained over the period of one second. The amount
//of points gained over time is able to scale with how many upgrades have been bought as the result of the
//calculation is multiplied by the number of upgrades bought.
//Line 120 tells the function that this is to be repeated 10 times every second, this makes the game award the player
//with that many points within a second. This snippet of code is for the obstacle course.
			
				$interval(function() {
					$scope.clickNumber += ($scope.numObstacleCourse * 1 / 100);
				}, 10);
				
//The code below calculates the amount of points that will be awarded to the player over time using the same
//method as the one used for the obstacle course. This time, however, it is used in order to calculated how many points
//all of the other upgrades will grant the player. All of the points over time given to the player by all of the upgrades stack.
				
				$interval(function() {
					$scope.clickNumber += ($scope.numFiringRange * 2 / 100);
				}, 10);
				
				$interval(function() {
					$scope.clickNumber += ($scope.numPropaganda * 5 / 100);
				}, 10);
				

				$interval(function() {
					$scope.clickNumber += ($scope.numMediaCensorship * 10 / 100);
				}, 10);
				

				$interval(function() {
					$scope.clickNumber += ($scope.numPropaganda * 25 / 100);
				},10);
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
//Adding an RNG based goldenPoint
//At the point in time, when the number 1 appears within the function, the console will 
//display "goldenPoint triggered"
				$interval (function() {
					var number
						number = Math.floor(Math.random() * (100 - 1) + 1);
						if (number == 1){
							goldenPoint()
						}
				},10);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				});
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
//The following code is used in order to make the upgrades' tool tips fade in and out upon the mouse hover - this snippet of code is
//specifically used for the obstacle course's tool tip. But the same method is applied to all of the upgrades.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Line 157 states that when the document is ready, the function can be executed, this means that the function
//should not receive errors due to needed resources not being fetched in time.
//Line 158 says that when the mouse enters "hover area" of the targeted upgrade button, the function will
//be executed.
//Line 159 fades the tool tip inwards so that it is visible.
				
				$(document).ready(function(){
					$("#obstacleCourse").mouseenter(function(){
						$("#obstacleCourseTooltip").fadeIn();
					});
				});
				
//Line 168 further expresses to the game that the function can only be executed when all of the resources needed are fetched and are available.
//Line 169 then states that when the mouse leaves the "hover area" of the upgrade, the following function will be initiated,
//the function itself is shown on line 170 , which basically says that the tool tip will fade out. This means that when the mouse is not
//hovering over the button, the upgrade's tool tip will be faded out.

				$(document).ready(function(){
					$("#obstacleCourse").mouseleave(function(){
						$("#obstacleCourseTooltip").fadeOut();
					});
				});

//The final part of the tool tip's fading in/out feature basically prevents the tool tip from staying visible once the player had purchased the
//upgrade, this snippet of code had to be implemented because the fading functions would only be able to run if the upgrade's button was
//enabled (when the player had enough points to purchase the upgrade). Because when a player purchases an upgrade, it is likely that they will
//no longer have enough points for the upgrade to be bought immediately afterwards. This will disable the button, meaning that the tool tip
//will not be able to fade out after the mouse has left the button's "hover area", causing the tool tip to always be visible, even when the mouse
//is not hovering over the button.

//Line 186 expresses that the function can only work when the resources are available to the web browser.
//Line 187 states that the function will trigger when the upgrade button has been clicked, once the upgrade
//button has been clicked, the tool tip will be forced to fade out - regardless of the mouse hovering
//over the button or not. This is written on line 188.
				
				$(document).ready(function(){
					$("#obstacleCourse").click(function(){
						$("#obstacleCourseTooltip").fadeOut();
					});
				});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tool tip functions for the firing range button.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				$(document).ready(function(){
					$("#firingRange").mouseenter(function(){
						$("#firingRangeTooltip").fadeIn();
					});
				});

				$(document).ready(function(){
					$("#firingRange").mouseleave(function(){
						$("#firingRangeTooltip").fadeOut();
					});
				});

				$(document).ready(function(){
					$("#firingRange").click(function(){
						$("#firingRangeTooltip").fadeOut();
					});
				});
				
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tool tip functions for the propaganda button.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				$(document).ready(function(){
					$("#propaganda").mouseenter(function(){
						$("#propagandaTooltip").fadeIn();
					});
				});

				$(document).ready(function(){
					$("#propaganda").mouseleave(function(){
						$("#propagandaTooltip").fadeOut();
					});
				});

				$(document).ready(function(){
					$("#propaganda").click(function(){
						$("#propagandaTooltip").fadeOut();
					});
				});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tool tip functions for the media censorship button.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				$(document).ready(function(){
					$("#mediaCensorship").mouseenter(function(){
						$("#mediaCensorshipTooltip").fadeIn();
					});
				});

				$(document).ready(function(){
					$("#mediaCensorship").mouseleave(function(){
						$("#mediaCensorshipTooltip").fadeOut();
					});
				});

				$(document).ready(function(){
					$("#mediaCensorship").click(function(){
						$("#mediaCensorshipTooltip").fadeOut();
					});
				});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tool tip functions for the invade a country button.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
				$(document).ready(function(){
					$("#invadeCountry").mouseenter(function(){
						$("#invadeCountryTooltip").fadeIn();
					});
				});

				$(document).ready(function(){
					$("#invadeCountry").mouseleave(function(){
						$("#invadeCountryTooltip").fadeOut();
					});
				});

				$(document).ready(function(){
					$("#invadeCountry").click(function(){
						$("#invadeCountryTooltip").fadeOut();
					});
				});