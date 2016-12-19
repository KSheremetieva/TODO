import {app} from './app.js';


 app.controller('mainCtrl', function($scope){
 	$scope.categories = [
    {name: 'First'},
    {name: 'Second'}
    ];
    $scope.selected = $scope.categories[0];

    $scope.todos = [
        {
            text: 'Do stuff',
            done: false,
            category: 'Second'
        },
        {
            text: 'Done thing',
            done: false,
            category: 'First'
        },
        {
            text: 'Other stuff',
            done: false,
            category: 'First'
        }
    ];   
    $scope.removeTask = (todo) => {
        $scope.todos.splice($scope.todos.indexOf(todo),1)
    }
 })