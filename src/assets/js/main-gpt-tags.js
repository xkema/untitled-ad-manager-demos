const ShinyCategory = ((window, document) => {
  return {

    /**
     * Boot things up :)
     */
    init: () => {
      console.log('ShinyCategory template initialized!');
      // show/hide containers
      const btnToggleCodeSnippets = document.getElementById('toggle-code-snippets');
      btnToggleCodeSnippets.addEventListener('click', () => {
        const codeSnippetContainers = document.querySelectorAll('.code-explanation');
        codeSnippetContainers.forEach((container) => {
          container.classList.toggle('hidden');
        });
      });
      // hide popup
      const btnClosePopup = document.querySelector('#slot-container-popup button.close');
      btnClosePopup.addEventListener('click', (event) => {
        const targetSlotContainer = event.target.closest('.slot-container');
        targetSlotContainer.classList.add('hidden');
      });
    }

  };
})(window, document);

// app initialization
document.addEventListener('DOMContentLoaded', ShinyCategory.init);