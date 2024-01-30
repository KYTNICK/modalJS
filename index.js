const fruits = [
  {
    id: 1,
    title: "Apples",
    price: 5,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.dom-eda.com%2Fingridient%2Fitem%2Fyabloko.html&psig=AOvVaw1jpaiT64hagwg8Aj3CtJze&ust=1706713834433000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCs0dCyhYQDFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    title: "Orange",
    price: 35,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fervalle.com%2Fen%2Forange%2F&psig=AOvVaw27G3Faw-aW25hY5Sbf5nR5&ust=1706713900797000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjaqPCyhYQDFQAAAAAdAAAAABAE",
  },
  {
    id: 3,
    title: "Mango",
    price: 5,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbefreshcorp.net%2Fru%2Fproduct%2Fmango%2F&psig=AOvVaw0pdFqZt3Hmxv4k_hSMULKF&ust=1706713931419000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPD-_P6yhYQDFQAAAAAdAAAAABAE",
  },
];

const modal = $.modal({
  title: "Modal Title",
  closable: true,
  content: `
  <p>Lorem ipsum dolor sit.</p>
  <p>Lorem ipsum dolor sit.</p>

  `,
  width: "",
  footerButtons: [
    {
      text: "Ok",
      type: "primary",
      handler() {
        console.log("primary btn clicked");
        modal.close();
      },
    },
    {
      text: "Cancel",
      type: "danger",
      handler() {
        console.log("danger btn clicked");
        modal.close();
      },
    },
  ],
});
