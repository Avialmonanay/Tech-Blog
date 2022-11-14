$('#commentSubmit').click(async event => {
    event.preventDefault();
    const comment = $('#addComment').val().trim();
    const blog_id = event.target.dataset.blog;
    const user_id = event.target.dataset.userid;
  
    if (comment && user_id && blog_id) {
      const response = await fetch('/api/comment/create', {
        method: 'POST',
        body: JSON.stringify({ comment, user_id, blog_id }),
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        location.replace(`/blog/${blog_id}`);
      } else {
        alert('Failed to add comment.');
      }
    } else {
      location.replace(`/login`);
    }
  });

  $('.commentDelete').click(async event => {
    event.preventDefault();
    
    const commentID = event.target.dataset.commentid
    if (commentID) {
      const response = fetch(`/api/comment/destroy/${commentID}`, {
        method: 'delete',
        body: JSON.stringify({commentID}),
        headers: { 'Content-Type': 'application/json' }
      });
        location.reload();
    } else {
      location.replace(`/login`);
    }
  })