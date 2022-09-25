//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("usuario-input").value;
  const password = document.getElementById("password-input").value;

  const account = getAccount(email);

  if (!account) {
    alert("Verifique seu e-mail ou senha!");
    return;
  }
  if (account) {
    if (account.password !== password) {
      alert("Verifique seu e-mail ou senha!");
      return;
    }
    saveData(account.login);
    window.location.href = "message.html";
  }
});

function getAccount(key) {
  const account = localStorage.getItem(key);
  if (account) {
    return JSON.parse(account);
  }
  return "";
}
function saveData(email) {
  localStorage.setItem("data", email);
}
