const types = ['page', 'blog'];

const main = document.getElementsByTagName('main');
const blogAuthor = document.querySelector('.blog-author');

// because you should have a way to decide what type of "template" you want
const layout = (type = 'blog') => {
  if (type === 'blog') {
    console.log(`####### I am a ${type} #######`);

    wrapSections = () => {
      imgIndexNext = 2;
      const el = main[0];
      const nodes = Array.from(el.childNodes);
      nodes.slice(imgIndexNext, -1);

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

      el.appendChild(section);
      section.appendChild(aside);
      section.appendChild(blogBody);

      const blogContent = {
        author: blog[1],
        title: blog[2],
        text: blog[3]
      }

      aside.insertAdjacentHTML('afterbegin', blogContent.author);
      blogBody.insertAdjacentHTML('afterbegin', blogContent.text);
      blogBody.insertAdjacentHTML('afterbegin', blogContent.title);

      const hlxSection = document.querySelectorAll('.hlx-section:not(.image)');
      hlxSection.forEach((item) => {
        item.remove();
      });
    }
    wrapSections();
  }
}

// run layout
layout();
