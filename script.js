const apiKey='fad472fc39204c97a7cb8968993a6c5a';

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    try{
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.articles;
        console.log(data);


    }catch(error){
        console.error("Error fetching random news", error)
        return []

    }
}

function displayBlogs(articles){
    blogContainer.innerHTML=""
    articles.forEach((articles)=>{
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card")
        const img = document.createElement("img")
        img.src = articles.urlToImage
        img.alt = articles.title
        const title = document.createElement("h2")
        title.textContent=articles.title
        const description = document.createElement("p")
        description.textContent = articles.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard); 
    })
}

(async ()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);

    }catch(error){
        console.error("Error fetching random news", error);
     }

})();