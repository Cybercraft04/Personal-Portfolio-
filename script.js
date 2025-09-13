<script>
    function toggleMenu(el) {
      el.classList.toggle("active");
      document.getElementById("navbar").classList.toggle("open");
    }

    function closeMenu() {
      document.getElementById("navbar").classList.remove("open");
      document.querySelector(".hamburger").classList.remove("active");
    }
  </script>
