chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: yourFunction
  });
});

async function yourFunction() {
  const videoElement = document.querySelector('video');

  if (videoElement) {
    try {
      await videoElement.requestPictureInPicture();
    } catch (error) {
      console.error('Error requesting Picture-in-Picture:', error);
    }
  } else {
    console.error('No video element found');
  }
}
