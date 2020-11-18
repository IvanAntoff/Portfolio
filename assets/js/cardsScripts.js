const CardType1 = (Category, Id, Title, Thumbnail, ShortText ) => `
    <div class="card-type1">
        <div id="${Category}[${Id}]" class="card-type1--header" style="background-image: url('${Thumbnail}');">
            <h2 class="card-type1--header-title">${Title}</h2>
        </div>
        <div class="card-type1--body">
            <h4 class="card-type1--body-text">${ShortText}</h4>
            <div onclick="getBigPic('Trabajos',${Id})" ontouch="" class="card-type1--body-button">Ver mas!</div>
        </div>
    </div>`

const getJobsCards = async () => {
    const Datos = await getJson();
    AuxCantidad = ((Object.keys(Datos.Trabajos).length)-1);
    AuxFila = 1;
    for (i=0; i<=(AuxCantidad); i++){
        switch (AuxFila) {
            case 1:
                cardRowOne.innerHTML += CardType1("Trabajos", i, Datos.Trabajos[i].Titulo, Datos.Trabajos[i].Miniatura, Datos.Trabajos[i].DescripCorta);
                AuxFila++;
                break;
            case 2:
                cardRowTwo.innerHTML += CardType1("Trabajos", i, Datos.Trabajos[i].Titulo, Datos.Trabajos[i].Miniatura, Datos.Trabajos[i].DescripCorta);
                AuxFila++;
                break;
            case 3:
                cardRowThree.innerHTML += CardType1("Trabajos", i, Datos.Trabajos[i].Titulo, Datos.Trabajos[i].Miniatura, Datos.Trabajos[i].DescripCorta);
                AuxFila=1;
                break;
            default:
                cardRowOne.innerHTML += CardType1("Trabajos", i, Datos.Trabajos[i].Titulo, Datos.Trabajos[i].Miniatura, Datos.Trabajos[i].DescripCorta);
                AuxFila++;
                break;
        }
    }
    restartCardsRowsScrollPos();
}


const getCards = async (DatosRequeridos) => {
    switch (DatosRequeridos) {
        case "Trabajos":
            getJobsCards();
            break;
        default:
            break;
    }
}