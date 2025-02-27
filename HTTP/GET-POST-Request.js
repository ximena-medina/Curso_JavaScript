"--------------------------------------------------> Estamos generando las variables de cada uno de nuestros elementos"
const ListElement  = document.
querySelector(".posts")
const postTemplate = document.
getElementById("single-post")
const form =  document.querySelector
("#new-post form")
const fetchButton = document.
querySelector("#avaliable-posts button")
const postList = document.querySelector
("#posts-container")

function sendHTTPRequest (method, url, data) {
    return fetch(url, {
        method: method, 
        body: JSON.stringify(data), // envia la informacion directo al servidor
        headers: {
            "Content-Type": "application/json"
        }, 
    }) .then((response) => {
        return response.json()
    })
}


async function fetchPosts() {
    const responseData = await
    sendHTTPRequest (
        "GET",
        "https://jsonplaceholder.typicode.com/posts",
    )
    console.log(responseData)
    const listOfPosts = responseData

    for(const post of listOfPosts) {
        const postContainer = document.
        createElement("article")
        postContainer.id = post.id
        postContainer.classList.add
        ("post-item")

        const title = document.createElement
        ("h2")
        title.textContent = post.title

        const body = document.createElement
        ("p")
        body.textContent = post.body

        const button = document.createElement
        ("button")
        button.textContent = "DELETE Content"

        postContainer.append(title)
        postContainer.append(body)
        postContainer.append(button)

        ListElement.append(postContainer)

    }
}

fetchButton.addEventListener("click", fetchPosts) //Estructira que estara envaindo el pull request 
function createPost(title, Content) {
    const userId = Math.random()
    const post = {
        title: title,
        body: Content,
        button: userId
    };
    sendHTTPRequest ("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

form.addEventListener("submit", (even) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value
    const Content = event.currentTarget.querySelector("#Content")

    createPost(title, Content)
})

postList = addEventListener("click", (even) => {
    console.log(event)
})