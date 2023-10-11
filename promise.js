function downloadVideo(url, filename) {
    return new Promise(function (resolve, reject) {
        var link = document.createElement("a");
        link.href = "https://www.videezy.com/download/44901?download_auth_hash=0a4f9bb9&pro=false";
        link.download = "falling-strawberries-video-4k";

        document.body.appendChild(link);

        setTimeout(function () {
            link.click();
            document.body.removeChild(link);
            resolve(); // Resolve the promise to indicate success
        }, 1000); // Delay the click event to ensure the anchor element is properly appended
    });
}

var downloadBtn = document.getElementById("promisebtn");
downloadBtn.addEventListener("click", function () {
    downloadVideo("https://www.videezy.com/download/44901?download_auth_hash=13b09804&pro=false", "falling-strawberries-video-4k")
        .then(function () {
            console.log("Video downloaded successfully");
        })
        .catch(function (error) {
            console.error("Error downloading video:", error);
        });
});
