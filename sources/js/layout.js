const types = ['page', 'blog'];

const main = document.getElementsByTagName('main');
const blogAuthor = document.querySelector('.blog-author');

// because you should have a way to decide what type of "template" you want
const layout = (type = 'blog') => {
  if (type === 'blog') {
    console.log(`####### I am a ${type} #######`);

    wrapSections = () => {
      imgIndexNext = 1;
      const el = main[0];
      const blog = Array.from(el.childNodes).slice(imgIndexNext, -1);
      el.append(`<section class="blog__base"></section>`);
      const wrapper = el.querySelector('.blog__base');
      wrapper.append(blog);
      document.removeChild(blog);
      console.log('wrapped!');
    }
    wrapSections();
  }
}

// run layout
layout();
