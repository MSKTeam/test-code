// imageManager.js

const ImageManager = (function () {
  const getModifiedSrc = (imgTag) => {
    const srcRegex = /src=(["'])(.*?)\1/;
    const match = imgTag.match(srcRegex);
    if (match) {
      let src = match[2];
      src = src.replace(/s1600/, "s1600-rw");
      src = src.replace(/s1600-rw\/.*/, "s1600-rw/MSKTeam.webp");
      const domains = ['i0.wp.com', 'i1.wp.com', 'i2.wp.com', 'i3.wp.com'];
      const randomDomain = domains[Math.floor(Math.random() * domains.length)];
      const modifiedSrc = src.replace(/https?:\/\//, `https://${randomDomain}/`);
      return modifiedSrc;
    }
    return null;
  };

  const loadNextImage = (imgTags) => {
    const imgTagsArray = imgTags.match(/<img[^>]+>/g);
    const totalImages = imgTagsArray.length;
    let loadedImages = 0;
    const canvases = [];
    const canvasContainer = document.getElementById("canvas-chapter");

    const loadNext = () => {
      if (loadedImages >= totalImages) {
        return;
      }

      const imgTag = imgTagsArray[loadedImages];
      const src = getModifiedSrc(imgTag);

      if (src) {
        const image = new Image();
        const canvasWrapper = document.createElement("div");
        canvasWrapper.className = "canvas-wrapper";

        const canvas = document.createElement("canvas");
        canvases.push(canvas);
        canvasWrapper.appendChild(canvas);
        canvasContainer.appendChild(canvasWrapper);

        image.onload = function () {
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(image, 0, 0);

          canvasWrapper.style.maxWidth = `${image.width}px`;
          canvasWrapper.style.maxHeight = `${image.height}px`;
        };
        image.src = src;
      }

      loadedImages++;
      setTimeout(loadNext, 300);
    };

    loadNext();
  };

  return {
    loadImages: function (imgTags) {
      loadNextImage(imgTags);
    },
  };
})();
