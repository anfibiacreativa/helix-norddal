const main = document.getElementsByTagName('main');

// because you should have a way to decide what type of "template" you want
const layout = () => {
  const el = main[0];
  const isBlog = () => {
    return el.firstChild.className !== 'author-page';
  }
  wrapSections = () => {

    const section = document.createElement('section');
    const aside = document.createElement('aside');
    const blogBodyDiv = document.createElement('div');
    const authorTeaser = document.createElement('div');

    let blogHeroImg = {};
    let blogTitle = {};
    let blogAuthor = {};
    let blogBody = {};

    // convert HTML Collection to iterable list for easier DOM Manipulation
    const els = [...el.children];

    if (els && els.length > 0) {
      els.forEach((element) => {
        if (element.className.indexOf('blog-author') >= 0) {
          blogAuthor = element;
        }
        else if (element.querySelector('img')) {
          blogHeroImg = element;
        }
        else if (element.querySelector('h1')) {
          blogTitle = element;
        } else {
          blogBody = element;
        }
      })
    }
    // empty main from content
    el.innerHTML = '';

    // create a new section and append the necessary divs
    

    if (isBlog) {
      if (blogHeroImg) {
        el.appendChild(blogHeroImg);
      }
      el.appendChild(section);
      section.appendChild(aside);
      section.appendChild(blogBodyDiv);

      if (blogTitle) {
        blogBodyDiv.appendChild(blogTitle);
      }
      if (blogBody) {
        blogBodyDiv.appendChild(blogBody);
      }
      if (blogAuthor) {
        aside.appendChild(blogAuthor);
      }
    } else {
      // probably should rename variables to make them more generic
      el.appendChild(authorTeaser);
      authorTeaser.appendChild(blogHeroImg);
      authorTeaser.appendChild(blogBody);
    }
  }
  wrapSections();
}

// run layout
layout();
