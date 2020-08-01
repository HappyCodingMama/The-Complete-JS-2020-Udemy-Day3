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
    var input = UICtrl.getInput();
  };

return {
  init: function() {
    console.log('hello');
  setupEventListeners();
}
};
  

})(budgetController, UIController);

controller.init();