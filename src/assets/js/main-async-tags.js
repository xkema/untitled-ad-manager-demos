const ShinyCategoryWithAds = ((window, document) => {
  return {

    /**
     * Boot things up :)
     */
    init: () => {
      console.log('ShinyCategoryWithAds template initialized!');
      // show/hide containers
      const btnRefreshAdSlots = document.getElementById('refresh-ad-slots');
      btnRefreshAdSlots.addEventListener('click', () => {
        googletag.pubads().refresh();
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
document.addEventListener('DOMContentLoaded', ShinyCategoryWithAds.init);