(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Franchise-modal

(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector(
      '[data-franchise-modal-open]'
    ),
    closeFranchiseModalBtn: document.querySelector(
      '[data-franchise-modal-close]'
    ),
    FranchiseModal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openFranchiseModalBtn.addEventListener('click', toggleModal);
  refs.closeFranchiseModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.FranchiseModal.classList.toggle('is-hidden');
  }
})();

// Location-modal

(() => {
  const refs = {
    openLocationModalBtn: document.querySelector('[data-location-modal-open]'),
    closeLocationModalBtn: document.querySelector(
      '[data-location-modal-close]'
    ),
    LocationModal: document.querySelector('[data-location-modal]'),
  };

  refs.openLocationModalBtn.addEventListener('click', toggleModal);
  refs.closeLocationModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.LocationModal.classList.toggle('is-hidden');
  }
})();

// Ingredients-modal

(() => {
  const refs = {
    openIngredientsModalBtn: document.querySelector(
      '[data-ingredients-modal-open]'
    ),

    closeIngredientsModalBtn: document.querySelector(
      '[data-ingredients-modal-close]'
    ),
    IngredientsModal: document.querySelector('[data-ingredients-modal]'),
  };

  refs.openIngredientsModalBtn.addEventListener('click', toggleModal);
  refs.closeIngredientsModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.IngredientsModal.classList.toggle('is-hidden');
  }
})();

// Buy now-modal

(() => {
  const refs = {
    openIngredientsModalBtn: document.querySelector('[data-buy-modal-open]'),
    closeIngredientsModalBtn: document.querySelector('[data-buy-modal-close]'),
    IngredientsModal: document.querySelector('[data-buy-modal]'),
  };

  refs.openIngredientsModalBtn.addEventListener('click', toggleModal);
  refs.closeIngredientsModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.IngredientsModal.classList.toggle('is-hidden');
  }
})();

// Buy now-modal 2

(() => {
  const refs = {
    openIngredientsModalBtn: document.querySelector('[data-buy2-modal-open]'),
    closeIngredientsModalBtn: document.querySelector('[data-buy2-modal-close]'),
    IngredientsModal: document.querySelector('[data-buy2-modal]'),
  };

  refs.openIngredientsModalBtn.addEventListener('click', toggleModal);
  refs.closeIngredientsModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.IngredientsModal.classList.toggle('is-hidden');
  }
})();
