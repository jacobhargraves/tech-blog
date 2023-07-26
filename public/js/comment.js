const newFormHandler = async (event) => {
  event.preventDefault();
  
  const content = document.querySelector('#new-comment').value.trim();

  const urlParts = window.location.pathname.split('/');
  const blogPostId = urlParts[urlParts.length - 1];

  if (content) {
    const response = await fetch(`/blogPosts/${blogPostId}/comment`, {
      method: 'POST',
      body: JSON.stringify({ content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      window.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);