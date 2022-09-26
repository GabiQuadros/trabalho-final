//criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const passwordconfirm = document.getElementById("passwordrepeat").value;
  console.log(email, password);

  if (email.length < 6) {
    alert("Insira um e-mail vállido");
    return;
  }
  if (password.length < 4) {
    alert("A senha precisa ter 4 dígitos");
    return;
  }

  if (passwordconfirm !== password) {
    alert("As senhas não coincidem! Tente novamente!");
    return;
  }

  saveAccount({
    login: email,
    password: password,
    recados: [],
  });
  alert("Anote sua senha em local seguro, não será possivel recupera-la!");
  alert("Conta criada com sucesso!");
  window.location.href = "index.html";
});
function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}
/////////
