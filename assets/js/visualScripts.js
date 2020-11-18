//Components
let navBar = document.getElementById('main--navBar');
let mainMenu = document.getElementById('main--menu');
let textBigSize = document.getElementsByClassName('text-big-size');
let textNormalSize = document.getElementsByClassName('text-normal-size');
let textSmallSize = document.getElementsByClassName('text-small-size');
let cardsView = document.getElementById('cards--view');
let hiddenMenuButton = document.getElementById('hidde-menu');

const minimizeMainMenuText = (elements) => {
    for (var i in elements) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = ('1vw');
        }
    }
}

const maximizeMainMenuText = (elements, sizeNumber) => {
    for (var i in elements) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = (`${sizeNumber}vw`);
        }
    }
}

const centerMainMenuText = (elements) => {
    for (var i in elements) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.textAlign = ('center');
        }
    }
}

const unbindMainMenuText = (elements) => {
    for (var i in elements) {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.textAlign = ('none');
        }
    }
}

const maximizeMainMenu = () => {
    mainMenu.style.flexWrap = ('nowrap')
    mainMenu.style.flexDirection = ('column');
    mainMenu.style.height = ('90vh');
    maximizeMainMenuText(textBigSize,4);
    maximizeMainMenuText(textNormalSize,3);
    maximizeMainMenuText(textSmallSize,2.5);
    unbindMainMenuText(textBigSize);
    unbindMainMenuText(textNormalSize);
    unbindMainMenuText(textSmallSize);
}

const minimizeMainMenu = () => {
    minimizeMainMenuText(textBigSize);
    minimizeMainMenuText(textNormalSize);
    minimizeMainMenuText(textSmallSize);
    centerMainMenuText(textBigSize);
    centerMainMenuText(textNormalSize);
    centerMainMenuText(textSmallSize);
    mainMenu.style.flexDirection = ('row');
    mainMenu.style.flexWrap = ('wrap')
    mainMenu.style.height = ('10vh');
}

const minimizeNavbar = () => {
    minimizeMainMenu();
    navBar.style.height = ('30vh');
}

function maximizeNavbar(){
    navBar.style.height = ('100vh');
    maximizeMainMenu();
}

function minimzeCardsView(){
    cardsView.style.height = ('0vh');
    cardsView.style.display = ('none');
}

const maximizeCardsView = () => {
    cardsView.style.display = ('flex');
    cardsView.style.height = ('70vh');
}

const wipeCardsRows = () => {
    cardRowOne.innerHTML = '';
    cardRowTwo.innerHTML = '';
    cardRowThree.innerHTML = '';
}

const restartCardsRowsScrollPos = () => {
    cardRowOne.scrollTop = 0;
    cardRowTwo.scrollTop = 70;
    cardRowThree.scrollTop = 0;
}

const showCards = (DatosRequeridos) => {
    removeBigPic();
    wipeCardsRows();
    minimizeNavbar();
    maximizeCardsView();
    hiddenMenuButton.style.display = ('flex');
    getCards(DatosRequeridos)
}

const hiddeCards = () => {
    removeBigPic();
    maximizeNavbar();
    minimzeCardsView();
    hiddenMenuButton.style.display = ('none');
}