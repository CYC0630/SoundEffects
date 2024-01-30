const sounds = document.getElementsByClassName("sound");
const soundTbody = document.getElementById("soundTbody");
let index = 0;
for (let sound of sounds)
{
    const soundRow = document.createElement("tr");

    const td1 = document.createElement("td");
    const titleLink = document.createElement("a");
    const newID = "sound" + index++;
    titleLink.href = "#" + newID;
    titleLink.textContent = sound.children[0].textContent;
    td1.appendChild(titleLink);
    sound.id = newID;
    soundRow.appendChild(td1);

    const td2 = document.createElement("td");
    td2.textContent = sound.children[1].childElementCount;
    td2.classList.add("count");
    soundRow.appendChild(td2);

    soundTbody.appendChild(soundRow);
}