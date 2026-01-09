// Small script to populate gallery from /images and set default ROBLOX link
(function(){
  const gallery = document.getElementById('gallery-grid');
  // List images you add to /images here. Edit this array when adding files, or replace with dynamic fetch if you add a JSON manifest.
  const images = [
    // Example: 'images/restaurant-1.jpg',
  ];

  function renderGallery(){
    if(!gallery) return;
    if(images.length===0){
      gallery.innerHTML = '<p class="note">No images yet — add files to the <code>/images</code> folder and update <code>script.js</code>.</p>';
      return;
    }
    gallery.innerHTML = images.map(src => `<img src="/${src}" alt="Grizs image">`).join('');
  }

  // Replace the href below with your Roblox place URL when you have the place id
  const joinButton = document.getElementById('join-button');
  if(joinButton){
    // Example place: https://www.roblox.com/games/PLACE_ID
    joinButton.href = '#';
  }

  renderGallery();
})();
