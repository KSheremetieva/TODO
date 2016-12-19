import {app} from '../app.js';
import  '../mainCtrl.js';
import table_template from './template/table.html';

app.directive('tableDir', function(){
	return{
		restrict: 'E',
		replace: false,
		controller: 'mainCtrl',
		template: table_template,
		link: function(scope, element, attributes){
			
		}
	}
})