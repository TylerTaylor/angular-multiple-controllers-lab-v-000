function StaffController() {
  var vm = this;

  vm.name = 'Tyler'
  vm.email = 'ty@staff.com'
  vm.phone = '555-666-7777'
}

angular
  .module('app')
  .controller('StaffController', StaffController);