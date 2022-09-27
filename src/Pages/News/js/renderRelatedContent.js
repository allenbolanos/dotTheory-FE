async function renderRelatedContentData() {
  const $relatedContent = document.querySelector('.related-content-cards-container');

  const response = await fetch('../data/related-content.json');
  const data = await response.json();

  const { relatedContent } = data;

  relatedContent.forEach(e => {
    $relatedContent.innerHTML += `
      <a href="${e.contentLink}">
        <div id="related-content-card" class="article-card">
          <img src="${e.imageSrc}">
          <div class="article-card-details">
            <p>0${e.id}</p>
            <p>${e.date}</p>
            <p>${e.title}</p>
          </div>
        </div>
      </a>
    `
  });
}

renderRelatedContentData();
