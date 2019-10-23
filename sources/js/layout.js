const types = ['page', 'blog'];

const main = document.getElementsByTagName('main');
const blogAuthor = document.querySelector('.blog-author');

// because you should have a way to decide what type of "template" you want
const layout = () => {
  const el = main[0];
  const isBlog = () => {
    return main[0].firstChild.className !== 'author-page';
  }
  if (isBlog()) {

    wrapSections = () => {

      const section = document.createElement('section');
      const aside = document.createElement('aside');
      const blogBody = document.createElement('div');

      let child = main[0].firstElementChild;
      let blogHeroImg = null;
      let blogTitle = null;
      while (child) {
        const next = child.nextElementSibling;
        if (child.className.indexOf('blog-author') >= 0) {
          aside.appendChild(child);
        } else if (!blogHeroImg && child.querySelector('img')) {
          blogHeroImg = child;
        } else if (!blogTitle && child.querySelector('h1')) {
          blogTitle = child;
        } else {
          blogBody.appendChild(child);
        }
        child = next;
      }

      // // what if it potentially has many h1's?
      // const titles = blog.filter(item => item.indexOf('<h1') > -1);
      // // what if it potentially has many images?
      // const images = blog.filter(item => item.indexOf('<img') > -1);
      //
      // empty main from content
      el.innerHTML = '';
      // create a new section and append the necessary divs
      if (blogHeroImg) {
        el.appendChild(blogHeroImg);
      }
      if (blogTitle) {
        blogBody.insertBefore(blogTitle, blogBody.firstChild);
      }
      el.appendChild(section);
      section.appendChild(aside);
      section.appendChild(blogBody);

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
}

// run layout
layout();
