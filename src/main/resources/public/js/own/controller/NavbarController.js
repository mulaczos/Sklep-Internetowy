(function () {
    'use strict';
    angular
        .module('app')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'AccountService', '$state', '$rootScope', 'localStorageService'];

    function NavbarController($scope, AccountService, $state, $rootScope, localStorageService) {

        $scope.init = function () {
            $scope.showItemQuanity();
            $scope.isAuthenticated();
        };

        $scope.goMain = function () {
            if ($rootScope.loggedIn) {
                $state.go("main", {}, {reload: true});
            } else {
                $state.go("login", {}, {reload: true});
            }
        };

        $scope.logout = function () {
            AccountService.logout()
                .then(function success(success) {
                    $rootScope.loggedIn = false;
                    $rootScope.role = null;
                    $scope.username = null;
                    localStorageService.clearAll();
                    $state.go("login", {}, {reload: true});
                });
        };

        $scope.goToState = function (state) {
            if ($rootScope.loggedIn) {
                $state.go(state);
            }
        };

        $scope.getUsername = function () {
            return ($scope.username !== null && !angular.isUndefined($scope.username) && $scope.username !== '') ? "Username: "+$scope.username : "";
        };

        $rootScope.$on('refreshCart', function (event, data) {
            $scope.showItemQuanity();
        });

        $rootScope.$on('updateUsername', function (event, data) {
            $scope.isAuthenticated();
        });


        $scope.showItemQuanity = function () {
            $scope.items = localStorageService.get('items');
            if ($scope.items !== null) {
                $scope.howManyItems = $scope.items.length;
            } else {
                $scope.howManyItems = 0;
            }

        };

        $scope.isAuthenticated = function() {
            AccountService.isAuthenticated()
                .then(function success(response) {
                    if (response.data) {
                        $rootScope.loggedIn = true;
                        $rootScope.role = response.data.authorities[0].authority;
                        $scope.username = response.data.name;
                        $state.go("main");
                    } else {
                        $state.go("login");
                    }
                }, function failure(response) {
                    $state.go("login");
                });
        };
    }
}());