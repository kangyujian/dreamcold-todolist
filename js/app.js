(function (window) {
	'use strict';

	var todos=[
		
	]
	// Your starting point. Enjoy the ride!
	new Vue({
        el: '#app',
        data: {
			title:'番茄时钟',
			todos:todos,
			text:"",
			left:todos.length
		},
		methods:{
			add:function(){
				if(this.text.trim().length===0){
					return;
				}
				this.todos.push({
					text:this.text,
					completed:false
				});
				this.text=''
				this.left++;
			},
			destroy:function(text){
				var that=this;
				var todoIndex;
				this.todos.find(function(todo,index){
					if(todo.text===text){
						todoIndex=index;
					}
				});
				this.todos.splice(todoIndex,1);
				this.left--;
			},
			clearComplete:function(){
				var deleteList=[];
				for(let i=0;i<this.todos.length;i++){
					if(todos[i].completed===true){
						deleteList.push(i);
					}
				}
				this.left-=deleteList.length;
				for(let i=0;i<deleteList.length;i++){
					this.todos.splice(deleteList[i],1);
					
				}
			}
			
		}
    })
})(window);
