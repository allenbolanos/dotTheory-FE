async function renderCategories() {
  const $patchNotes = document.querySelector('.patch-notes');
  const $episodeUpdates = document.querySelector('.episode-updates');
  const $agentInsights = document.querySelector('.agent-insights');

  const response = await fetch('./data/articles.json');
  const data = await response.json();

  const { articles } = data;

  articles.forEach(e => {
    {$patchNotes 
      ? $patchNotes.innerHTML += `
          ${e.type === 'Patch_Notes' 
            ? `<a class="article-card" href="${e.content_link}">
                <img class="article-card__image" src="${e.image_src}">
                <div class="article-card__details">
                  <p class="article-card__number">0${e.number}</p>
                  <p class="article-card__date">${e.date}</p>
                  <p class="article-card__title">${e.title}</p>
                </div>
              </a>`
            : ''
          }
        `
      : $episodeUpdates ? 
        $episodeUpdates.innerHTML += `
          ${e.type === 'Episode_Updates' 
            ? `<a class="article-card" href="${e.content_link}">
                <div class="article-card">
                  <img class="article-card__image" src="${e.image_src}">
                  <div class="article-card__details">
                    <p class="article-card__number">0${e.number}</p>
                    <p class="article-card__date">${e.date}</p>
                    <p class="article-card__title">${e.title}</p>
                  </div>
                </div>
              </a>`
            : ''
          }
        `
      : $agentInsights ? 
        $agentInsights.innerHTML += `
          ${e.type === 'Agent_Insights' 
            ? `<a class="article-card" href="${e.content_link}">
                <div class="article-card">
                  <img class="article-card__image" src="${e.image_src}">
                  <div class="article-card__details">
                    <p class="article-card__number">0${e.number}</p>
                    <p class="article-card__date">${e.date}</p>
                    <p class="article-card__title">${e.title}</p>
                  </div>
                </div>
              </a>`
            : ''
          }
        `
      : ""
    }
  });
}

renderCategories();
