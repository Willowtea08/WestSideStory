function updateContent() {
    var contentElement = document.getElementById("content");
  
    contentElement.textContent =
      "Content updated! Clicked at " + new Date().toLocaleTimeString();
  }
  
  function changeColor() {
    var colorDiv = document.getElementById("changeColorDiv");
  
    colorDiv.style.backgroundColor = getRandomColor();
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function updateContent1() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    var contentElement = document.getElementById("changeColorDiv");
  
    switch (dayOfWeek) {
      case 0: // Sunday
        contentElement.textContent = "Enjoy your Sunday!";
        document.body.style.backgroundColor = "lightcoral";
        break;
      case 1: // Monday
        contentElement.textContent = "It's Monday!";
        document.body.style.backgroundColor = "lightblue";
        break;
      case 2: // Tuesday
        contentElement.textContent = "Happy Tuesday!";
        document.body.style.backgroundColor = "lightgreen";
        break;
      case 3: // Wednesday
        contentElement.textContent = "Hello Wednesday!";
        document.body.style.backgroundColor = "lightpink";
        break;
      case 4: // Thursday
        contentElement.textContent = "Almost there, it's Thursday!";
        document.body.style.backgroundColor = "lightyellow";
        break;
      case 5: // Friday
        contentElement.textContent = "Happy Friday!";
        document.body.style.backgroundColor = "lightsalmon";
        break;
      case 6: // Saturday
        contentElement.textContent = "Enjoy your Saturday!";
        document.body.style.backgroundColor = "lightseagreen";
        break;
      default:
        // Default behavior
        contentElement.textContent = "Greetings!";
        document.body.style.backgroundColor = "white";
    }
  }
 
  function changeColor1() {
    document.body.style.backgroundColor = getRandomColor();
  }
  

  function getRandomColor1() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor2() {
    var colorDiv = document.getElementById("changeColorDiv");
  
    colorDiv.style.backgroundColor = getRandomColor();
  }
  
  function getRandomColor2() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  window.onload = function () {
    gsap.to(".fade-in", { opacity: 1, duration: 2 });
  };
  
  document
    .getElementById("updateContentBtn")
    .addEventListener("click", function () {
      document.getElementById("clickSound").play();
    });
  
  document.querySelectorAll(".box img").forEach(function (img) {
    img.addEventListener("mouseover", function () {
      document.getElementById("hoverSound").play();
    });
  });
  