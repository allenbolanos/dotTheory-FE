async function renderContentData() {
  const $content = document.querySelector('.ep5act1-content-section');

  const response = await fetch('./data/content.json');
  const data = await response.json();

  const { content } = data;

  content.forEach(e => {
    $content.innerHTML += `
      <p class="ep5act1-content-section__subtitle">${e.subtitle}</p>
      ${e.video !== null ? e.video : ''}
      <p class="ep5act1-content-section__description">${e.description}</p>
      ${e.additionalDescription !== null 
        ? `<p class="ep5act1-content-section__description ep5act1-content-section__description--additional">${e.additionalDescription}</p>` 
        : ''
      }
      ${e.optionalLink !== null 
        ? `<a class="ep5act1-content-section__link ep5act1-content-section__link--optional" href="${e.optionalLink}">${e.optionalLinkText}</a>` 
        : ''
      }
      ${e.imageSrc !== null 
        ? `<img class="ep5act1-content-section__image" src="${e.imageSrc}">` 
        : ''
      }
    `
  });
}

renderContentData();
