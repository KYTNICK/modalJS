function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">${options.title}</span>
          <span class="modal-close">&times;</span>
        </div>
      </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);
  //===

  const animationSpeed = 500;
  const modalOpenBtn = document.querySelectorAll(".vmodal-open");
  const modalCloseBtn = document.querySelector(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalWindow = document.querySelector(".modal-window");
  //===
  if (options.closable && options.closable === true) {
    modalCloseBtn.addEventListener("click", () => {
      modal.close();
    });
  } else {
    modalCloseBtn.remove();
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modal.close();
    }
  });
  document.addEventListener("keydown", (key) => {
    if (key.code === "Escape" && !closing) {
      modal.close();
    }
  });
  modalOpenBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.open();
    });
  });
  modalWindow.style.width = options.width;
  let closing = false;
  return {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, animationSpeed);
    },
    destroy() {
      modalCloseBtn.removeEventListener("click", closeModal);
      modalOverlay.removeEventListener("click", closeModal);
      document.removeEventListener("keydown", keydownHandler);

      $modal.remove();
    },
  };
};
