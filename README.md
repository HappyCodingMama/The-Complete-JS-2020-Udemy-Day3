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


4. at budgetController
define var Expense : decline function; properties- id, description, value
                          : respectively construct id, description, value 

define var Income : decline same as Expense function

define var allExpenses :  set properties into Array
define var allIncomes : set properties into Array
totalExpenses : set 0

define var data : 
- make object 
                  1. put allItems and make object of it
			put  exp : set array, inc : set array
	     2. put totals and make object of it
                  		put  exp : 0, inc: 0
 
-add return under the object of var data
 	1.make object: addItem 
	       apply function on that
                    its properties: type, des, val

	       set newItem is new Expense Id, des, val
                    define newItem 	

	[Create new item based on 'inc' or 'exp' type]		

	2. IF type is the same as 'exp'
	then, newItem is the same as new Expense values
	ELSE IF type is the same as 'inc'
	newItem is the same as new Income values
	add var ID next to newItem

	3. [Create new ID]
	set ID is allItems[type][allItems[type] length in var data - 1].id + 1 in var data
 

	4. [push it into our data structure]
	push newItem at allItems's type array varialble data
 
	5. [return the new element]
	add return newItem 

5. [Add the item to the budget controller] into function of  variable ctrlAddItem at controller
- var newItem is the same as 
add Item properties:type, description, value in var budgetCtrl
- take input, newItem out to var syntax 
- remove text 'var' of input, newItem

6. back to budgetcontroller

fix [create new ID]
IF syntax hug defining ID 
IF allItems[type] length in var data is greater than 0,
then allItems[type][allItems[type] length in var data - 1].id + 1 in var data
ELSE then, ID is zero

7. at UI CONTROLLER

1.call addListItem and decline function of it
properties obj, type

(create HTML string with placeholder text)

put income list template from index.html 
then, put them in '' and call html and declare variable html in function


put expense list template from index.html 
then, put them in '' and call html 

create if-else statement : if - type is 'inc', else if - type is 'exp'

put %%placeholder at id number, description, value

-------------------------------------------------------------------------
(replace the placeholder text with some actual data)
declare newHtml with html

newHtml : replace html code %id% -> obj.id
newHtml : replace newHtml code %description% -> obj.description
newHtml : replace newHtml code %value% -> obj.value

add incomeContainer in var DOMstrings and set class income_list
add expenseContainer in var DOMstrings and set class expense_list

declare element with html and newHtml
put element call incomeContainer at DOMstrings IF statement 
put element call expenseContainer at DOMstrings ELSE statement


(Insert the HTML into the DOM)
 DOM:element using method:inserAdjacentHTML 
-> insert newHtml in beforeend

var ctrlAddItem
(add the item to the UI)
in UICtrl, write addListItem put constructers newItem, input.type 























