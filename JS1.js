document.getElementById("logo").addEventListener("click", function() {
    window.location.href = "MyRank.html";
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.scale = 0.5;
      document.getElementById("home").style.display = 'none';
    } else {
      document.getElementById("logo").style.scale = 1;
      document.getElementById("home").style.display = "flex";
    }
  }