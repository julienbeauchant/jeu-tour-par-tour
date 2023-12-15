let player1 = {
    "amberPlayer1": { "name": "amber1", "amberSplashArtPlayer1": "img/splashArt/splashArtAmber.webp", "amberAtqNormalPlayer1": "img/normalAtq/normalAtqAmber.webp", "amberSkillPlayer1": "img/skills/skillAmber.webp", "amberUltiPlayer1": "img/ulti/ultiAmber.webp" },
    "laylaPlayer1": { "name": "layla1", "laylaSplashArtPlayer1": "img/splashArt/splashArtLayla.webp", "laylaAtqNormalPlayer1": "img/normalAtq/normalAtqLayla.webp", "laylaSkillPlayer1": "img/skills/skillLayla.webp", "laylaUltiPlayer1": "img/ulti/ultilayla.webp" },
    "barbaraPlayer1": { "name": "barbara1", "barbaraSplashArtPlayer1": "img/splashArt/splashArtBarbara.webp", "barbaraAtqNormalPlayer1": "img/normalAtq/normalAtqBarbara.webp", "barbaraSkillPlayer1": "img/skills/skillBarbara.webp", "barbaraUltiPlayer1": "img/ulti/ultiBarbara.webp" },
    "yanfeiPlayer1": { "name": "yanfei1", "yanfeiSplashArtPlayer1": "img/splashArt/splashArtYanfei.png", "yanfeiAtqNormalPlayer1": "img/normalAtq/normalAtqYanfei.webp", "yanfeiSkillPlayer1": "img/skills/skillYanfei.webp", "yanfeiUltiPlayer1": "img/ulti/ultiYanfei.webp" },
}

let player2 = {
    "amberPlayer2": { "name": "amber2", "amberSplashArtPlayer2": "img/splashArt/splashArtAmber.webp", "amberAtqNormalPlayer2": "img/normalAtq/normalAtqAmber.webp", "amberSkillPlayer2": "img/skills/skillAmber.webp", "amberUltiPlayer2": "img/ulti/ultiAmber.webp" },
    "laylaPlayer2": { "name": "layla2", "laylaSplashArtPlayer2": "img/splashArt/splashArtLayla.webp", "laylaAtqNormalPlayer2": "img/normalAtq/normalAtqLayla.webp", "laylaSkillPlayer2": "img/skills/skillLayla.webp", "laylaUltiPlayer2": "img/ulti/ultilayla.webp" },
    "barbaraPlayer2": { "name": "barbara2", "barbaraSplashArtPlayer2": "img/splashArt/splashArtBarbara.webp", "barbaraAtqNormalPlayer2": "img/normalAtq/normalAtqBarbara.webp", "barbaraSkillPlayer2": "img/skills/skillBarbara.webp", "barbaraUltiPlayer2": "img/ulti/ultiBarbara.webp" },
    "yanfeiPlayer2": { "name": "yanfei2", "yanfeiSplashArtPlayer2": "img/splashArt/splashArtYanfei.png", "yanfeiAtqNormalPlayer2": "img/normalAtq/normalAtqYanfei.webp", "yanfeiSkillPlayer2": "img/skills/skillYanfei.webp", "yanfeiUltiPlayer2": "img/ulti/ultiYanfei.webp" },
}

// selectPlayer1 -------------------------------------------------------------------------------------------------------------


const choiceAmberPlayer1 = document.querySelector(`.amberPlayer1`)
const choiceLaylaPlayer1 = document.querySelector(`.laylaPlayer1`)
const choiceBarbaraPlayer1 = document.querySelector(`.barbaraPlayer1`)
const choiceYanfeiPlayer1 = document.querySelector(`.yanfeiPlayer1`)


const creatImgAmberSplashArtPlayer1 = document.createElement('img')
const creatImgAmberAtqNormalPlayer1 = document.createElement('img')
const creatImgAmberSkillPlayer1 = document.createElement('img')
const creatImgAmberUltiPlayer1 = document.createElement('img')

choiceAmberPlayer1.addEventListener(`click`, () => {
    choiceAmberPlayer1.style.filter = 'grayscale(0%)'
    choiceLaylaPlayer1.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer1.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer1.style.filter = 'grayscale(100%)'

    creatImgAmberSplashArtPlayer1.src = player1.amberPlayer1.amberSplashArtPlayer1
    const selectParentAmberSplashArtPlayer1 = document.querySelector(`.cardImg`)
    selectParentAmberSplashArtPlayer1.appendChild(creatImgAmberSplashArtPlayer1)

    creatImgAmberAtqNormalPlayer1.src = player1.amberPlayer1.amberAtqNormalPlayer1
    const selectParentAmberAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
    selectParentAmberAtqNormalPlayer1.appendChild(creatImgAmberAtqNormalPlayer1)

    creatImgAmberSkillPlayer1.src = player1.amberPlayer1.amberSkillPlayer1
    const selectParentAmberSkillPlayer1 = document.querySelector(`.competenceSpecial`)
    selectParentAmberSkillPlayer1.appendChild(creatImgAmberSkillPlayer1)

    creatImgAmberUltiPlayer1.src = player1.amberPlayer1.amberUltiPlayer1
    const selectParentAmberUltiPlayer1 = document.querySelector(`.ulti`)
    selectParentAmberUltiPlayer1.appendChild(creatImgAmberUltiPlayer1)
})

// -------------------------------------------------------------------------------------------------------------


const creatImgLaylaSplashArtPlayer1 = document.createElement('img')
const creatImgLaylaAtqNormalPlayer1 = document.createElement('img')
const creatImgLaylaSkillPlayer1 = document.createElement('img')
const creatImgLaylaUltiPlayer1 = document.createElement('img')

