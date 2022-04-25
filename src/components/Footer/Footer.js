import React from "react"

const Footer = () => {
  return (
    <div class="cont bg-secondary">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-warning">Home</a></li>
      <li class="nav-item"><a href="/Gallery" class="nav-link px-2 text-warning">Gallery</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link px-2 text-warning">Contact us</a></li>
      <li class="nav-item"><a href="/FAQs" class="nav-link px-2 text-warning">FAQs</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-warning">About</a></li>
    </ul>
    <p class="text-center text-warning">&copy; 2022 APP TECHNICAL INSTITUTE</p>
  </footer>
</div>
  )
}

export default Footer