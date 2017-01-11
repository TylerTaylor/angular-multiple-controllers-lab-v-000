function ContactController() {
  var vm = this;

  vm.name = 'Tyler'
  vm.email = 'ty@ler.com'
  vm.phone = '555-555-5555'

  vm.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);