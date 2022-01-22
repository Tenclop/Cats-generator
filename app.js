const fetchCat = () => {
  let id = Math.floor(Math.random() * 66);
  const url = `https://api.thecatapi.com/v1/breeds?attach_breed=${id} `;
  fetch(url)
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      console.log(data[id]);
      const cat = data[id];
      const urlCat = cat.image.url;
      const nameCat = cat.name;
      const catDesc = cat.description;
      const lifeSpan = cat.life_span;
      const affectionLvl = cat.affection_level;

      //cat image + refresh image
      let element = document.querySelector(
        ".section--center__catsection-imgHolder"
      );
      element.innerHTML = "";

      element.innerHTML = `<img src="${urlCat}" alt="${nameCat}" class="section--center__catsection-imgHolder-img  " />`;

      //cat info + refresh info

      let elementInfo = document.querySelector(
        ".section--center__catsection-catinfo"
      );

      elementInfo.innerHTML = "";

      elementInfo.innerHTML = `<p><span>Name:</span> ${nameCat}</p>
          <p><span>Description:</span> ${catDesc}</p>
          <p><span>Life span:</span> ${lifeSpan} years</p>
          <p><span>Affection Level:</span> ${affectionLvl}</p>`;
    })
    .catch((err) => console.error(err));
};

document
  .querySelector(".section--center_btn")
  .addEventListener("click", fetchCat);
