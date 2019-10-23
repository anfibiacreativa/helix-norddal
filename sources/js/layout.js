const types = ['page', 'blog'];

const main = document.getElementsByTagName('main');
const blogAuthor = document.querySelector('.blog-author');

// because you should have a way to decide what type of "template" you want
const layout = (type = 'blog') => {
  if (type === 'blog') {
    console.log(`####### I am a ${type} #######`);

    wrapSections = () => {
      const el = main[0];
      const nodes = Array.from(el.childNodes);

      const blog = [];
      nodes.forEach((item) => {
        let content = item.innerHTML;
        if (content) {
          blog.push(item.innerHTML);
        }
      });

      const section = document.createElement('section');
      const aside = document.createElement('aside');
      const blogBody = document.createElement('div');
      // empty main from content
      el.innerHTML = '';
      // create a new section and append the necessary divs
      el.appendChild(section);
      section.appendChild(aside);
      section.appendChild(blogBody);

      const blogHeroImg = blog.shift();
      // This can only be done, supposing we always have the same structure
      console.log({blogHeroImg});
      // This is reliable in that the author will always have the mailto attribute
      const blogAuthor = blog.filter(item => item.indexOf('mailto') > -1);
      // This can only be done, supposing we always have the same structure
      const blogTitle = blog[1];
      console.log({blogTitle});
      // const identifiedEls = [blogHeroImg[0], blogTitle[0], blogAuthor[0]];
      // Now we're left with the text
      // const blogText = blog.filter(item => !identifiedEls.includes(item));
      // We can also only do this if we consider having the full text as the last rendered div coming from the server
      const blogText = blog.pop();

      const blogContent = {
        image: blogHeroImg,
        author: blogAuthor,
        title: blogTitle,
        text: blogText
      }

      el.insertAdjacentHTML('afterbegin', blogContent.image);
      aside.insertAdjacentHTML('afterbegin', blogContent.author);
      blogBody.insertAdjacentHTML('afterbegin', blogContent.text);
      blogBody.insertAdjacentHTML('afterbegin', blogContent.title);
    }
    wrapSections();
  }
}

// run layout
layout();
