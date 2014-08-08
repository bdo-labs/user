/*global angular*/
/**
 * Menu for user related options and notifications. This is supposed to be used
 * together with bdo-dropdown, that is
 *
 * <div user-menu bdo-dropdown></div>
 *
 */
angular.module('user').directive('userMenu',[
	'userProfileService',
	function (userProfileService) {
		return {
			link: function (scope, element, attributes) {
				element.addClass('user-menu');

				scope.$watch(userProfileService.getCurrentUser, function (user) {
					scope.user = user;
				});
			},
			template: require('./userMenu.html')
		};
	}
]);
