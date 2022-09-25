//criar recado
let form = document.getElementById("tbody");
const description = document.getElementById("description-input");
const detailing = document.getElementById("detal-input");
const email = localStorage.getItem("data");

//Verificar se tem usuário logado
const usuarioLogado = localStorage.getItem("email");
if (!email) {
  alert("Faça login");
  window.location.href = "1login.html";
}

window.addEventListener("load", getRecados);

document
  .getElementById("input-recados")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(email));

    user.recados.push({
      id: Math.floor(Date.now() / 1000),
      description: description.value,
      detailing: detailing.value,
    });
    localStorage.setItem(email, JSON.stringify(user));

    alert("Recado adicionado com sussesso!");
    //limpar input de cadastro
    description.value = "";
    detailing.value = "";
    getRecados();
  });

//lançar recado na pagina
function getRecados() {
  const usuario = JSON.parse(localStorage.getItem(email));
  //console.log(usuario);
  form.innerHTML = ``;
  let numero = 1;
  for (const recad of usuario.recados) {
    form.innerHTML += `
  <tr>
   <th>${numero}</th>
   <td>${recad.description}</td>
    <td>${recad.detailing}</td>
   <td>
      <input onclick="apagarRecado(${recad.id})" type="submit" value="apagar" class="submit" id="btnapagar" />
      <input onclick="editarRecado(${recad.id})" type="submit" value="editar" class="submit" id="btneditar" />
   </td>
  </tr>`;
    numero++;
  }
}

//apagar recado
function apagarRecado(id) {
  const usuario = JSON.parse(localStorage.getItem(email));
  const recadoDelet = usuario.recados.findIndex((recados) => recados.id === id);
  if (recadoDelet < 0) {
    return;
  }
  usuario.recados.splice(recadoDelet, 1);
  localStorage.setItem(email, JSON.stringify(usuario));
  getRecados();
}

//editar recado
function editarRecado(id) {
  const usuario = JSON.parse(localStorage.getItem(email));
  const recadoEditado = usuario.recados.findIndex(
    (recados) => recados.id === id
  );
  usuario.recados[recadoEditado].description = prompt(
    "Digite a nova descrição!"
  );
  usuario.recados[recadoEditado].detailing = prompt("Edite o detalhamento!");
  localStorage.setItem(email, JSON.stringify(usuario));
  getRecados();
}
