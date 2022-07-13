async function init() {
  const $content = document.querySelector('.content-container');

  const response = await fetch('content.json');
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

init();