const main = document.getElementsByTagName('main');

// because you should have a way to decide what type of "template" you want
const layout = () => {
  const el = main[0];

  const isAuthorPage = () => {
    return !!el.querySelector('div.author-page');
  };

  const isHomePage = () => {
    return !!el.querySelector('div.homepage');
  };

  wrapSections = () => {
    let blogHeroImg = {};
    let blogTitle = {};
    let blogAuthor = {};
    let blogBody = [];

    // convert HTML Collection to iterable list for easier DOM Manipulation
    const els = [...el.children];

    if (isAuthorPage()) {
      console.log('authorpage');
      el.classList.add('author-page__base');
      const authorTeaser = document.createElement('section');
      authorTeaser.classList.add('author-teaser__base');
      const authorImg = el.lastChild.querySelector('img');
      const authorImgWrapper = document.createElement('div');
      const authorBioWrapper = document.createElement('div');

      el.appendChild(authorTeaser);
      authorTeaser.appendChild(authorImgWrapper);
      authorImgWrapper.appendChild(authorImg);

      const authorData = [...el.children];
      authorData.pop();
      authorTeaser.appendChild(authorBioWrapper);
      authorData.forEach((child) => {
        authorBioWrapper.appendChild(child)
      });

    } else if (isHomePage()) {
      console.log('homepage');
    } else {
      console.log('blogpage');
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
            blogBody.push(element);
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
      if (blogBody.length > 0) {
        blogBody.forEach((body) => {
          blogBodyDiv.appendChild(body);
        });
      }
      if (blogAuthor && blogAuthor.childElementCount > 0) {
        aside.appendChild(blogAuthor);
        const blogAuthorLink = blogAuthor.getElementsByTagName('a')[0];
        blogAuthorLink.href = blogAuthorLink.href.replace(/^mailto:([^@]*).*$/i, '/authors/$1.html');
      }
    }
  }
  wrapSections();
}

// run layout
layout();
