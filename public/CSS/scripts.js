    // for tripwiresquishing
    const audio = new Audio('Images/Assets/Sound/Squeak.mp3');
    const audio2 = new Audio('Images/Assets/Sound/TDlaugh.mp3');
    audio2.volume = 0.3; 
    let sel = Math.floor(Math.random() * 2);
    
    function resizeImage(img) {
      let sel = Math.floor(Math.random() * 20);
      if (sel === 0) {
        audio2.play();
      } else {
        audio.play();
      }
      img.style.width = parseInt(img.style.width.replace('px','')) - 15 + 'px';
      img.style.height = parseInt(img.style.height.replace('px','')) - 5 + 'px';
      setTimeout(() => {
      img.style.width = parseInt(img.style.width.replace('px','')) + 15 + 'px';
      img.style.height = parseInt(img.style.height.replace('px','')) + 5 + 'px';
      }, 100)
    }