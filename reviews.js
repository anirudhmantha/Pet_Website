document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    let reviews = [];

    function displayReviews() {
        reviewsContainer.innerHTML = '';
        reviews.forEach((review, index) => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('card', 'mb-3');
            reviewCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${review.productName} (${review.productCategory})</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Reviewed by: ${review.reviewerName}</h6>
                    <p class="card-text">${review.review}</p>
                    <p class="card-text"><strong>Rating:</strong> ${review.rating}/5</p>
                    <button class="btn btn-warning btn-sm edit-review" data-index="${index}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-review" data-index="${index}">Delete</button>
                </div>
            `;
            reviewsContainer.appendChild(reviewCard);
        });

        document.querySelectorAll('.edit-review').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.dataset.index;
                editReview(index);
            });
        });

        document.querySelectorAll('.delete-review').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.dataset.index;
                deleteReview(index);
            });
        });
    }

    function addReview(review) {
        reviews.push(review);
        displayReviews();
    }

    function editReview(index) {
        const review = reviews[index];
        document.getElementById('productCategory').value = review.productCategory;
        document.getElementById('productName').value = review.productName;
        document.getElementById('reviewerName').value = review.reviewerName;
        document.getElementById('review').value = review.review;
        document.getElementById('rating').value = review.rating;

        reviews.splice(index, 1);
        displayReviews();
    }

    function deleteReview(index) {
        reviews.splice(index, 1);
        displayReviews();
    }

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newReview = {
            productCategory: document.getElementById('productCategory').value,
            productName: document.getElementById('productName').value,
            reviewerName: document.getElementById('reviewerName').value,
            review: document.getElementById('review').value,
            rating: document.getElementById('rating').value,
        };

        addReview(newReview);
        reviewForm.reset();
    });

    displayReviews();
});
