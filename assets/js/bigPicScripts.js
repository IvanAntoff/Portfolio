let header = document.getElementById('header');
let tagsContainer;
let linkContainer;


const BigPicType1 = (Title, Thumbnail, Text, Link) => `
<div class="bigPic-type1">
    <div class="bigPic-type1--header" style="background-image: url('${Thumbnail}');">
        <h2 class="bigPic-type1--header-title">${Title}</h2>
    </div>
    <div class="bigPic-type1--body">
        <div id="bigPic-Tags" class="bigPic-type1--body-tags"></div>
        <h4 class="bigPic-type1--body-text">${Text}</h4>
        <a href="${Link}"><div id="bigPic-Link" class="bigPic-type1--body-button"><b>Enlace</b>: ${Link}</div></a>
    </div>
</div>`

const aTag = (Tag) => `
<label class="BigPic-tag">
    ${Tag}
</label>`

const pushTags = (Tags) => {
    if (Tags != 'Nope') {
        tagsContainer = document.getElementById('bigPic-Tags');
        tagsContainer.style.display = 'flex';
        for (i=0; i<= ((Object.keys(Tags).length)-1); i++) {
            tagsContainer.innerHTML += aTag(Tags[i]);
        }
    }
}

const activateLink = (Link) => {
    if (Link != 'Nope') {
        linkContainer = document.getElementById('bigPic-Link');
        linkContainer.style.display = 'flex';
    }
}

const removeBigPic = () => {
    header.innerHTML = ''
}

const getBigPic = async (DatosRequeridos,id) => {
    const data = await GetElementData(DatosRequeridos,id);
    header.innerHTML = await BigPicType1(data.Titulo, data.Miniatura,data.Descripcion,data.Enlace);
    await pushTags(data.Tags);
    await activateLink(data.Enlace);
    }