choiceLaylaPlayer1.addEventListener(`click`, () => {
    choiceLaylaPlayer1.style.filter = 'grayscale(0%)'
    choiceAmberPlayer1.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer1.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer1.style.filter = 'grayscale(100%)'
    console.log(`Player1 à choisi Layla pour commencer le combat !`)

    creatImgLaylaSplashArtPlayer1.src = player1.laylaPlayer1.laylaSplashArtPlayer1
    const selectParentLaylaSplashArtPlayer1 = document.querySelector(`.cardImg`)
    selectParentLaylaSplashArtPlayer1.appendChild(creatImgLaylaSplashArtPlayer1)

    creatImgLaylaAtqNormalPlayer1.src = player1.laylaPlayer1.laylaAtqNormalPlayer1
    const selectParentLaylaAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
    selectParentLaylaAtqNormalPlayer1.appendChild(creatImgLaylaAtqNormalPlayer1)

    creatImgLaylaSkillPlayer1.src = player1.laylaPlayer1.laylaSkillPlayer1
    const selectParentLaylaSkillPlayer1 = document.querySelector(`.competenceSpecial`)
    selectParentLaylaSkillPlayer1.appendChild(creatImgLaylaSkillPlayer1)

    creatImgLaylaUltiPlayer1.src = player1.laylaPlayer1.laylaUltiPlayer1
    const selectParentLaylaUltiPlayer1 = document.querySelector(`.ulti`)
    selectParentLaylaUltiPlayer1.appendChild(creatImgLaylaUltiPlayer1)
})

// -------------------------------------------------------------------------------------------------------------


const creatImgBarbaraSplashArtPlayer1 = document.createElement('img')
const creatImgBarbaraAtqNormalPlayer1 = document.createElement('img')
const creatImgBarbaraSkillPlayer1 = document.createElement('img')
const creatImgBarbaraUltiPlayer1 = document.createElement('img')

choiceBarbaraPlayer1.addEventListener(`click`, () => {
    choiceBarbaraPlayer1.style.filter = 'grayscale(0%)'
    choiceAmberPlayer1.style.filter = 'grayscale(100%)'
    choiceLaylaPlayer1.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer1.style.filter = 'grayscale(100%)'

    creatImgBarbaraSplashArtPlayer1.src = player1.barbaraPlayer1.barbaraSplashArtPlayer1
    const selectParentBarbaraSplashArtPlayer1 = document.querySelector(`.cardImg`)
    selectParentBarbaraSplashArtPlayer1.appendChild(creatImgBarbaraSplashArtPlayer1)

    creatImgBarbaraAtqNormalPlayer1.src = player1.barbaraPlayer1.barbaraAtqNormalPlayer1
    const selectParentBarbaraAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
    selectParentBarbaraAtqNormalPlayer1.appendChild(creatImgBarbaraAtqNormalPlayer1)

    creatImgBarbaraSkillPlayer1.src = player1.barbaraPlayer1.barbaraSkillPlayer1
    const selectParentBarbaraSkillPlayer1 = document.querySelector(`.competenceSpecial`)
    selectParentBarbaraSkillPlayer1.appendChild(creatImgBarbaraSkillPlayer1)

    creatImgBarbaraUltiPlayer1.src = player1.barbaraPlayer1.barbaraUltiPlayer1
    const selectParentBarbaraUltiPlayer1 = document.querySelector(`.ulti`)
    selectParentBarbaraUltiPlayer1.appendChild(creatImgBarbaraUltiPlayer1)

    console.log(event)
    console.log('le player1 envoie Barbara au combat !')
})

// -------------------------------------------------------------------------------------------------------------

const creatImgYanfeiSplashArtPlayer1 = document.createElement('img')
const creatImgYanfeiAtqNormalPlayer1 = document.createElement('img')
const creatImgYanfeiSkillPlayer1 = document.createElement('img')
const creatImgYanfeiUltiPlayer1 = document.createElement('img')

choiceYanfeiPlayer1.addEventListener(`click`, () => {
    choiceYanfeiPlayer1.style.filter = 'grayscale(0%)'
    choiceAmberPlayer1.style.filter = 'grayscale(100%)'
    choiceLaylaPlayer1.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer1.style.filter = 'grayscale(100%)'

    creatImgYanfeiSplashArtPlayer1.src = player1.yanfeiPlayer1.yanfeiSplashArtPlayer1
    const selectParentYanfeiSplashArtPlayer1 = document.querySelector(`.cardImg`)
    selectParentYanfeiSplashArtPlayer1.appendChild(creatImgYanfeiSplashArtPlayer1)

    creatImgYanfeiAtqNormalPlayer1.src = player1.yanfeiPlayer1.yanfeiAtqNormalPlayer1
    const selectParentYanfeiAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
    selectParentYanfeiAtqNormalPlayer1.appendChild(creatImgYanfeiAtqNormalPlayer1)

    creatImgYanfeiSkillPlayer1.src = player1.yanfeiPlayer1.yanfeiSkillPlayer1
    const selectParentYanfeiSkillPlayer1 = document.querySelector(`.competenceSpecial`)
    selectParentYanfeiSkillPlayer1.appendChild(creatImgYanfeiSkillPlayer1)

    creatImgYanfeiUltiPlayer1.src = player1.yanfeiPlayer1.yanfeiUltiPlayer1
    const selectParentYanfeiUltiPlayer1 = document.querySelector(`.ulti`)
    selectParentYanfeiUltiPlayer1.appendChild(creatImgYanfeiUltiPlayer1)

    console.log(`Player1 à choisi Yanfei pour commencer le combat !`)
})


// selectPlayer2 -------------------------------------------------------------------------------------------------------------


const choiceAmberPlayer2 = document.querySelector(`.amberPlayer2`)
const choiceLaylaPlayer2 = document.querySelector(`.laylaPlayer2`)
const choiceBarbaraPlayer2 = document.querySelector(`.barbaraPlayer2`)
const choiceYanfeiPlayer2 = document.querySelector(`.yanfeiPlayer2`)


