async function fetchContentData() {
  const $content = document.querySelector('.content-container');

  const response = await fetch('../../data/content.json');
  const data = await response.json();

  const { content } = data;

  content.forEach(e => {
    $content.innerHTML += `
      <div>
        <p>${e.subtitle}</p>
        ${e.video !== null ? e.video : ''}
        <p>${e.description}</p>
        ${e.additionalDescription !== null 
          ? `<p class="add-desc">${e.additionalDescription}</p>` 
          : ''
        }
        ${e.optionalLink !== null 
          ? `<a href="${e.optionalLink}">${e.optionalLinkText}</a>` 
          : ''
        }
        ${e.imageSrc !== null 
          ? `<img src="${e.imageSrc}">` 
          : ''
        }
      </div>
    `
  });
}

fetchContentData();

async function fetchRelatedContentData() {
  const $relatedContent = document.querySelector('.related-content-cards-container');

  const response = await fetch('../../data/related-content.json');
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

fetchRelatedContentData();
