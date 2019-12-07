const marked = require("marked");

const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");

const createDOMPurify = require("dompurify");
const DOMPurify = createDOMPurify(window);

const renderToMarkdown = async text => {
  const clean = DOMPurify.sanitize(text);
  htmlView.innerHTML = marked(clean);
};

markdownView.addEventListener("keyup", e => {
  const current = e.target.value;

  renderToMarkdown(current);
});
