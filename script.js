fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-03-25&sortBy=publishedAt&apiKey=1eeb0a12ba55431eb37081826c65061e')
		.then(r => r.json())
		.then(data => {

			var template = document.getElementById("temp").innerHTML;
			var html = Mustache.render(template, data);
			document.querySelector("#row").innerHTML = html;
			
		});