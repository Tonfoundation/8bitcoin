// Handles spinning image when "more" button is clicked
document.getElementById('moreButton').addEventListener('click', () => {
	const imageContainer = document.getElementById('imageContainer');
	imageContainer.style.display = 'block';
	imageContainer.classList.add('spinning');
  
	setTimeout(() => {
	  imageContainer.classList.remove('spinning');
	  imageContainer.style.display = 'none';
	}, 5000); // Display and spin for 5 seconds
  
	// Play music when "more" is clicked
	playMusic();
  });
  
  // Function to play music
  function playMusic() {
	const music = document.getElementById('backgroundMusic');
	if (music.paused) {
	  music.play();
	}
  }
  
  // Moves a diagonal image every 5 seconds
  function generateRandomPosition() {
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
  
	return {
	  startX: Math.random() * viewportWidth,
	  startY: Math.random() * viewportHeight,
	  endX: Math.random() * viewportWidth,
	  endY: Math.random() * viewportHeight,
	};
  }
  
  function moveDiagonalImage() {
	const { startX, startY, endX, endY } = generateRandomPosition();
	const movingImage = document.getElementById('movingImage');
  
	movingImage.style.display = 'block';
	movingImage.style.left = `${startX}px`;
	movingImage.style.top = `${startY}px`;
  
	// Apply animation to move the image diagonally
	movingImage.animate(
	  [
		{ transform: `translate(0, 0)` },
		{ transform: `translate(${endX - startX}px, ${endY - startY}px)` }
	  ],
	  {
		duration: 4000, // 4 seconds
		easing: 'linear',
	  }
	);
  
	// Hide the image after the animation is complete
	setTimeout(() => {
	  movingImage.style.display = 'none';
	}, 4000);
  }
  
  // Repeat the diagonal movement every 5 seconds
  setInterval(moveDiagonalImage, 5000);
  