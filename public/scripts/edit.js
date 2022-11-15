$('#editSubmit').click(async event => {
    event.preventDefault();
    const title = $('#blogTitle').val().trim();
    const description = $('#blogContent').val().trim();
    const blog_id = event.target.dataset.blogid
console.log(blog_id)

    if (title && description && blog_id) {
        const response = await fetch('/api/blogs/edit', {
          method: 'PUT',
          body: JSON.stringify({ title, description, blog_id }),
          headers: { 'Content-Type': 'application/json' }
        });
      
        if (response.ok) {
          console.log(response)
          location.replace(`/dashboard`);
        } else {
          alert('Failed to edit post.');
        }
      } 
    });