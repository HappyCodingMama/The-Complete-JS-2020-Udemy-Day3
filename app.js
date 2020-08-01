/* var budgetController = (function () {

  var x = 23;

  var add = function (a) {
    return x + a;
  }

  return {
    publicTest: function (b) {
      return add(b);
    }
  }

})();

var UIController = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(z);
    }
  }
})(budgetController, UIController); */



var budgetController = (function () {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = des;
    this.value = val;
  };

  var allExpenses = [];
  var allIncomes = [];
  var totalExpenses = 0;


  var data = {
    allItems: {
      exp : [],
      inc : []
    },
    totals: {
      exp : 0,
      inc : 0
    }
  };

    return {
      addItem: function(type, des, val) {
      var newItem, ID;

        if (data.allItems[type].length > 0) {
          ID = data.allItems[type][data.allItems[type].length-1].id + 1;
        }else{
          ID = 0;
        };

        if (type === 'exp') {
          newItem = new Expense(ID, des, val);
        } else if ( type === 'inc') {
          newItem = new Income(ID, des, val );
        }

        data.allItems[type].push(newItem);

        return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };



})();

var UIController = (function () {

  var DOMstrings = {
    inputType: '.add_type',
    inputDescription: '.add_description',
    inputValue: '.add_value',
    inputBtn: '.add_btn'
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    }
  }
})();

var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function() {

    var DOM = UICtrl.getDOMstrings();

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
 
  };

  var ctrlAddItem = function () {
 
    var input, newItem;
    input = UICtrl.getInput();
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
  };

return {
  init: function() {
  setupEventListeners();
}

};
  

})(budgetController, UIController);

controller.init();