const creatImgAmberSplashArtPlayer2 = document.createElement('img')
const creatImgAmberAtqNormalPlayer2 = document.createElement('img')
const creatImgAmberSkillPlayer2 = document.createElement('img')
const creatImgAmberUltiPlayer2 = document.createElement('img')

choiceAmberPlayer2.addEventListener(`click`, () => {
    choiceAmberPlayer2.style.filter = 'grayscale(0%)'
    choiceLaylaPlayer2.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer2.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer2.style.filter = 'grayscale(100%)'

    creatImgAmberSplashArtPlayer2.src = player2.amberPlayer2.amberSplashArtPlayer2
    const selectParentAmberSplashArtPlayer2 = document.querySelector(`.cardImg2`)
    selectParentAmberSplashArtPlayer2.appendChild(creatImgAmberSplashArtPlayer2)

    creatImgAmberAtqNormalPlayer2.src = player2.amberPlayer2.amberAtqNormalPlayer2
    const selectParentAmberAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
    selectParentAmberAtqNormalPlayer2.appendChild(creatImgAmberAtqNormalPlayer2)

    creatImgAmberSkillPlayer2.src = player2.amberPlayer2.amberSkillPlayer2
    const selectParentAmberSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
    selectParentAmberSkillPlayer2.appendChild(creatImgAmberSkillPlayer2)

    creatImgAmberUltiPlayer2.src = player2.amberPlayer2.amberUltiPlayer2
    const selectParentAmberUltiPlayer2 = document.querySelector(`.ulti2`)
    selectParentAmberUltiPlayer2.appendChild(creatImgAmberUltiPlayer2)

    console.log(`Player2 à choisi Amber pour commencer le combat !`)
})

// -------------------------------------------------------------------------------------------------------------


const creatImgLaylaSplashArtPlayer2 = document.createElement('img')
const creatImgLaylaAtqNormalPlayer2 = document.createElement('img')
const creatImgLaylaSkillPlayer2 = document.createElement('img')
const creatImgLaylaUltiPlayer2 = document.createElement('img')

choiceLaylaPlayer2.addEventListener(`click`, () => {
    choiceLaylaPlayer2.style.filter = 'grayscale(0%)'
    choiceAmberPlayer2.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer2.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer2.style.filter = 'grayscale(100%)'

    creatImgLaylaSplashArtPlayer2.src = player2.laylaPlayer2.laylaSplashArtPlayer2
    const selectParentLaylaSplashArtPlayer2 = document.querySelector(`.cardImg2`)
    selectParentLaylaSplashArtPlayer2.appendChild(creatImgLaylaSplashArtPlayer2)

    creatImgLaylaAtqNormalPlayer2.src = player2.laylaPlayer2.laylaAtqNormalPlayer2
    const selectParentLaylaAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
    selectParentLaylaAtqNormalPlayer2.appendChild(creatImgLaylaAtqNormalPlayer2)

    creatImgLaylaSkillPlayer2.src = player2.laylaPlayer2.laylaSkillPlayer2
    const selectParentLaylaSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
    selectParentLaylaSkillPlayer2.appendChild(creatImgLaylaSkillPlayer2)

    creatImgLaylaUltiPlayer2.src = player2.laylaPlayer2.laylaUltiPlayer2
    const selectParentLaylaUltiPlayer2 = document.querySelector(`.ulti2`)
    selectParentLaylaUltiPlayer2.appendChild(creatImgLaylaUltiPlayer2)

    console.log(`Player2 à choisi Layla pour commencer le combat !`)
})

// -------------------------------------------------------------------------------------------------------------


const creatImgBarbaraSplashArtPlayer2 = document.createElement('img')
const creatImgBarbaraAtqNormalPlayer2 = document.createElement('img')
const creatImgBarbaraSkillPlayer2 = document.createElement('img')
const creatImgBarbaraUltiPlayer2 = document.createElement('img')

choiceBarbaraPlayer2.addEventListener(`click`, () => {
    choiceBarbaraPlayer2.style.filter = 'grayscale(0%)'
    choiceAmberPlayer2.style.filter = 'grayscale(100%)'
    choiceLaylaPlayer2.style.filter = 'grayscale(100%)'
    choiceYanfeiPlayer2.style.filter = 'grayscale(100%)'

    creatImgBarbaraSplashArtPlayer2.src = player2.barbaraPlayer2.barbaraSplashArtPlayer2
    const selectParentBarbaraSplashArtPlayer2 = document.querySelector(`.cardImg2`)
    selectParentBarbaraSplashArtPlayer2.appendChild(creatImgBarbaraSplashArtPlayer2)

    creatImgBarbaraAtqNormalPlayer2.src = player2.barbaraPlayer2.barbaraAtqNormalPlayer2
    const selectParentBarbaraAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
    selectParentBarbaraAtqNormalPlayer2.appendChild(creatImgBarbaraAtqNormalPlayer2)

    creatImgBarbaraSkillPlayer2.src = player2.barbaraPlayer2.barbaraSkillPlayer2
    const selectParentBarbaraSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
    selectParentBarbaraSkillPlayer2.appendChild(creatImgBarbaraSkillPlayer2)

    creatImgBarbaraUltiPlayer2.src = player2.barbaraPlayer2.barbaraUltiPlayer2
    const selectParentBarbaraUltiPlayer2 = document.querySelector(`.ulti2`)
    selectParentBarbaraUltiPlayer2.appendChild(creatImgBarbaraUltiPlayer2)

    console.log(`Player2 à choisi Barbara pour commencer le combat !`)
})

// -------------------------------------------------------------------------------------------------------------


const creatImgYanfeiSplashArtPlayer2 = document.createElement('img')
const creatImgYanfeiAtqNormalPlayer2 = document.createElement('img')
const creatImgYanfeiSkillPlayer2 = document.createElement('img')
const creatImgYanfeiUltiPlayer2 = document.createElement('img')

