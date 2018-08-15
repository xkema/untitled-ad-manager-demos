const Shiny = ((window, document) => {
  return {
    /**
     *
     */
    init: () => {
      console.log('Shiny template initialized!');
      // show/hide containers
      const btnHideSlotContainers = document.getElementById('hide-slot-containers');
      const btnShowSlotContainers = document.getElementById('show-slot-containers');
      btnHideSlotContainers.addEventListener('click', Shiny.hideSlotContainers);
      btnShowSlotContainers.addEventListener('click', Shiny.showSlotContainers);
      // hide popup
      const btnClosePopup = document.querySelector('#slot-container-popup button.close');
      btnClosePopup.addEventListener('click', Shiny.closeSingleSlotContainer);
      // toggle sticky nav
      const btnToggleStickyNav = document.getElementById('toggle-sticky-nav');
      btnToggleStickyNav.addEventListener('click', Shiny.toggleStickyNavigation);
      // show popup ccontainer
      const btnShowPopupContainer = document.getElementById('show-popup-container');
      btnShowPopupContainer.addEventListener('click', Shiny.showPopupContainer);
    },

    /**
     * Hides all slot containers on a page 
     */
    hideSlotContainers: () => {
      const slots = document.querySelectorAll('.slot-container');
      slots.forEach((slot) => {
        slot.classList.add('hidden');
      });
    },

    /**
     * Shows all slot containers on a page 
     */
    showSlotContainers: () => {
      const slots = document.querySelectorAll('.slot-container');
      slots.forEach((slot) => {
        slot.classList.remove('hidden');
      });
    },

    /**
     * Shows popup container only
     */
    showPopupContainer: () => {
      const slot = document.getElementById('slot-container-popup');
      slot.classList.remove('hidden');
    },

    /**
     * Closes a single container
     */
    closeSingleSlotContainer: (event) => {
      const targetSlotContainer = event.target.closest('.slot-container');
      targetSlotContainer.classList.add('hidden');
    },

    /**
     * Scroll watcher utility
     */
    scrollWatcher: () => {
      const stickyContainer = document.querySelector('.sticky-container:not(.hidden)');
      let stuckPosition = 0;
      if(null !== stickyContainer) {
        const stickyContainerWrapper = stickyContainer.querySelector('.sticky-container-wrapper');
        if(null !== stickyContainerWrapper) {
          stuckPosition = parseInt(stickyContainerWrapper.dataset.sticky);
          const rect = stickyContainer.getBoundingClientRect();
          if(stuckPosition >= rect.top) {
            stickyContainerWrapper.classList.add('container-stuck');
            stickyContainerWrapper.style.top = `${stuckPosition}px`;
          } else {
            stickyContainerWrapper.classList.remove('container-stuck');
            stickyContainerWrapper.style.top = 'unset';
          }
        }
      }
    },

    /**
     * Toggles sticky navigation
     */
    toggleStickyNavigation: (event) => {
      const siteNavigationContainerToBeSticky = document.querySelector('#stick-top-top-as-nav');
      event.target.classList.toggle('button-primary');
      siteNavigationContainerToBeSticky.classList.toggle('stick-top-top-as-nav');
    },

  };
})(window, document);

// app initialization
document.addEventListener('DOMContentLoaded', Shiny.init);

// scroll watcher
document.addEventListener('scroll', Shiny.scrollWatcher);