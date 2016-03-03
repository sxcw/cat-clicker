$(function(){
	var model = {
		cats: ["Silvia", "Golphy", "Cutie", "Sadie", "Naughty"],

			// data in displayArea
		catInfo: {
			"Silvia":
				{
					"pic" : "silvia.jpg",
					"numClick" : 0
				},
			"Golphy":
				{
					"pic" : "golphy.jpg",
					"numClick" : 0
				},
			"Cutie":
				{
					"pic" : "cutie.jpg",
					"numClick" : 0
				},
			"Sadie": 
				{
					"pic" : "sadie.jpg",
					"numClick" : 0
				},
			"Naughty": 
				{
					"pic" : "naughty.jpg",
					"numClick" : 0
				}						
		}	


	};

	var octopus = {
		init: function() {			
			catListView.init();
			catView.init();
		},
		getCats: function(){
			return model.cats;
		},
		getCatInfo: function(){
			return model.catInfo;
		},
		setCurrentCat: function(){

		},
		incrementCounter: function(){
			var cats = getCats();
			var catInfo = getCatInfo();
			for (i = 0; i < cats.length; i++) {		
				// clear out previous click count text and increment the click count number when user clicks on the image
				document.getElementById("catPic").onclick = function(){
					$("#catNumClick").text("");
					catInfo[catID].numClick++;
					$("#catNumClick").append("Number of clicks: "+ catInfo[catID].numClick);
				}
			}
		},
		// selectCat: function() {
		

		// 	for (i = 0; i < cats.length; i++) {				
		// 		// add event listener 
		// 		catElementLink.addEventListener('click', function(){
		// 			//hide the hint
		// 			$("#hint").hide();
		// 			//get id
		// 			var catID = $(this).attr('id');

		// 			// clear out previous text
		// 			$("#catName").text("");
		// 			$("#catPic").text("");
		// 			$("#catNumClick").text("");

		// 			// append name, pic and click count
		// 			$("#catName").append("Cat name: " +catID);
		// 			$("#catNumClick").append("Number of clicks: "+ catInfo[catID].numClick); 
		// 			$("#catPic").append('<img src="'+  catInfo[catID].pic +'">');
		// 		});
		// 	}
		// },
		addClickCount: function(){
			
		
		}
	};

	var catListView = {
		// init gets called once
		init: function(){
			this.cats = octopus.getCats();
			this.catInfo = octopus.getCatInfo();
			console.log(this.catInfo);

			this.render();							
		},
		render: function(){
			//create catSelection and displayArea
			this.catInfo = octopus.getCatInfo();
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
					var catID = $(this).attr('id');console.log(this.catInfo);
					console.log("catID is "+ catID);
					console.log(this.catInfo[catID]);

					// clear out previous text
					$("#catName").text("");
					$("#catPic").text("");
					$("#catNumClick").text("");

					// append name, pic and click count
					$("#catName").append("Cat name: " +catID);
					console.log(this.catInfo);
					$("#catNumClick").append("Number of clicks: "+ this.catInfo[catID].numClick); 
					$("#catPic").append('<img src="'+  this.catInfo[catID].pic +'">');
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
			this.cats = octopus.getCats();
			this.catInfo = octopus.getCatInfo();
			this.catElementLink = document.createElement('a');
			this.render();
		},
		render: function(){	


		}
	}	
	octopus.init();
});	
