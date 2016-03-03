$(function(){
	var model = {

		cats: ["Silvia", "Golphy", "Cutie", "Sadie", "Naughty"],

			// data in displayArea
		catInfo: {
			"Silvia":{
					"pic" : "silvia.jpg",
					"numClick" : 0
			},
			"Golphy":{
					"pic" : "golphy.jpg",
					"numClick" : 0
			},
			"Cutie":{
					"pic" : "cutie.jpg",
					"numClick" : 0
			},
			"Sadie": {
					"pic" : "sadie.jpg",
					"numClick" : 0
			},
			"Naughty": {
					"pic" : "naughty.jpg",
					"numClick" : 0
			}						
		}	
	};

	var octopus = {

		init: function(){			
			catListView.init();
			catView.init();
		},

		getCats: function(){
			return model.cats;
		},

		getCatInfo: function(){
			return model.catInfo;
		},

		incrementCounter: function(catName){
			// var cats = getCats();
			// var catInfo = getCatInfo();
			// for (i = 0; i < cats.length; i++) {		
			// 	// clear out previous click count text and increment the click count number when user clicks on the image
			// 	document.getElementById("catPic").onclick = function(){
			// 		$("#catNumClick").text("");
			// 		catInfo[catID].numClick++;
			// 		$("#catNumClick").append("Number of clicks: "+ catInfo[catID].numClick);
			// 	}
			// }
			return model.catInfo[catName].numClick++; 

		},
	};

	var catListView = {
		// cats: undefined,
		// catInfo: undefined,
		// init gets called once
		init: function(){
			this.cats = octopus.getCats();
			this.catInfo = octopus.getCatInfo();
			console.log(this.catInfo);
			this.render();							
		},

		render: function(){
			console.log(this);
			var catListView = this; 
			//create catSelection and displayArea
			for (i = 0; i < this.cats.length; i++) {
				var cat = this.cats[i];

				// create <div>
				var catElement = document.createElement('div');
				catElement.className = 'catSection';

				// create <a>
				var catElementLink = document.createElement('a');	
				catElementLink.id = this.cats[i];	
				catElementLink.textContent = cat;

				catElement.appendChild(catElementLink);
				catElementLink.href = "#";
				$("#catSelection").append(catElement);	

				catElementLink.addEventListener('click', function(){
					//hide the hint

					$("#hint").hide();
					//get id
					var catID = $(this).attr('id');
					// console.log("catID is "+ catID);
					// console.log(catListView);
					// console.log(catListView.catInfo[catID]);

					// clear out previous text
					$("#catName").text("");
					$("#catPic").text("");
					$("#catNumClick").text("");

					// append name, pic and click count
					$("#catName").append("Cat name: " +catID);
					// console.log(this.catInfo);
					$("#catNumClick").append("Number of clicks: "+ catListView.catInfo[catID].numClick); 
					$("#catPic").append('<img src="'+  catListView.catInfo[catID].pic +'">');
				})									
			}	
		}
	};

	var catView = {

		init: function(){
			// create display area
			var display = document.createElement('div');
			display.className = 'displayArea';

			// repetition!!!
			// this.cats = octopus.getCats();
			// this.catInfo = octopus.getCatInfo();
			// this.catElementLink = document.createElement('a');
			this.render();
		},

		render: function(){	
			// this.catInfo = octopus.getCatInfo();
			// var catID = octopus.getCats();
			// console.log("catID is:"+ catID);
			// var catPic = this.catInfo["catID"].pic;
			var counter = document.getElementById("catNumClick");
			console.log(this);
			$("#catPic")[0].addEventListener('click', function(){
				$(counter).text("");
				$(counter).append("Number of clicks: " + octopus.incrementCounter(catName));
			});
		}
	}	

	octopus.init();
});	
