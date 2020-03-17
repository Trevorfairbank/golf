// Scroll for Carousel Right
$("#controlR").click(function() {
  event.preventDefault();
  $("#content").animate(
    {
      marginLeft: "-=400px"
    },
    "fast"
  );
});
// Scroll for Carousel Left
$("#controlL").click(function() {
  event.preventDefault();
  $("#content").animate(
    {
      marginLeft: "+=400px"
    },
    "fast"
  );
});

function grabPlayers() {
  const url = "https://api.sportsdata.io/golf/v2/json/Tournaments";
  const APIkey = "e8002a8836fb43f684faa68920e51ca8";
  const req = new Request(url);
  fetch(req, {
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": APIkey
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const tournamentsContainer = document.getElementById("tournaments");

      tournamentsContainer.innerHTML = data
        .map(
          data => `
            <tr>
              <th scope="row">${data.StartDate}</th>
              <td>${data.Name}</td>
              <td>${data.Venue}</td>
              <td>${data.Location}</td>
          </tr>
        `
        )
        .join("");
    });
}
grabPlayers();

function grabArticles() {
  const url =
    "http://newsapi.org/v2/everything?q=golf&apiKey=70917140c9c647de8a3b29bc9039a5c6";
  const req = new Request(url);
  fetch(req)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const articleContainer = document.getElementById("article-container");

      articleContainer.innerHTML = data.articles
        .map(
          article => `
        <ul id="content">
          <li class="card effect1">
          <div class="inside-top">
          <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}"/>
          <h5 class="card-title"><a href="${article.url}">${article.title}</a></h5>
          <p class="card-text">${article.description}</p>
          </div>
          </li>
        </ul>
        `
        )
        .join("");
    })
    .catch(console.log);
}

function grabArticlesTwo() {
  const searchInput = document.getElementById("search-input");
  console.log(searchInput.value);
  const url = `http://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=70917140c9c647de8a3b29bc9039a5c6`;
  const req = new Request(url);
  fetch(req)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const articleContainerTwo = document.getElementById(
        "article-container-2"
      );

      articleContainerTwo.innerHTML = data.articles
        .map(
          article => `
        <ul id="content">
          <li class="card effect1">
          <div class="inside-top">
          <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}"/>
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.description}</p>
          <a href="${article.url}" class="btn btn-primary">Go to Article</a>
          </div>
          </li>
        </ul>
        `
        )
        .join("");
      console.log(searchInput.value);
      console.log(searchInput);
    })
    .catch(console.log);
}

grabArticles();
grabArticlesTwo();
