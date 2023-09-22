	var slideImg = document.getElementById('slideImg');
	
		var img = new Array(
			"./image/electic1.webp",
			"./image/painter1.jpg",
			"./image/roofing.jpg",
			"./image/plumber.jpg"
			);

		var len = img.length;
		var i = 0;
		function slider(){
			if(i>len-1){
				i=0;
			}
			slideImg.src = img[i];
			i++;
			setTimeout("slider()",3000);

			// body...
		}