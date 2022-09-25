//criar recado
const form = document.getElementById("tbody");
const description = document.getElementById("description-input");
const detalhamento = document.getElementById("detal-input");

document
  .getElementById("input-recados")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let data = {
      recados: [],
    };

    console.log(description, detalhamento);

    data.recados.push({
      //id: data.length + 1,
      description: description.value,
      detalhamento: detalhamento.value,
    });
    saveData(data);
    alert("Recado adicionado com sussesso!");
    getRecados(data.recados);
  });

//lançar recado na pagina
function getRecados(data) {
  const recados = data;
  let recadosHtml = ``;

  recadosHtml += `
       <tr>
        <th>${data.recados.id}</th>
        <td>${data.recados.description}</td>
         <td>${data.recados.detalhamento}</td>
        <td>
           <input type="submit" value="apagar" class="submit" id="btnapagar" />
           <input type="submit" value="editar" class="submit" id="btneditar" />
        </td>
       </tr>`;
  document.getElementById("tbody").innerHTML = recadosHtml;
}
//salvar local
function saveData(data) {
  localStorage.setItem("data", JSON.stringify(data));
}
