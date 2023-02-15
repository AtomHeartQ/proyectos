const init = () => {
  fetch("https://api.artic.edu/api/v1/artworks")
    .then((res) => res.json())
    .then((resParsed) => {
      console.log(resParsed);
      showInfo(resParsed);
    });
};

const showInfo = (artworks) => {
  for (const artwork of artworks.data) {
    const figure$$ = document.createElement("figure");
    const imgUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
    figure$$.innerHTML = `<figcaption>${artwork.title}</figcaption><img src=${imgUrl}/>`;
    document.body.appendChild(figure$$);

    /** const titleText = `Title: ${artwork.title}`;
    const figcaption$$ = document.createElement("figcaption");
    figcaption$$.textContent = titleText;

    const img$$ = document.createElement("img");
    const identifier = artwork.image_id;
    
    img$$.setAttribute("src", imgUrl);

    
    figure$$.appendChild(img$$);
    figure$$.appendChild(figcaption$$); **/
  }
};

init();
