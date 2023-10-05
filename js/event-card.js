fetch('data/events.json') // Use a relative path to your JSON file
    .then(response => response.json())
    .then(data => {
        const events = data.events;
        const EventContainer = document.getElementById('event-cards');

        events.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                    <div class="col">
                <a href="${event.link}" class="decoration-none" target="_blank">
                    <div class="card event-card h-100" style="width: 20rem;">
                        <img src="${event.img}" class="card-img-top" alt="${event.name}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${event.name}</h5>
                            <p class="card-text">${event.description}</p>
                        </div>
                        <div class="card-footer">
                            <small><span class="fw-bold">Event date:</span> ${event.event_date}</small><br>
                            <small><span class="fw-bold">Event time:</span> ${event.event_time}</small><br>
                            <small><span class="fw-bold">Event type:</span> ${event.event_type}</small>
                        </div>
                    </div>
                </a>
            </div>
                    `;
            EventContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });