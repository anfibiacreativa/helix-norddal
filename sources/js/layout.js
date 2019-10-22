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

      const blogAuthor = blog.filter(item => item.indexOf('mailto') > -1);
      const blogHeroImg = blog.filter(item => item.indexOf('<img') > -1);
      const blogTitle = blog.filter(item => item.indexOf('<h1') > -1);
      const identifiedEls = [blogHeroImg[0], blogTitle[0], blogAuthor[0]];
      const blogText = blog.filter(item => !identifiedEls.includes(item));

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
