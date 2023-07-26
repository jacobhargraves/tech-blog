const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogPosts/`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.classList.contains('btn-delete')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogPosts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const blogPostToDelete = event.target.closest('.row.mb-2');
      blogPostToDelete.remove();
    } else {
      alert('Failed to delete post');
    }
  }
};

const updateButtonHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const titleUpdate = document.querySelector('#title-update').value.trim();
  const contentUpdate = document.querySelector('#content-update').value.trim();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogPosts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title: titleUpdate, content: contentUpdate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};


document
  .querySelectorAll('.btn-update-save')
  .forEach((button) => button.addEventListener('click', updateButtonHandler));

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelectorAll('.btn-delete')
  .forEach((button) => button.addEventListener('click', delButtonHandler));