choiceYanfeiPlayer2.addEventListener(`click`, () => {
    choiceYanfeiPlayer2.style.filter = 'grayscale(0%)'
    choiceAmberPlayer2.style.filter = 'grayscale(100%)'
    choiceLaylaPlayer2.style.filter = 'grayscale(100%)'
    choiceBarbaraPlayer2.style.filter = 'grayscale(100%)'

    creatImgYanfeiSplashArtPlayer2.src = player2.yanfeiPlayer2.yanfeiSplashArtPlayer2
    const selectParentYanfeiSplashArtPlayer2 = document.querySelector(`.cardImg2`)
    selectParentYanfeiSplashArtPlayer2.appendChild(creatImgYanfeiSplashArtPlayer2)

    creatImgYanfeiAtqNormalPlayer2.src = player2.yanfeiPlayer2.yanfeiAtqNormalPlayer2
    const selectParentYanfeiAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
    selectParentYanfeiAtqNormalPlayer2.appendChild(creatImgYanfeiAtqNormalPlayer2)

    creatImgYanfeiSkillPlayer2.src = player2.yanfeiPlayer2.yanfeiSkillPlayer2
    const selectParentYanfeiSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
    selectParentYanfeiSkillPlayer2.appendChild(creatImgYanfeiSkillPlayer2)

    creatImgYanfeiUltiPlayer2.src = player2.yanfeiPlayer2.yanfeiUltiPlayer2
    const selectParentYanfeiUltiPlayer2 = document.querySelector(`.ulti2`)
    selectParentYanfeiUltiPlayer2.appendChild(creatImgYanfeiUltiPlayer2)

    console.log(`Player2 à choisi Yanfei pour commencer le combat !`)
})

// button -------------------------------------------------------------------------------------------------------------


const buttonFight = document.querySelector(`button`)
const selectPositionChoice = document.querySelector(`.positionChoice`)
const selectMain = document.querySelector(`main`)

buttonFight.addEventListener(`click`, () => {
    selectPositionChoice.style.display = `none`
    selectMain.style.display = `flex`
    console.log(`fight !`)
})

// -------------------------------------------------------------------------------------------------------------


const amberItem = document.querySelector(`.amber`)
let amberCounter = 0
amberItem.addEventListener('click', (event) => {

        if (amberCounter < 1) {
            creatImgAmberSplashArtPlayer1.src = player1.amberPlayer1.amberSplashArtPlayer1
            const selectParentAmberSplashArtPlayer1 = document.querySelector(`.cardImg`)
            selectParentAmberSplashArtPlayer1.appendChild(creatImgAmberSplashArtPlayer1)
    
            creatImgAmberAtqNormalPlayer1.src = player1.amberPlayer1.amberAtqNormalPlayer1
            const selectParentAmberAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
            selectParentAmberAtqNormalPlayer1.appendChild(creatImgAmberAtqNormalPlayer1)
    
            creatImgAmberSkillPlayer1.src = player1.amberPlayer1.amberSkillPlayer1
            const selectParentAmberSkillPlayer1 = document.querySelector(`.competenceSpecial`)
            selectParentAmberSkillPlayer1.appendChild(creatImgAmberSkillPlayer1)
    
            creatImgAmberUltiPlayer1.src = player1.amberPlayer1.amberUltiPlayer1
            const selectParentAmberUltiPlayer1 = document.querySelector(`.ulti`)
            selectParentAmberUltiPlayer1.appendChild(creatImgAmberUltiPlayer1)
    
            console.log(event)
            console.log('le player1 envoie Amber au combat !')
        }
    
        //Amber
        if (creatImgAmberSplashArtPlayer1) {
            creatImgAmberSplashArtPlayer1.style.display = "block";
        }
        if (creatImgAmberAtqNormalPlayer1) {
            creatImgAmberAtqNormalPlayer1.style.display = "block";
        }
        if (creatImgAmberSkillPlayer1) {
            creatImgAmberSkillPlayer1.style.display = "block";
        }
        if (creatImgAmberUltiPlayer1) {
            creatImgAmberUltiPlayer1.style.display = "block";
        }
    
        //Layla
        if (creatImgLaylaSplashArtPlayer1) {
            creatImgLaylaSplashArtPlayer1.style.display = "none";
        }
        if (creatImgLaylaAtqNormalPlayer1) {
            creatImgLaylaAtqNormalPlayer1.style.display = "none";
        }
        if (creatImgLaylaSkillPlayer1) {
            creatImgLaylaSkillPlayer1.style.display = "none";
        }
        if (creatImgLaylaUltiPlayer1) {
            creatImgLaylaUltiPlayer1.style.display = "none";
        }
    
        //Barbara
        if (creatImgBarbaraSplashArtPlayer1) {
            creatImgBarbaraSplashArtPlayer1.style.display = "none";
        }
        if (creatImgBarbaraAtqNormalPlayer1) {
            creatImgBarbaraAtqNormalPlayer1.style.display = "none";
        }
        if (creatImgBarbaraSkillPlayer1) {
            creatImgBarbaraSkillPlayer1.style.display = "none";
        }
        if (creatImgBarbaraUltiPlayer1) {
            creatImgBarbaraUltiPlayer1.style.display = "none";
        }
    
        //Yanfei
        if (creatImgYanfeiSplashArtPlayer1) {
            creatImgYanfeiSplashArtPlayer1.style.display = "none";
        }
        if (creatImgYanfeiAtqNormalPlayer1) {
            creatImgYanfeiAtqNormalPlayer1.style.display = "none";
        }
        if (creatImgYanfeiSkillPlayer1) {
            creatImgYanfeiSkillPlayer1.style.display = "none";
        }
        if (creatImgYanfeiUltiPlayer1) {
            creatImgYanfeiUltiPlayer1.style.display = "none";
        }
        amberCounter = 1
    });

