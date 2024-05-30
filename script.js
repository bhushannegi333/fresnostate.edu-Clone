function handleClick(link) {
    var links = document.querySelectorAll('.go-inside,.go-outside');
    // Remove 'clicked' class from all links
    links.forEach(function(item) {
      item.classList.remove("clicked");
    });
}
    // Add 'clicked' class to the clicked link
    link.classList.add("clicked");
            function showInside() {
              document.getElementById("inside-photos").style.display = "block";
              document.getElementById("outside-photos").style.display = "none";
            }
          
            function showOutside() {
              document.getElementById("inside-photos").style.display = "none";
              document.getElementById("outside-photos").style.display = "block";
            }
            