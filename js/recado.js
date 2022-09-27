//criar recado
let form = document.getElementById("tbody");

const email = localStorage.getItem("data");

//Verificar se tem usuário logado
const usuarioLogado = localStorage.getItem("email");
if (!email) {
  alert("Faça login");
  window.location.href = "index.html";
}

window.addEventListener("load", getRecados);

document
  .getElementById("input-recados")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(email));
    const description = document.getElementById("description-input");
    console.log(description);
    const detailing = document.getElementById("detal-input");

    if (!description || description.length < 3) {
      alert("Descrição inválida, mínimo de 3 caracteres! ");
      return;
    }
    if (!detailing || detailing.length < 3) {
      alert("Descrição inválida");
      return;
    }

    user.recados.push({
      id: Math.floor(Date.now() / 1000),
      description: description.value,
      detailing: detailing.value,
    });
    localStorage.setItem(email, JSON.stringify(user));

    //limpar input de cadastro
    description.value = "";
    detailing.value = "";
    getRecados();
    alert("Recado adicionado com sussesso!");
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
  let description = prompt(
    `Digite a nova descrição!`,
    `${usuario.recados[recadoEditado].description}`
  );
  if (!description || description.length < 3) {
    alert("Descrição inválida, mínimo de 3 caracteres!");
    return;
  }

  let detailing = prompt(
    `Digite a nova descrição!`,
    `${usuario.recados[recadoEditado].detailing}`
  );

  if (!detailing || detailing.length < 3) {
    alert("Descrição inválida");
    return;
  }
  usuario.recados[recadoEditado].description = description;
  usuario.recados[recadoEditado].detailing = detailing;

  localStorage.setItem(email, JSON.stringify(usuario));
  getRecados();
}
