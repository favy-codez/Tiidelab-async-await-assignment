async function downloadVideo(url, filename) {
    return new Promise(function (resolve, reject) {
        var link = document.createElement("a");
        link.href = "https://www.videezy.com/download/44901?download_auth_hash=13b09804&pro=false";
        link.download = "falling-strawberries-video-4k";

        document.body.appendChild(link);

        setTimeout(function () {
            link.click();
            document.body.removeChild(link);
            resolve(); // Resolve the promise to indicate success
        }, 1000); // Delay the click event to ensure the anchor element is properly appended
    });
}

var downloadBtn = document.getElementById("asyncbtn");
downloadBtn.addEventListener("click", async function () {
    try {
        await downloadVideo("https://www.videezy.com/download/44901?download_auth_hash=13b09804&pro=false", "video.mp4");
        console.log("Video downloaded successfully");
    } catch (error) {
        console.error("Error downloading video:", error);
    }
});
