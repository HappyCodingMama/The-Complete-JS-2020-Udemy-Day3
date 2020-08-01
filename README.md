# The-Complete-JS-2020-Udemy-Day3
 Summarizing what I learned

[The budget App Project]

* UI Module
- Get input values
- Add the new item to the UI
- Update the UI

* Data Module
- Add event handler
- Add the new item to our data structure

* controller module
- calculate budget

1. define variable budgetController 
apply secret module pattern - (function() { })();
 
2. variable UIcontroller
 apply secret module pattern - (function() { })();

3. variable controller -> it's Gloval app controller 
 apply secret module pattern - (function() { })();

 function properties:budgetCtrl, UICtrl
 call budgetController, UIController

- event handler setup -> add event to class : 'add_btn' when click
	
- event handler setup -> add event when keypress, declare function
property is event
- if press keyCode is the same as 13 or which 13, then call function ctrlAddItem 

- define ctrlAdddItem and put it in anonymous function
- put ctrlAddItem in event handler of 'add_btn' 

4. edit variable UIController
- write return 
 input get value of variable type->class add_type, 
description->class add_description,
value->class add_value 
 then return anonymous function


-define variable input at function of ctrlAddItem in variable controller
: assign getInput to the property UICtrl


---------------1. Get the field input data -------------

1. at UIController

define variable DOMstrings
- make object bracket and arrange class syntax
 (inputType, inputDescription,inputValue,inputBtn)


- call getDOMstrings write function method return DOMstrings


2. at controller

- define variable DOM : assign getDOMstrings to UICtrl 

- put inputBtn in DOMstrings, then change'add_btn' into DOM.inputBtn

3. at controller

- define variable setupEventListeners -> declare function
 : move event of DOM.inputBtn and event of 'keypress' to function of var setupEventListener 
 : move var DOM into function of var setupEventListener

 : add return and function init in it, call setupEventListeners

- call controller.init outside whole codes 







