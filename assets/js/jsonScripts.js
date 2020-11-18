let cardRowOne = document.getElementById("cards--view-row--one");
let cardRowTwo = document.getElementById("cards--view-row--two");
let cardRowThree = document.getElementById("cards--view-row--three");
const jsonFile = './assets/json/datos.json';

const getJson = async () => {
    try {
        const response = await fetch(jsonFile);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Error al obtener el Json.', error);
    };
};

const GetElementData = async (DatosRequeridos,id) => {
    const jsonData = await getJson();
    switch (DatosRequeridos) {
        case "Trabajos":
            return (jsonData.Trabajos[id]);
            break;
        default:
        break;
    }
}