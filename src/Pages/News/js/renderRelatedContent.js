async function renderRelatedContentData() {
  const $relatedContent = document.querySelector('.related-content-section__cards-container');

  const response = await fetch('./data/related-content.json');
  const data = await response.json();

  const { relatedContent } = data;

  relatedContent.forEach(e => {
    $relatedContent.innerHTML += `
      <a class="article-card article-card--related-content" href="${e.contentLink}">
        <img class="article-card__image" src="${e.imageSrc}">
        <div class="article-card__details">
          <p class="article-card__number">0${e.number}</p>
          <p class="article-card__date">${e.date}</p>
          <p class="article-card__title">${e.title}</p>
        </div>
      </a>
    `
  });
}

renderRelatedContentData();
