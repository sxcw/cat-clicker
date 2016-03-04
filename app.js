$(function(){

	var model = {

		cats: [
			{
				id : "Silvia",
				pic : "silvia.jpg",
				clickCount : 0
			},
			{
				id : "Golphy",
				pic : "golphy.jpg",
				clickCount : 0
			}
		]
		

	};

	var octopus = {
		// init runs once
		init: function(){
			view.init();
		},
		// return number of cats
		getNumOfCats: function(){
			return model.cats.length;
		},
		// return a cats array object, cats[0] is Silvia
		getCatInfo: function(num){ 
			return model.cats[num];
		},
		//return clickCount of a cat
		getCount: function(num){
			return model.cats[num].clickCount;
		}

	};

	var view = {
		// set up menu and display area
		init: function(){

			this.linkNameArray =[];
			var catNum = octopus.getNumOfCats(); // number of menu items
			this.catName = document.getElementById("catName"); //store DOM into variables for easy access
			this.catPic = document.getElementById("catPic");
			this.catNumClick = document.getElementById("catNumClick");

			// create menu 
			for (i = 0; i<catNum; i++){
				this.linkName = octopus.getCatInfo(i).id;
				$("#catSelection").append("<li><a href = '#' class = 'catLink'>" + this.linkName + "</a></li>");
				this.linkNameArray.push(this.linkName);
			}

			// display Silvia initially 
			$(this.catName).append("Cat Name: "+ octopus.getCatInfo(0).id);
			$(this.catPic).append("<img src='images/"+ octopus.getCatInfo(0).pic+"'>");
			$(this.catNumClick).append("Number of Clicks: "+octopus.getCount(0));
			
			this.render();
		},
		// render 
		render: function(){

			// I want "this" points to the same "this" as in "this.catName" where "this" refers to "view" itself. It makes sense to name it "view"
			var view = this; 
			for(var i = 0; i< this.linkNameArray.length; i++){
				(function(){
					var index = i;

					$(".catLink")[index].addEventListener('click',function(){
						console.log(index);
						console.log(view);
						$(view.catName).append("Cat Name: "+ octopus.getCatInfo(index).id);
						$(view.catPic).append("<img src='images/"+ octopus.getCatInfo(index).pic+"'>");
						$(view.catNumClick).append("Number of Clicks: "+octopus.getCount(index));
					});
				}());
			}

		}				
	};

	octopus.init();
});