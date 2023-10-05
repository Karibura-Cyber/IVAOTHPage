fetch('data/training.json')
    .then(response => response.json())
    .then(data => {
        const training = data.training;
        const trainingContainer = document.getElementById('training-cards');

        training.forEach(training => {
            const card = document.createElement('div');
            card.classList.add('col');
            card.innerHTML = `
                    <div class="col">
                <a href="${training.link}" class="decoration-none" target="_blank">
                    <div class="card event-card h-100" style="width: 20rem;">
                        <img src="${training.img}" class="card-img-top" alt="${training.header}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${training.header}</h5>
                            <p class="card-text">${training.description}</p>
                        </div>
                        <div class="card-footer">
                            <small><span class="fw-bold">Event date:</span> ${training.date}</small><br>
                            <small><span class="fw-bold">Event time:</span> ${training.time}</small>                            
                        </div>
                    </div>
                </a>
            </div>
                    `;
                    trainingContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });