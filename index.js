let fruits = [
  {
    id: 1,
    title: "Apples",
    price: 5,
    img: "https://www.applesfromny.com/wp-content/uploads/2020/05/Fortune_NYAS-Apples2.png",
  },
  {
    id: 2,
    title: "Orange",
    price: 35,
    img: "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
  },
  {
    id: 3,
    title: "Mango",
    price: 5,
    img: "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-mango.jpg",
  },
];

const toHTML = (fruit) => `
<div class="col">
<div class="card">
  <img
    src="${fruit.img}"
    class="card-img-top"
    alt="${fruit.title}"
    style="max-width: 100%; height: 300px"
  />
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>

    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Price</a>
    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
  </div>
</div>
</div>
`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}
render();

const priceModal = $.modal({
  title: "The price of the product",
  closable: true,

  width: "400px",
  footerButtons: [
    {
      text: "Close",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  const btnType = e.target.dataset.btn;
  const id = +e.target.dataset.id;
  const fruit = fruits.find((f) => f.id === id);

  if (btnType === "price") {
    priceModal.setContent(
      `
        <p>The price of ${fruit.title}: <strong>${fruit.price}$</strong></p>
      `
    );

    priceModal.open();
  } else if (btnType === "remove") {
    $.confirm({
      title: "Are you sure?",
      content: `
      <p>You want to <strong>${fruit.title}</strong></p>
      `,
    })
      .then(() => {
        fruits = fruits.filter((f) => f.id !== id);
        render();
      })
      .catch(() => {
        console.log("cancel");
      });
  }
});
