export const getItemTemplate = (photos, list) => {
  const murkup = photos
    .map(({ title, url }) => {
      return `<li style="background-image: url(${url})" class="box box-margin ">
        <h2>${title}</h2>
      </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', murkup);
};
