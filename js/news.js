// Read the JSON data from "data/news.json"
fetch('data/news.json')
.then(response => response.json())
.then(data => {
    const newsList = document.getElementById('news');

    // Loop through the news items in the JSON data
    data.news.forEach(newsItem => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        const link = document.createElement('a');
        link.href = newsItem.link;
        link.style.textDecoration = 'none';

        const header = document.createElement('h5');
        header.classList.add('light-blue', 'fw-bold');
        header.textContent = newsItem.header;

        const small = document.createElement('small');
        const authorIcon = document.createElement('i');
        authorIcon.classList.add('fa-solid', 'fa-user');
        const authorText = document.createTextNode(` Author - ${newsItem.author}`);
        small.appendChild(authorIcon);
        small.appendChild(authorText);

        // Append the elements to the list item
        link.appendChild(header);
        link.appendChild(small);
        listItem.appendChild(link);

        // Append the list item to the news list
        newsList.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error loading news data:', error);
});