async function renderCategories() {
  const $patchNotes = document.querySelector('.patch-notes');
  const $episodeUpdates = document.querySelector('.episode-updates');
  const $agentInsights = document.querySelector('.agent-insights');

  const response = await fetch('../data/articles.json');
  const data = await response.json();

  const { articles } = data;

  articles.forEach(e => {
    {$patchNotes 
      ? $patchNotes.innerHTML += `
          ${e.type === 'Patch_Notes' 
            ? `<a href="${e.content_link}">
                <div class="article-card">
                  <img src="${e.image_src}">
                  <div class="article-card-details">
                    <p>0${e.number}</p>
                    <p>${e.date}</p>
                    <p>${e.title}</p>
                  </div>
                </div>
              </a>`
            : ''
          }
        `
      : $episodeUpdates ? 
        $episodeUpdates.innerHTML += `
          ${e.type === 'Episode_Updates' 
            ? `<a href="${e.content_link}">
                <div class="article-card">
                  <img src="${e.image_src}">
                  <div class="article-card-details">
                    <p>0${e.number}</p>
                    <p>${e.date}</p>
                    <p>${e.title}</p>
                  </div>
                </div>
              </a>`
            : ''
          }
        `
      : $agentInsights ? 
        $agentInsights.innerHTML += `
          ${e.type === 'Agent_Insights' 
            ? `<a href="${e.content_link}">
                <div class="article-card">
                  <img src="${e.image_src}">
                  <div class="article-card-details">
                    <p>0${e.number}</p>
                    <p>${e.date}</p>
                    <p>${e.title}</p>
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
