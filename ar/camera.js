
  var video = document.querySelector("#arVideo");
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }
  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }
  function videoError(e) {
    alert('There was an error trying to get your camera stream :(');
  }