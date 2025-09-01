const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const container = document.getElementById("container");

document.getElementById("show-register").addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");

    container.classList.remove("login-active");
    container.classList.add("register-active");
});

document.getElementById("show-login").addEventListener("click", () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");

    container.classList.remove("register-active");
    container.classList.add("login-active");
});

// При загрузке ставим login-active
container.classList.add("login-active");

// Параллакс эффект по курсору
const bg = document.getElementById("bg");
document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 20;
    let y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

document.addEventListener("mousemove", (e) => {
    // Двигаем основной курсор
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Создаем след
    const trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    // Удаляем через 1.5 секунды (после fadeOut)
    setTimeout(() => {
    trail.remove();
    }, 1500);
});