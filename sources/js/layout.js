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

    // // This can only be done, supposing we always have the same structure
    // const blogHeroImg = images[0] || '';
    // // This is reliable in that the author will always have the mailto attribute
    // const blogAuthor = blog.filter(item => item.indexOf('mailto') > -1) || '';
    // // This can only be done, supposing we always have the same structure
    // const blogTitle = titles[0] || '';
    // // Now we're left with the text
    // const blogRelated = blog.filter(item => item.indexOf('blog-topics') > -1) || '';
    // // collect all identified items so we can exclude the rest
    // const identifiedEls = [blogHeroImg, blogTitle, blogAuthor[0], blogRelated[0]];
    // console.log({blogRelated});
    // const blogText = blog.filter(item => !identifiedEls.includes(item)) || '';
    // // We can also only do this if we consider having the full text as the last rendered div coming from the server
    // // At first I thought to pop the last item, but now we have the related topics list as a different element
    // //const blogText = blog.pop();
    //
    // // We want to have a destructured object to be able to better target elements in the future, should we apply further transformations
    // const blogContent = {
    //   image: blogHeroImg,
    //   author: blogAuthor,
    //   title: blogTitle,
    //   text: blogText,
    //   related: blogRelated
    // }
    //
    // el.insertAdjacentHTML('afterbegin', blogContent.image);
    // aside.insertAdjacentHTML('afterbegin', blogContent.author);
    // blogBody.insertAdjacentHTML('afterbegin', blogContent.text);
    // blogBody.insertAdjacentHTML('afterbegin', blogContent.title);
  }
  wrapSections();
}

// run layout
layout();
