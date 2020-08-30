const keywordInput = document.querySelector('#findIssueKeyword .input-text');
const titleInput = '';

class Main {
  initialize(data) {
    this.data = data;
  };

  renderKeywordTags() {
    let tags = this.data;
    let inputDiv = document.querySelector('#findIssueKeyword');
    if(!inputDiv) return;

    tags.forEach(tag => {
      if(tag.name) {
        let keywordTag = document.createElement('span');

        keywordTag.className = "backflip_keyword-tag status -small";
        keywordTag.style.backgroundColor = tag.color;
        keywordTag.dataset.backflipTag = tag.name;
        keywordTag.innerHTML = tag.name;

        inputDiv.appendChild(keywordTag);
      }
    });
  };

  renderTitleTags() {
  };

  replaceTitleTags() {
  };

  insertTag(elem, isSearch) {
    let tag = elem.dataset.backflipTag;
    let input = isSearch ? keywordInput : titleInput
    let inputValue = input.value;
    let formattedTag = '[' + tag + '] ';

    input.value = inputValue + formattedTag;
    input.focus();
  };
};
