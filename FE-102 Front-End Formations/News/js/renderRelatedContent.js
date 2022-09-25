async function renderRelatedContentData() {
  const $relatedContent = document.querySelector('.related-content-cards-container');

  const response = await fetch('../data/related-content.json');
  const data = await response.json();

  const { relatedContent } = data;

  relatedContent.forEach(e => {
    $relatedContent.innerHTML += `
      <a href="${e.contentLink}">
        <div class="related-content-card">
          <img src="${e.imageSrc}">
          <div class="related-content-details">
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
