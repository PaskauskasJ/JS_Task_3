/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const BUTTON = document.getElementById("btn");
const OUTPUT = document.getElementById("output");

async function getData(url) {
  try {
    const result = await fetch(url);
    data = result.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function fillUsers(url) {
  const userData = await getData(url);
  console.log(userData);
  drawUsers(userData);
}

function drawUsers(userData) {
  const paragraph = document.getElementById("message");
  paragraph.remove();
  userData.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.classList = "wrap";
    const loginDiv = document.createElement("div");
    loginDiv.classList = "loginDiv";
    const login = document.createElement("h2");
    login.textContent = item.login;
    loginDiv.append(login);
    const avatarDiv = document.createElement("div");
    avatarDiv.classList = "avatarDiv";
    const avatar = document.createElement("img");
    avatar.src = item.avatar_url;
    avatarDiv.append(avatar);
    wrapper.append(avatarDiv, loginDiv);
    OUTPUT.append(wrapper);
  });
}

BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  fillUsers(ENDPOINT);
});
