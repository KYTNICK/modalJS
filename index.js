const options = {
  title: "Modal Title",
  closable: true,
  content: `
  <div class="modal-body">
  <p>Lorem ipsum dolor sit.</p>
  <p>Lorem ipsum dolor sit.</p>
</div>
<div class="modal-footer">
  <button>OK</button>
  <button>Cancel</button>
</div>
  `,
  width: "400px",
};

const modal = $.modal(options);
