
import "./styles/style.scss";
import {getCharactersByName, getCharactersById} from "./api/api"

let article = document.querySelector('.article') as HTMLElement
let elem = document.querySelector('.block2') as HTMLElement
let elem2 = document.querySelector('.block3') as HTMLElement

function setIntervalAnim() {
    var maxDistToTravel = article?.offsetWidth - elem?.offsetWidth - 20; // container width - red box width
    var pos = 0;
    var end = maxDistToTravel;
    var direction = 1;

    function frame() {
        if (pos === end) {
            direction *= -1; // reverses current direction
            end = Math.abs(maxDistToTravel - end);
        }
        pos += direction;

        elem.style.left = pos + "px";
    }

    let timer = setInterval(frame, 16.6);
}

function reqAnimFram() {
    var maxDistToTravel = article.offsetWidth - elem2.offsetWidth - 20; // container width - red box width
    var pos = 0;
    var end = maxDistToTravel;
    var direction = 1;
    let prevTime = 0

    function step(time: number) {
        var ss = requestAnimationFrame(step);
        if (!prevTime) {
            prevTime = time;
        }
        var timestamp = (time - prevTime);
        //console.log("dgggd:", timestamp);
        prevTime = time;

        if (pos > end || pos < 0) {
            direction *= -1; // reverses current direction

        }
        pos += direction * (timestamp / 1000 * 60);
        //console.log(timestamp/1000*60);

        elem2.style.left = pos + "px";
    }

    var s = requestAnimationFrame(step);
}

let input = document.querySelector('.input') as HTMLInputElement
let select = document.querySelector('.select') as HTMLElement

interface Character{
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": [
        string
    ],
    "url": string,
    "created": string
}

function createElementsForCharacter(char:Character, parentNode: HTMLElement) {
    let imgForChar = document.createElement('img')
    imgForChar.src = char.image
    let name = document.createElement('p')
    let gender = document.createElement('p')
    let location = document.createElement('p')
    let species = document.createElement('p')
    name.textContent = `Name: ${char.name}`
    gender.textContent = `Gender: ${char.gender}`
    location.textContent = `Location: ${char.location.name}`
    species.textContent = `Species: ${char.species}`
    parentNode.append(imgForChar, name, gender, location, species)
}

async function addInfoAboutFourRandomChars() {
    const randomIds = []
    for (let i = 0; i < 4; i++) {
        randomIds.push(Math.floor(Math.random() * 826))
    }
    console.log(randomIds)

    const characters = await getCharactersById(randomIds)
    console.log(characters)

    let section = document.querySelector('.content__wrapper-article')
    console.log(section?.children)
    for (let i = 0; i < characters.length; i++) {
        createElementsForCharacter(characters[i], section?.children[i] as HTMLElement)
    }
}

async function showSearchingCharacters() {

    let name = input?.value;
    let characters = await getCharactersByName(name)

    if (select.childNodes.length !== 0) {
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
    }

    characters
        .filter((x:Character) => x.name.match(new RegExp(`${name}`, 'gi')))
        .slice(0, 10)
        .forEach((el: Character) => {
            const node = document.createElement("li");
            node.setAttribute('data-value', String(el.id));
            node.setAttribute('data-name', el.name);
            const textnode = document.createTextNode(el.name);
            node.appendChild(textnode);
            node.addEventListener('click', () => addInfoAboutSelectedChar(node.dataset.value!));
            select.appendChild(node);
        })

}

async function addInfoAboutSelectedChar(id: string) {
    let selectedCharacter = document.querySelector('.selectedCharacter') as HTMLElement
    console.log(id)
    selectedCharacter.innerHTML = ''
    let character = await getCharactersById(Number(id))
    console.log(character)
    createElementsForCharacter(character, selectedCharacter)
}

input.onkeyup = function () {
    showSearchingCharacters()
}


let workerBtn = document.querySelector('.worker') as HTMLElement
let nonWorkerBtn = document.querySelector('.nonWorker') as HTMLElement


workerBtn.onclick = function () {

//To load web worker from FILE in a project set up with Webpack
//         let worker = new Worker(URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], {type: 'text/javascript'})))
        let worker = new Worker('worker.js')
        worker.postMessage(45)

        worker.onmessage = function (message) {
            console.log(message.data);
        }


}

nonWorkerBtn.onclick = function () {
    console.log(hardCalc(45))
}

export function hardCalc(num:number) {
    function fibonacci(num:number) :number{
        if (num < 2) {
            return num
        }
        return fibonacci(num - 1) + fibonacci(num - 2)
    }

    return fibonacci(num)
}


window.onload = function () {
    setIntervalAnim()
    reqAnimFram()
    addInfoAboutFourRandomChars()
}






