// JavaScript code for adding and displaying content
document.addEventListener('DOMContentLoaded', function () {
  const contentForm = document.getElementById('contentForm');
  const contentItemsList = document.getElementById('contentItems');

  contentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Get user input
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const contentType = document.getElementById('type').value;

      // Create a new content item element
      const contentItem = document.createElement('li');
      contentItem.innerHTML = `<strong>${title}:</strong>`;

      // Check if the entered content is an image URL
      if (contentType === 'image') {
          const imageElement = document.createElement('img');
          imageElement.src = content;
          contentItem.appendChild(imageElement);
      }
      // Check if the entered content is a video URL
      else if (contentType === 'video') {
          const videoElement = document.createElement('video');
          videoElement.controls = true;

          const sourceElement = document.createElement('source');
          sourceElement.src = content;
          sourceElement.type = 'video/mp4';

          videoElement.appendChild(sourceElement);
          contentItem.appendChild(videoElement);
      }
      // If it's not an image or video, display it as text
      else {
          contentItem.innerHTML += ` ${content}`;
      }

      // Append the content item to the list
      contentItemsList.appendChild(contentItem);

      // Clear input fields
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
  });
});
