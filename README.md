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
define var Expense : declare function; properties- id, description, value
                          : respectively construct id, description, value 

define var Income : declare same as Expense function

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

1.call addListItem and declare function of it
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


8. (above getDOMstrings) at UIController
call clearFields, declare anonymous function

define fields, fieldsArr
field is 
set method querySelectorAll into DOM
object inputDescription of DOMstrings +
 'comma' + object inputValue of DOMstrings

fieldsArr is 
set Array and  use prototype and apply method slice and call field

loop -> set fieldsArr, use forEach, and define function of forEach
properties:current, index, array
- current value is ""  
 
call focus method at filedsArr[0] 

go variable ctrlAddItem in var Controller
(clear the fields)
UICtrl -> call clearFields 

 9. go! variable controller

-define updateBudget and declare anonymous function

call updateBudget in variable ctrlAddItem


go! getInput method
(value is 'string' so, we whould convert it to 'number')
- use parseFloat

go! var ctrlAddItem
put IF statement next to var input
: input.description is not "" and is not isNaN(value at input) and
input.value greater than 0
move below 4 stuff into IF result of statement

10. go! var budgetController

-put method calculateBudget and declare anonymous function

-define variable calculateTotal and declare function, property:type,
define variable sum is zero
data.allItems[type] make loop -> use forEach: its function property:cur
sum plus equals cur.value
data.totals[type] equals sum

(calculate total income and expenses)
go! method calculateBudget
call budget method calculateTotal 'exp'
call budget method calculateTotal 'inc'

go! variable data
add method budget is zero

(calculate the budget: income-expenses)
method budget of var data is data.totals.inc - data.totals.exp

go! variable data
add method percentage is minus one

(calculate the percentage of income that we spent)

method percentage of var data is (data.totals.exp / data.totals.inc) * 100
and use Math.round to make integer 


go! var updateBudget
call method calculateBudget at property budgetCtrl


go! below method calculateBudget
make method getBudget, declare anonymous function
return 
method budget : method budget at var data
totalInc : data.totals.inc
totalExp : exp
percentage : percentage

go! var updateBudget
variable budget -> call method getBudget at budgetCtrl

testing: write console.log -> call var budget

go! method calculateBudget
(calculate the percentage of income that we spent)
put IF statement : if -> data.totals.inc greater than 0
then, method percentage of var data  happen
if not -> method percentage of var data  is minus one


11. Go! UIController

- add object displayBudget above object getDOMstrings
declare function, property:obj

- add objects at var DOMstrings
 budgetLavel -> class budget_value
 incomeLabel -> class budget_income-value
 exensesLabel -> class budget_expenses-value
percentageLabel -> class budget_expenses-percentage

- go back to object displayBudget
add text: obj.budget using method textContent-> DOM object DOMstrings.budgetLabel
DOMstrings.incomeLabel:obj.totalInc, DOMstrings.expensesLabel:totalExp,
 DOMstrings.percentageLabel:obj.percentage

-Go! controller
call method displayBudget, property: var budget at UICtrl

-Go!object displayBudget
add IF statement 
obj.percentage is greater than 0,
then add obj.percentage plus text % at DOM percentageLabel
ELSE : then add obj.percentage text --- at DOM percentageLabel

-back to var controller
set initialization : at function of return 
method displayBudget, property: none at UICtrl
-add object budget - 0, totalInc - 0, totalExp - 0, percentage - -1 

12. go! var UIController
- add object container is class container in var DOMstrings

go! var controller 
var DOM : add event -> DOM element - DOM.container
     when click, apply ctrlDeleteItem

(after var ctrlAddItem)
define variable ctrlDeleteItem, declare function, property:event
-define var itemID

fix html of object addListItem income%id% -> inc%id%, 
expenses%id%-> exp%id%

-back to var ctrlDeleteItem
 itemid equals event.parentNode*4.id

add IF-ELSE statement
if: itemID, then 
define splitID, type, ID with itemID
itemID equals itemID.split['-']
type equals splitID[0]
ID equals splitID[1]

