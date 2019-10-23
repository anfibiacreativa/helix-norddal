const main = document.getElementsByTagName('main');

// because you should have a way to decide what type of "template" you want
const layout = () => {
  const el = main[0];
  const isBlog = () => {
    return el.lastChild.className.indexOf('author-page') === -1;
  }
  wrapSections = () => {
    let blogHeroImg = {};
    let blogTitle = {};
    let blogAuthor = {};
    let blogBody = {};

    // convert HTML Collection to iterable list for easier DOM Manipulation
    const els = [...el.children];

    if (isBlog()) {
      // create a new section and append the necessary divs
      const section = document.createElement('section');
      const aside = document.createElement('aside');
      const blogBodyDiv = document.createElement('div');

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
        });
      }
      // empty main from content
      el.innerHTML = '';

      if (blogHeroImg) {
        el.appendChild(blogHeroImg);
      }
      el.appendChild(section);
      section.appendChild(aside);
      section.appendChild(blogBodyDiv);

      if (blogTitle && blogTitle.childElementCount > 0) {
        blogBodyDiv.appendChild(blogTitle);
      }
      if (blogBody && blogBody.childElementCount > 0) {
        blogBodyDiv.appendChild(blogBody);
      }
      if (blogAuthor && blogAuthor.childElementCount > 0) {
        aside.appendChild(blogAuthor);
      }
    } else {
      // const authorTeaser = document.createElement('section');
      // const authorImg = el.lastChild.querySelector('img');
      //
      // console.log({authorImg});
      // el.appendChild(authorTeaser);
      // authorTeaser.appendChild(authorImg);
      //
      // const authorData = [...el.children];
      // authorData.forEach((child) => {
      //   authorTeaser.appendChild(child)
      // });
    }
  }
  wrapSections();
}

// run layout
layout();
