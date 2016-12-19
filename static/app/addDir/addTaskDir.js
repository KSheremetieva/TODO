import {app} from '../app.js';
import  '../mainCtrl.js';
import add_template from './template/addTask.html';

app.directive('addDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: add_template,
		link: function(scope, element, attributes){
		scope.addTask = (newTask, selected) => {
        	scope.todos.push({
            	text: newTask,
            	done: false,
            	category: selected
        })
    }
		}
	}
})