//Search button that redirects to the search page with relevant results.
$(".search").click(function (event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        var userInput = $(this).children("input").val();
        console.log(userInput);
        location.replace(`/search/${userInput}`);    
    }
});

//home button to bring you back to the homepage
$(".home").click(event => location.replace("/"));

//login button to bring you  to the login page
$(".login").click(event => location.replace("/login"));

//Post button to bring you  to the Post Page
$(".post").click(event => location.replace("/post"));

//dashboard button to bring you  to the dashboard page
$(".dashboard").click(event => location.replace("/dashboard"));

//logout button to bring you log the user out.
$(".logout").click(async event => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        location.replace('/');
    } else {
        alert('Failed to log out.');
    }
});

//Read More button on cards to direct users to the specific blog page.
$('.cardBtn').click(event => {
    var element = event.target;
    var id = element.dataset.id;
    location.replace(`/blog/${id}`);
  });