13. go! budgetController

add object: deleteItem, declare function- properties: type, id

define var ids, index

data.allItems[type]. 
 - use map and declare callback function property:current
 - return current.id

- index equals ids. 
      call id indexnumber using indexOf 
  IF-ELSE statement
   if : index is not -1 -> data.allItems[type].splice(index, 1)


(delete the item from the data structure)
go! var controller
budgetCtrl.deleteItem properties: type, ID
above that, ID -> use method parseInt to make integer ID

14. go! UI controller

make object deleteListItem, declare function - property:selectorID

var el equals DOM element selectorID
add el.parentNode.removeChild(el)

go! var ctrlDelteItem

in IF statement
(delete the item from the UI)
call method deleteListItem(itemID) at var UICtrl

(update and show the new budget)
call updateBudget

15. 

go! var budgetController
- make object calculatePercentages 
: declare anonymous function
: Expense.prototype.calcPercentage equals function- property totalIncome

- add this.percentage equals minus one at var Expense

back to Expense.prototype.calcPercentage 
- add IF-ELSE statement
if : totalIncome is greater than 0
then, this.percentage equals (this.value/totalIncome) * 100
and use Math.round to make integer

else: this.percentage equals minus one

Expense.prototype.getPercentage is anonymous function
: return this.percentage


add object calculatePercentages

- Loop data.allItems.exp using forEach 
declare function of forEach : property- cur
call cur.calcPercentage(data.totals.inc)

make objet getPercentages - declare anonymous function
1. define var allPerc
: Loop data.allItems.exp using map
declare function of map : property- cur 
-> return cur.getPercentage

2. return allPerc

go! var updatePercentages
(calculate percentages)
call calculatePercentages at var budgetCtrl

(read percentages from the budget controller)
define var percentages -> call getPercentages at var budgetCtrl

16.
back to object displayPercentages
- define variable fields DOM element:DOMstrings.expensesPercLabel
select All

- define var nodeListForEach, declare function, property:list, callback
:Loop -> use FOR
call callback : list[i], i


nodeListForEach-> at fields, declare function, property:current, index
IF-ELSE statement
if: percentages[index] greater than 0,
then current.textContent equals percentages[index] plus '%'
else: curremnt.textContent equals percentages[index] plus '-'

go!var updatePercentages in var controller

((update the UI with the new percentages)
call displayPercentages(percentages) at var UIctrl

17. go! UI controller
make object formatNumber: declare function - properties: num, type


num equals, use method Math.abs to make decimal numbers
num equals, use toFixed to make two decimal numbers

numSplit equals, use split('.')
define varl numSplit

-int equals numSplit[0]
IFstatement
if: int.length is greater than 3
	then, int euqals int.substr(0,int.length - 3) plus ','
	 plus int.substr(int.length - 3,3)

-dec equal numSplit[1]

-return (IF type is equals 'exp', TRUE is '-', FALSE is '+') +
''+int+'.' + dec
 

**move above object formatNumber to top par, then add var, change : -> to =


go! newHTML
add formatNumber outside obj.value , plus type next to obj.value

go! object displayBudget
put formatNumber outside obj.budget at DOM element: DOMstrings.budgetLabel
and add type next to obj.budget
above it, tenery operator -> IF: obj.budget is greater than 0,
TRUE: type = 'inc', FALSE: type = 'exp'
define var type, int, dec with numSplit
  
the rest of DOM element -> respectively add 'inc', 'exp'

18. go! UI controller
make object displayMonth - declare anonymous function 
- define var now, month, year
  now -> call new Date 
  year ->call getFullYear at var now
  month -> call getMonth at var now
  months -> make array put months' title January, February ---
 in it

add object dateLabel in var DOMstrings -> class budget_title--month

back to object displayMonth
add var months[month] + '.' + var year, use method textContent at DOM element:DOMstrings.dateLabel

go! init function
call displayMonth at UICtrl

19. 


















 
























