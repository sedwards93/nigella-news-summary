
const API_URL = "https://content.guardianapis.com/search?show-fields=thumbnail&q=Nigella%20Lawson&api-key=";

async function getNigella() {
  const response = await fetch(API_URL + API_KEY).catch(() => {
    console.log('Error in fetching api data');
  });
  if (response) {
    const responseData = await response.json();
    console.log(responseData);
    responseData.response.results.forEach(article => {
      const articleFormatted = document.createElement('div');
      articleFormatted.innerHTML = `
        <a href="${article.webUrl}" target="_blank" class="link">
        <div class="card">
        <h2 class="cardtitle">${article.webTitle}</h2>
        <img src="${article.fields.thumbnail}" class="cardimg" loading=lazy>
        <p class="carddate">${(article.webPublicationDate).slice(0,10)}</p>
        </div>
        </a>
        </div>
    `;
      document.body.appendChild(articleFormatted)
    });
  };
};

getNigella()
  
