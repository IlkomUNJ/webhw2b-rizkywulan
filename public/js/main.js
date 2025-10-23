document.addEventListener('DOMContentLoaded', () => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const wishlistButtons = document.querySelectorAll('.wishlist-btn');

    if (wishlistButtons.length > 0) {
        wishlistButtons.forEach(btn => {
            const itemName = btn.getAttribute('data-name');

            if (wishlist.includes(itemName)) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                const index = wishlist.indexOf(itemName);
                if (index === -1) {
                    wishlist.push(itemName);
                    btn.classList.add('active');
                } else {
                    wishlist.splice(index, 1);
                    btn.classList.remove('active');
                }
                
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
            });
        });
    }

    const wishlistContainer = document.getElementById('wishlistContainer');

    if (wishlistContainer) {
        renderWishlist();

        function renderWishlist() {
            wishlistContainer.innerHTML = '';
            wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

            if (wishlist.length === 0) {
                wishlistContainer.innerHTML = '<p>Belum ada item di wishlist.</p>';
                return;
            }

            wishlist.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('wishlist-item');
                div.innerHTML = `
                    <span>${item}</span>
                    <i> class='bx bx-trash delete-btn' data-name = "${item}"></i>
                    `;
                wishlistContainer.appendChild(div);
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const name = btn.getAttribute('data-name');
                    wishlist = wishlist.filter(i => i !== name);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                    renderWishlist();
                });
            });
        }
    }
});