// -------------------------------------------------------------------------------------------------------------


const laylaItem = document.querySelector(`.layla`)
let laylaCounter = 0

laylaItem.addEventListener('click', (event) => {

    if (laylaCounter < 1) {
        creatImgLaylaSplashArtPlayer1.src = player1.laylaPlayer1.laylaSplashArtPlayer1
        const selectParentLaylaSplashArtPlayer1 = document.querySelector(`.cardImg`)
        selectParentLaylaSplashArtPlayer1.appendChild(creatImgLaylaSplashArtPlayer1)

        creatImgLaylaAtqNormalPlayer1.src = player1.laylaPlayer1.laylaAtqNormalPlayer1
        const selectParentLaylaAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
        selectParentLaylaAtqNormalPlayer1.appendChild(creatImgLaylaAtqNormalPlayer1)

        creatImgLaylaSkillPlayer1.src = player1.laylaPlayer1.laylaSkillPlayer1
        const selectParentLaylaSkillPlayer1 = document.querySelector(`.competenceSpecial`)
        selectParentLaylaSkillPlayer1.appendChild(creatImgLaylaSkillPlayer1)

        creatImgLaylaUltiPlayer1.src = player1.laylaPlayer1.laylaUltiPlayer1
        const selectParentLaylaUltiPlayer1 = document.querySelector(`.ulti`)
        selectParentLaylaUltiPlayer1.appendChild(creatImgLaylaUltiPlayer1)

        console.log(event)
        console.log('le player1 envoie Layla au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer1) {
        creatImgAmberSplashArtPlayer1.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer1) {
        creatImgAmberAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgAmberSkillPlayer1) {
        creatImgAmberSkillPlayer1.style.display = "none";
    }
    if (creatImgAmberUltiPlayer1) {
        creatImgAmberUltiPlayer1.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer1) {
        creatImgLaylaSplashArtPlayer1.style.display = "block";
    }
    if (creatImgLaylaAtqNormalPlayer1) {
        creatImgLaylaAtqNormalPlayer1.style.display = "block";
    }
    if (creatImgLaylaSkillPlayer1) {
        creatImgLaylaSkillPlayer1.style.display = "block";
    }
    if (creatImgLaylaUltiPlayer1) {
        creatImgLaylaUltiPlayer1.style.display = "block";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer1) {
        creatImgBarbaraSplashArtPlayer1.style.display = "none";
    }
    if (creatImgBarbaraAtqNormalPlayer1) {
        creatImgBarbaraAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgBarbaraSkillPlayer1) {
        creatImgBarbaraSkillPlayer1.style.display = "none";
    }
    if (creatImgBarbaraUltiPlayer1) {
        creatImgBarbaraUltiPlayer1.style.display = "none";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer1) {
        creatImgYanfeiSplashArtPlayer1.style.display = "none";
    }
    if (creatImgYanfeiAtqNormalPlayer1) {
        creatImgYanfeiAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgYanfeiSkillPlayer1) {
        creatImgYanfeiSkillPlayer1.style.display = "none";
    }
    if (creatImgYanfeiUltiPlayer1) {
        creatImgYanfeiUltiPlayer1.style.display = "none";
    }
    laylaCounter = 1
});

// -------------------------------------------------------------------------------------------------------------


const barbaraItem = document.querySelector(`.barbara`)
let barbaraCounter = 0

barbaraItem.addEventListener('click', (event) => {

    if (barbaraCounter < 1) {

        creatImgBarbaraSplashArtPlayer1.src = player1.barbaraPlayer1.barbaraSplashArtPlayer1
        const selectParentBarbaraSplashArtPlayer1 = document.querySelector(`.cardImg`)
        selectParentBarbaraSplashArtPlayer1.appendChild(creatImgBarbaraSplashArtPlayer1)

        creatImgBarbaraAtqNormalPlayer1.src = player1.barbaraPlayer1.barbaraAtqNormalPlayer1
        const selectParentBarbaraAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
        selectParentBarbaraAtqNormalPlayer1.appendChild(creatImgBarbaraAtqNormalPlayer1)

        creatImgBarbaraSkillPlayer1.src = player1.barbaraPlayer1.barbaraSkillPlayer1
        const selectParentBarbaraSkillPlayer1 = document.querySelector(`.competenceSpecial`)
        selectParentBarbaraSkillPlayer1.appendChild(creatImgBarbaraSkillPlayer1)

        creatImgBarbaraUltiPlayer1.src = player1.barbaraPlayer1.barbaraUltiPlayer1
        const selectParentBarbaraUltiPlayer1 = document.querySelector(`.ulti`)
        selectParentBarbaraUltiPlayer1.appendChild(creatImgBarbaraUltiPlayer1)

        console.log(event)
        console.log('le player1 envoie Barbara au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer1) {
        creatImgAmberSplashArtPlayer1.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer1) {
        creatImgAmberAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgAmberSkillPlayer1) {
        creatImgAmberSkillPlayer1.style.display = "none";
    }
    if (creatImgAmberUltiPlayer1) {
        creatImgAmberUltiPlayer1.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer1) {
        creatImgLaylaSplashArtPlayer1.style.display = "none";
    }
    if (creatImgLaylaAtqNormalPlayer1) {
        creatImgLaylaAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgLaylaSkillPlayer1) {
        creatImgLaylaSkillPlayer1.style.display = "none";
    }
    if (creatImgLaylaUltiPlayer1) {
        creatImgLaylaUltiPlayer1.style.display = "none";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer1) {
        creatImgBarbaraSplashArtPlayer1.style.display = "block";
    }
    if (creatImgBarbaraAtqNormalPlayer1) {
        creatImgBarbaraAtqNormalPlayer1.style.display = "block";
    }
    if (creatImgBarbaraSkillPlayer1) {
        creatImgBarbaraSkillPlayer1.style.display = "block";
    }
    if (creatImgBarbaraUltiPlayer1) {
        creatImgBarbaraUltiPlayer1.style.display = "block";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer1) {
        creatImgYanfeiSplashArtPlayer1.style.display = "none";
    }
    if (creatImgYanfeiAtqNormalPlayer1) {
        creatImgYanfeiAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgYanfeiSkillPlayer1) {
        creatImgYanfeiSkillPlayer1.style.display = "none";
    }
    if (creatImgYanfeiUltiPlayer1) {
        creatImgYanfeiUltiPlayer1.style.display = "none";
    }
    barbaraCounter = 1
});

// -------------------------------------------------------------------------------------------------------------


const yanfeiItem = document.querySelector(`.yanfei`)
let yanfeiCounter = 0

yanfeiItem.addEventListener('click', (event) => {

    if (yanfeiCounter < 1) {
        creatImgYanfeiSplashArtPlayer1.src = player1.yanfeiPlayer1.yanfeiSplashArtPlayer1
        const selectParentYanfeiSplashArtPlayer1 = document.querySelector(`.cardImg`)
        selectParentYanfeiSplashArtPlayer1.appendChild(creatImgYanfeiSplashArtPlayer1)

        creatImgYanfeiAtqNormalPlayer1.src = player1.yanfeiPlayer1.yanfeiAtqNormalPlayer1
        const selectParentYanfeiAtqNormalPlayer1 = document.querySelector(`.atqNormal`)
        selectParentYanfeiAtqNormalPlayer1.appendChild(creatImgYanfeiAtqNormalPlayer1)

        creatImgYanfeiSkillPlayer1.src = player1.yanfeiPlayer1.yanfeiSkillPlayer1
        const selectParentYanfeiSkillPlayer1 = document.querySelector(`.competenceSpecial`)
        selectParentYanfeiSkillPlayer1.appendChild(creatImgYanfeiSkillPlayer1)

        creatImgYanfeiUltiPlayer1.src = player1.yanfeiPlayer1.yanfeiUltiPlayer1
        const selectParentYanfeiUltiPlayer1 = document.querySelector(`.ulti`)
        selectParentYanfeiUltiPlayer1.appendChild(creatImgYanfeiUltiPlayer1)

        console.log(event)
        console.log('le player1 envoie Yanfei au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer1) {
        creatImgAmberSplashArtPlayer1.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer1) {
        creatImgAmberAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgAmberSkillPlayer1) {
        creatImgAmberSkillPlayer1.style.display = "none";
    }
    if (creatImgAmberUltiPlayer1) {
        creatImgAmberUltiPlayer1.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer1) {
        creatImgLaylaSplashArtPlayer1.style.display = "none";
    }
    if (creatImgLaylaAtqNormalPlayer1) {
        creatImgLaylaAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgLaylaSkillPlayer1) {
        creatImgLaylaSkillPlayer1.style.display = "none";
    }
    if (creatImgLaylaUltiPlayer1) {
        creatImgLaylaUltiPlayer1.style.display = "none";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer1) {
        creatImgBarbaraSplashArtPlayer1.style.display = "none";
    }
    if (creatImgBarbaraAtqNormalPlayer1) {
        creatImgBarbaraAtqNormalPlayer1.style.display = "none";
    }
    if (creatImgBarbaraSkillPlayer1) {
        creatImgBarbaraSkillPlayer1.style.display = "none";
    }
    if (creatImgBarbaraUltiPlayer1) {
        creatImgBarbaraUltiPlayer1.style.display = "none";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer1) {
        creatImgYanfeiSplashArtPlayer1.style.display = "block";
    }
    if (creatImgYanfeiAtqNormalPlayer1) {
        creatImgYanfeiAtqNormalPlayer1.style.display = "block";
    }
    if (creatImgYanfeiSkillPlayer1) {
        creatImgYanfeiSkillPlayer1.style.display = "block";
    }
    if (creatImgYanfeiUltiPlayer1) {
        creatImgYanfeiUltiPlayer1.style.display = "block";
    }
    yanfeiCounter = 1
});

// -------------------------------------------------------------------------------------------------------------


const amberItem2 = document.querySelector(`.amber2`)
let amberCounter2 = 0

amberItem2.addEventListener('click', (event) => {

    if (amberCounter2 < 1) {
        creatImgAmberSplashArtPlayer2.src = player2.amberPlayer2.amberSplashArtPlayer2
        const selectParentAmberSplashArtPlayer2 = document.querySelector(`.cardImg2`)
        selectParentAmberSplashArtPlayer2.appendChild(creatImgAmberSplashArtPlayer2)

        creatImgAmberAtqNormalPlayer2.src = player2.amberPlayer2.amberAtqNormalPlayer2
        const selectParentAmberAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
        selectParentAmberAtqNormalPlayer2.appendChild(creatImgAmberAtqNormalPlayer2)

        creatImgAmberSkillPlayer2.src = player2.amberPlayer2.amberSkillPlayer2
        const selectParentAmberSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
        selectParentAmberSkillPlayer2.appendChild(creatImgAmberSkillPlayer2)

        creatImgAmberUltiPlayer2.src = player2.amberPlayer2.amberUltiPlayer2
        const selectParentAmberUltiPlayer2 = document.querySelector(`.ulti2`)
        selectParentAmberUltiPlayer2.appendChild(creatImgAmberUltiPlayer2)

        console.log(event)
        console.log('le player2 envoie Amber au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer2) {
        creatImgAmberSplashArtPlayer2.style.display = "block";
    }
    if (creatImgAmberAtqNormalPlayer2) {
        creatImgAmberAtqNormalPlayer2.style.display = "block";
    }
    if (creatImgAmberSkillPlayer2) {
        creatImgAmberSkillPlayer2.style.display = "block";
    }
    if (creatImgAmberUltiPlayer2) {
        creatImgAmberUltiPlayer2.style.display = "block";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer2) {
        creatImgLaylaSplashArtPlayer2.style.display = "none";
    }
    if (creatImgLaylaAtqNormalPlayer2) {
        creatImgLaylaAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgLaylaSkillPlayer2) {
        creatImgLaylaSkillPlayer2.style.display = "none";
    }
    if (creatImgLaylaUltiPlayer2) {
        creatImgLaylaUltiPlayer2.style.display = "none";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer2) {
        creatImgBarbaraSplashArtPlayer2.style.display = "none";
    }
    if (creatImgBarbaraAtqNormalPlayer2) {
        creatImgBarbaraAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgBarbaraSkillPlayer2) {
        creatImgBarbaraSkillPlayer2.style.display = "none";
    }
    if (creatImgBarbaraUltiPlayer2) {
        creatImgBarbaraUltiPlayer2.style.display = "none";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer2) {
        creatImgYanfeiSplashArtPlayer2.style.display = "none";
    }
    if (creatImgYanfeiAtqNormalPlayer2) {
        creatImgYanfeiAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgYanfeiSkillPlayer2) {
        creatImgYanfeiSkillPlayer2.style.display = "none";
    }
    if (creatImgYanfeiUltiPlayer2) {
        creatImgYanfeiUltiPlayer2.style.display = "none";
    }
    amberCounter2 = 1
});

// -------------------------------------------------------------------------------------------------------------


const laylaItem2 = document.querySelector(`.layla2`)
let laylaCounter2 = 0

laylaItem2.addEventListener('click', (event) => {

    if (laylaCounter2 < 1) {

        creatImgLaylaSplashArtPlayer2.src = player2.laylaPlayer2.laylaSplashArtPlayer2
        const selectParentLaylaSplashArtPlayer2 = document.querySelector(`.cardImg2`)
        selectParentLaylaSplashArtPlayer2.appendChild(creatImgLaylaSplashArtPlayer2)

        creatImgLaylaAtqNormalPlayer2.src = player2.laylaPlayer2.laylaAtqNormalPlayer2
        const selectParentLaylaAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
        selectParentLaylaAtqNormalPlayer2.appendChild(creatImgLaylaAtqNormalPlayer2)

        creatImgLaylaSkillPlayer2.src = player2.laylaPlayer2.laylaSkillPlayer2
        const selectParentLaylaSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
        selectParentLaylaSkillPlayer2.appendChild(creatImgLaylaSkillPlayer2)

        creatImgLaylaUltiPlayer2.src = player2.laylaPlayer2.laylaUltiPlayer2
        const selectParentLaylaUltiPlayer2 = document.querySelector(`.ulti2`)
        selectParentLaylaUltiPlayer2.appendChild(creatImgLaylaUltiPlayer2)

        console.log(event)
        console.log('le player2 envoie Layla au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer2) {
        creatImgAmberSplashArtPlayer2.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer2) {
        creatImgAmberAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgAmberSkillPlayer2) {
        creatImgAmberSkillPlayer2.style.display = "none";
    }
    if (creatImgAmberUltiPlayer2) {
        creatImgAmberUltiPlayer2.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer2) {
        creatImgLaylaSplashArtPlayer2.style.display = "block";
    }
    if (creatImgLaylaAtqNormalPlayer2) {
        creatImgLaylaAtqNormalPlayer2.style.display = "block";
    }
    if (creatImgLaylaSkillPlayer2) {
        creatImgLaylaSkillPlayer2.style.display = "block";
    }
    if (creatImgLaylaUltiPlayer2) {
        creatImgLaylaUltiPlayer2.style.display = "block";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer2) {
        creatImgBarbaraSplashArtPlayer2.style.display = "none";
    }
    if (creatImgBarbaraAtqNormalPlayer2) {
        creatImgBarbaraAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgBarbaraSkillPlayer2) {
        creatImgBarbaraSkillPlayer2.style.display = "none";
    }
    if (creatImgBarbaraUltiPlayer2) {
        creatImgBarbaraUltiPlayer2.style.display = "none";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer2) {
        creatImgYanfeiSplashArtPlayer2.style.display = "none";
    }
    if (creatImgYanfeiAtqNormalPlayer2) {
        creatImgYanfeiAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgYanfeiSkillPlayer2) {
        creatImgYanfeiSkillPlayer2.style.display = "none";
    }
    if (creatImgYanfeiUltiPlayer2) {
        creatImgYanfeiUltiPlayer2.style.display = "none";
    }
    laylaCounter2 = 1
});

// -------------------------------------------------------------------------------------------------------------


const barbaraItem2 = document.querySelector(`.barbara2`)
let barbaraCounter2 = 0

barbaraItem2.addEventListener('click', (event) => {

    if (barbaraCounter2 < 1) {

        creatImgBarbaraSplashArtPlayer2.src = player2.barbaraPlayer2.barbaraSplashArtPlayer2
        const selectParentBarbaraSplashArtPlayer2 = document.querySelector(`.cardImg2`)
        selectParentBarbaraSplashArtPlayer2.appendChild(creatImgBarbaraSplashArtPlayer2)

        creatImgBarbaraAtqNormalPlayer2.src = player2.barbaraPlayer2.barbaraAtqNormalPlayer2
        const selectParentBarbaraAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
        selectParentBarbaraAtqNormalPlayer2.appendChild(creatImgBarbaraAtqNormalPlayer2)

        creatImgBarbaraSkillPlayer2.src = player2.barbaraPlayer2.barbaraSkillPlayer2
        const selectParentBarbaraSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
        selectParentBarbaraSkillPlayer2.appendChild(creatImgBarbaraSkillPlayer2)

        creatImgBarbaraUltiPlayer2.src = player2.barbaraPlayer2.barbaraUltiPlayer2
        const selectParentBarbaraUltiPlayer2 = document.querySelector(`.ulti2`)
        selectParentBarbaraUltiPlayer2.appendChild(creatImgBarbaraUltiPlayer2)

        console.log(event)
        console.log('le player2 envoie Barbara au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer2) {
        creatImgAmberSplashArtPlayer2.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer2) {
        creatImgAmberAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgAmberSkillPlayer2) {
        creatImgAmberSkillPlayer2.style.display = "none";
    }
    if (creatImgAmberUltiPlayer2) {
        creatImgAmberUltiPlayer2.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer2) {
        creatImgLaylaSplashArtPlayer2.style.display = "none";
    }
    if (creatImgLaylaAtqNormalPlayer2) {
        creatImgLaylaAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgLaylaSkillPlayer2) {
        creatImgLaylaSkillPlayer2.style.display = "none";
    }
    if (creatImgLaylaUltiPlayer2) {
        creatImgLaylaUltiPlayer2.style.display = "none";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer2) {
        creatImgBarbaraSplashArtPlayer2.style.display = "block";
    }
    if (creatImgBarbaraAtqNormalPlayer2) {
        creatImgBarbaraAtqNormalPlayer2.style.display = "block";
    }
    if (creatImgBarbaraSkillPlayer2) {
        creatImgBarbaraSkillPlayer2.style.display = "block";
    }
    if (creatImgBarbaraUltiPlayer2) {
        creatImgBarbaraUltiPlayer2.style.display = "block";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer2) {
        creatImgYanfeiSplashArtPlayer2.style.display = "none";
    }
    if (creatImgYanfeiAtqNormalPlayer2) {
        creatImgYanfeiAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgYanfeiSkillPlayer2) {
        creatImgYanfeiSkillPlayer2.style.display = "none";
    }
    if (creatImgYanfeiUltiPlayer2) {
        creatImgYanfeiUltiPlayer2.style.display = "none";
    }
    barbaraCounter2 = 1
});

// -------------------------------------------------------------------------------------------------------------


const yanfeiItem2 = document.querySelector(`.yanfei2`)
let yanfeiCounter2 = 0

yanfeiItem2.addEventListener('click', (event) => {

    if (yanfeiCounter2 < 1) {

        creatImgYanfeiSplashArtPlayer2.src = player2.yanfeiPlayer2.yanfeiSplashArtPlayer2
        const selectParentYanfeiSplashArtPlayer2 = document.querySelector(`.cardImg2`)
        selectParentYanfeiSplashArtPlayer2.appendChild(creatImgYanfeiSplashArtPlayer2)

        creatImgYanfeiAtqNormalPlayer2.src = player2.yanfeiPlayer2.yanfeiAtqNormalPlayer2
        const selectParentYanfeiAtqNormalPlayer2 = document.querySelector(`.atqNormal2`)
        selectParentYanfeiAtqNormalPlayer2.appendChild(creatImgYanfeiAtqNormalPlayer2)

        creatImgYanfeiSkillPlayer2.src = player2.yanfeiPlayer2.yanfeiSkillPlayer2
        const selectParentYanfeiSkillPlayer2 = document.querySelector(`.competenceSpecial2`)
        selectParentYanfeiSkillPlayer2.appendChild(creatImgYanfeiSkillPlayer2)

        creatImgYanfeiUltiPlayer2.src = player2.yanfeiPlayer2.yanfeiUltiPlayer2
        const selectParentYanfeiUltiPlayer2 = document.querySelector(`.ulti2`)
        selectParentYanfeiUltiPlayer2.appendChild(creatImgYanfeiUltiPlayer2)

        console.log(event)
        console.log('le player2 envoie Yanfei au combat !')
    }

    //Amber
    if (creatImgAmberSplashArtPlayer2) {
        creatImgAmberSplashArtPlayer2.style.display = "none";
    }
    if (creatImgAmberAtqNormalPlayer2) {
        creatImgAmberAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgAmberSkillPlayer2) {
        creatImgAmberSkillPlayer2.style.display = "none";
    }
    if (creatImgAmberUltiPlayer2) {
        creatImgAmberUltiPlayer2.style.display = "none";
    }

    //Layla
    if (creatImgLaylaSplashArtPlayer2) {
        creatImgLaylaSplashArtPlayer2.style.display = "none";
    }
    if (creatImgLaylaAtqNormalPlayer2) {
        creatImgLaylaAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgLaylaSkillPlayer2) {
        creatImgLaylaSkillPlayer2.style.display = "none";
    }
    if (creatImgLaylaUltiPlayer2) {
        creatImgLaylaUltiPlayer2.style.display = "none";
    }

    //Barbara
    if (creatImgBarbaraSplashArtPlayer2) {
        creatImgBarbaraSplashArtPlayer2.style.display = "none";
    }
    if (creatImgBarbaraAtqNormalPlayer2) {
        creatImgBarbaraAtqNormalPlayer2.style.display = "none";
    }
    if (creatImgBarbaraSkillPlayer2) {
        creatImgBarbaraSkillPlayer2.style.display = "none";
    }
    if (creatImgBarbaraUltiPlayer2) {
        creatImgBarbaraUltiPlayer2.style.display = "none";
    }

    //Yanfei
    if (creatImgYanfeiSplashArtPlayer2) {
        creatImgYanfeiSplashArtPlayer2.style.display = "block";
    }
    if (creatImgYanfeiAtqNormalPlayer2) {
        creatImgYanfeiAtqNormalPlayer2.style.display = "block";
    }
    if (creatImgYanfeiSkillPlayer2) {
        creatImgYanfeiSkillPlayer2.style.display = "block";
    }
    if (creatImgYanfeiUltiPlayer2) {
        creatImgYanfeiUltiPlayer2.style.display = "block";
    }
    yanfeiCounter2 = 1
});