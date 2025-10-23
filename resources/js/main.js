document.addEventListener("DOMContentLoaded", () => {
    const wishlistButtons = document.querySelectorAll(".wishlist-btn")
  
    // === Ambil data wishlist dari localStorage ===
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
  
    // === Tandai produk yang sudah ada di wishlist ===
    wishlistButtons.forEach((btn) => {
      const name = btn.dataset.name
      if (wishlist.some((item) => item.name === name)) {
        btn.classList.add("active") // kasih warna merah
      }
    })
  
    // === Klik tombol hati untuk tambah/hapus ===
    wishlistButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name
        const image = btn.dataset.image
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
  
        const exists = wishlist.some((item) => item.name === name)
  
        if (!exists) {
          wishlist.push({ name, image })
          localStorage.setItem("wishlist", JSON.stringify(wishlist))
          btn.classList.add("active") // jadikan merah
          alert(`${name} ditambahkan ke wishlist`)
        } else {
          wishlist = wishlist.filter((item) => item.name !== name)
          localStorage.setItem("wishlist", JSON.stringify(wishlist))
          btn.classList.remove("active") // balik abu
          alert(`${name} dihapus dari wishlist`)
        }
      })
    })
  
    // === Kalau halaman wishlist, tampilkan item ===
    const wishlistContainer = document.getElementById("wishlistContainer")
    if (wishlistContainer) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
  
      if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Belum ada produk di wishlist</p>"
      } else {
        wishlistContainer.innerHTML = wishlist.map((item) => 
          `<div class="item">
            <img src="${item.image}">
            <div class="info">
              <div class="left">
                <button class="remove-btn" data-name="${item.name}">
                  <i class='bx bx-trash'></i>
                </button>
              </div>
              <div class="text">
                <h3>${item.name}</h3>
              </div>
            </div>
          </div>
        `
          )
          .join("")
      }
  
      // === Hapus item dari wishlist + ubah warna hati di menu ===
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const name = btn.dataset.name
          let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
          wishlist = wishlist.filter((item) => item.name !== name)
          localStorage.setItem("wishlist", JSON.stringify(wishlist))
          btn.closest(".item").remove()
  
          // kalau user balik ke menu, hati jadi abu lagi
          const heartButton = document.querySelector(
            `.wishlist-btn[data-name="${name}"]`
          )
          if (heartButton) heartButton.classList.remove("active")
        })
      })
    }
  })

