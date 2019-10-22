const types = ['page', 'blog'];

const main = document.getElementsByTagName('main');
const blogAuthor = main.querySelector('.blog-author');
const blogText = main.querySelector('.default');

const layout = (type = 'blog') => {
  if (type === 'blog') {
    console.log('I am a blog!');

    cacheSections = () => {
      main.removeChild(blogAuthor);
      main.removeChild(blogText);
      console.log('I have remove the items');   
    }
  }
}

// run layout
layout();
