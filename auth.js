document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const formWrapper = document.getElementById("formWrapper");
  const formTitle = document.getElementById("formTitle");
  const bottomLink = document.getElementById("bottomLink");

  loginTab.onclick = () => {
    formWrapper.classList.remove("slide");
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    formTitle.innerText = "Login DailyFit";
    bottomLink.innerHTML = 'Belum punya akun? <a href="#" id="linkToRegister">Daftar</a>';
  };

  registerTab.onclick = () => {
    formWrapper.classList.add("slide");
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    formTitle.innerText = "Daftar DailyFit";
    bottomLink.innerHTML = 'Sudah punya akun? <a href="#" id="linkToLogin">Login</a>';
  };

  bottomLink.onclick = (e) => {
    if (e.target.id === "linkToRegister") registerTab.click();
    if (e.target.id === "linkToLogin") loginTab.click();
  };
});
