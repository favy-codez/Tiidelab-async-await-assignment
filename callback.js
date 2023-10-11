function downloadVideo(callback) {
    let customVideoUrl = "https://www.videezy.com/download/168?download_auth_hash=ed229592&pro=false";

    let customLink = document.createElement("a");
    customLink.href = customVideoUrl;
    customLink.download = "downloaded-video.mp4";
    document.body.appendChild(customLink);
    customLink.click();
    document.body.removeChild(customLink);

    if (typeof callback === "function") {
      callback();
    }
  }

  // Define the callback function
  function myCallback() {
    alert("Custom video downloaded successfully!");
  }
