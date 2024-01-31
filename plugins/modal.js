const noop = () => {};

function _createModalFooter(buttons = []) {
  if (buttons.length === 0) {
    return document.createElement("div");
  }
  const wrap = document.createElement("div");
  wrap.classList.add("modal-footer");

  buttons.forEach((btn) => {
    const footerButton = document.createElement("button");
    footerButton.textContent = btn.text;
    footerButton.classList.add("btn");
    footerButton.classList.add("modal-footer__button");
    footerButton.classList.add(`btn-${btn.type || "secondary"}`);
    footerButton.onclick = btn.handler || noop;
    wrap.appendChild(footerButton);
  });
  return wrap;
}

function _createModal(options) {
  const defaultWidth = "500px";
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay" data-close='true'>
      <div class="modal-window" style="max-width: ${
        options.width || defaultWidth
      }">
        <div class="modal-header">
          <h1 class="modal-title">${options.title || "Window"}</h1>
          ${
            options.closable
              ? `<span class="modal-close" data-close='true'>&times;</span>`
              : ""
          }
        </div>
        <div class="modal-body" data-content>
        ${options.content || ""}
      </div>
      </div>
    </div>
  `
  );
  const modalBody = modal.querySelector(".modal-body");

  const footer = _createModalFooter(options.footerButtons);
  modalBody.after(footer);
  document.body.appendChild(modal);
  return modal;
}

$.modal = (options) => {
  const $modal = _createModal(options);

  const animationSpeed = 600;
  let closing = false;
  let destroyed = false;
  const modal = {
    open() {
      if (destroyed) {
        return console.log("modal is destroyed");
      }
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.add("hide");

      setTimeout(() => {
        $modal.classList.remove("hide");
        $modal.classList.remove("open");

        closing = false;
        if (typeof options.onClose === "function") {
          console.log(typeof options.onClose());
          options.onClose();
        }
      }, animationSpeed);
    },
  };

  //==
  const listener = (e) => {
    if (e.target.dataset.close) {
      modal.close();
    }
  };
  //==

  document.addEventListener("keydown", (key) => {
    if (key.code === "Escape" && !closing) {
      modal.close();
    }
  });

  $modal.addEventListener("click", listener);

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal);
      $modal.removeEventListener("click", listener);
      destroyed = true;
    },
    setContent(html) {
      $modal.querySelector("[data-content]").innerHTML = html;
    },
  });
};
