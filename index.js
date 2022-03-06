var proxy1 = "https://cors-anywhere.herokuapp.com/";
var proxy2 = "https://crossorigin.me/";
var proxy3 = "https://api.codetabs.com/v1/proxy?quest=";
var url = proxy3 + "https://pixeljoint.com/pixels/new_icons.asp?ob=showcase";

$.get(url, function (data) {
  var REFRESH_DELAY = 10000; // millisecond
  var dom_nodes = $($.parseHTML(data));

  function getChild() {
    var child = Math.floor(Math.random() * 2);
    if(child == 0)
      return "first-child";
    else
      return "last-child";
  }
  
  var randomImg = dom_nodes.find(`#rightblock .bx .imgboxhome:${getChild()} img`);
  var src = "https://pixeljoint.com";
  var imgsrc = randomImg[0]?.src.replace(document.location.origin, src);
  console.log(imgsrc);

  document.querySelector("img").src = imgsrc;

  var interval;

  Play();
  
  $(document).on("click", "#pause", function(e) {
    e.preventDefault();
    e.target.disabled = true;
    Pause();
  });
  
  $(document).on("click", "#play", function(e) {
    e.preventDefault();
    e.target.disabled = true;
    Play();
  });
  
  function Play() {
    interval = setInterval(() => {
      document.location.href = document.location.href;
      document.querySelector("#play, #pause").disabled = true;
    }, REFRESH_DELAY);
    
    document.querySelector("#pause").disabled = false;
    document.querySelector("span").textContent = "Playing...";
  }
  
  function Pause() {
    clearInterval(interval);
    document.querySelector("#play").disabled = false;
    document.querySelector("span").textContent = "Paused";
  }
});
