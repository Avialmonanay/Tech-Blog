$('#postSubmit').click(async event => {
    event.preventDefault();
    const title = $('#blogTitle').val().trim();
    const description = $('#blogContent').val().trim();
    const user_id = event.target.dataset.userid;
    console.log(title)
    console.log(description)
    console.log(user_id)

    if (title && description && user_id) {
      const response = await fetch('/api/blogs/create', {
        method: 'POST',
        body: JSON.stringify({ title, description, user_id }),
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        console.log(response)
        location.replace(`/dashboard`);
      } else {
        alert('Failed to add post.');
      }
    } else {
      location.replace(`/login`);
    }
  });