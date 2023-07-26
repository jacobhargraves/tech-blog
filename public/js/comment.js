const newFormHandler = async (event) => {
  event.preventDefault();
  
  const content = document.querySelector('#new-comment').value.trim();
  
  if (content) {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      location.reload;
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);