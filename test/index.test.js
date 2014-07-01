
describe('user', function(){
	beforeEach(module('user'));

	describe('User controller scope boxes', function () {
		var scope, controller;
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller;
			scope.boxes = [];
			controller('UserController', {$scope: scope});
		}));

		it('should have a scope defined', function () {
			expect(scope).toBeDefined();
		});

		it('should have a login module', function () {
			expect(scope.boxes[0].name).toEqual('login-module');
		});

		it('should have length 1', function () {
			expect(scope.boxes.length).toEqual(1);
		});
	});
});

