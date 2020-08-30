const keywordTagClass = '.backflip_keyword-tag';
const titleTagClass = '.backflip_title-tag';
// eslint-disable-next-line no-undef
const main = new Main();

const data = [
  {'name': 'Dev Only', 'color': '#FF0000'},
  {'name': 'APlus', 'color': '#00FF00'},
  {'name': 'RSpec', 'color': '#FF00FF'},
]

main.initialize(data);

main.renderKeywordTags();
main.renderTitleTags();

document.addEventListener('click', function (event) {
  let elem = event.target;
  let isSearch = false;

  if (event.target.matches(keywordTagClass))
    isSearch = true;
  else if (event.target.matches(titleTagClass))
    isSearch = false;
  else return;

  main.insertTag(elem, isSearch);
}, false);
