fetch("https://jsonplaceholder.typicode.com/posts") //Josonplaceholder, nos permite crear informacion falsa desde una API.
.then((response) => response.json())
.then((data) => console.log(data))

//<script src="http.js"></script>