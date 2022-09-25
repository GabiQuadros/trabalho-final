//criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Anote sua senha em local seguro, não será possivel recupera-la!");

  const email = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // if (password !== password) {
  //   alert("As senhas não coincidem! Tente novamente!");
  // return;
  // }
  saveAccount({
    login: email,
    password: password,
    recados: [],
  });
  alert("Conta criada com sucesso!");
  window.location.href = "index.html";
});
function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}
/////////
