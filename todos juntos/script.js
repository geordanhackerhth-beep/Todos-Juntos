// Detectar el scroll para cambiar el estilo del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "5px 0";
        header.style.backgroundColor = "#f9f9f9";
    } else {
        header.style.padding = "10px 0";
        header.style.backgroundColor = "#ffffff";
    }
});

const btnPublicar = document.getElementById('btn-publicar');
const postInput = document.getElementById('post-input');

btnPublicar.addEventListener('click', () => {
    const texto = postInput.value.trim();
    
    if (texto !== "") {
        alert("¡Publicando en Todos Juntos!: " + texto);
        postInput.value = ""; // Limpiar la caja
    } else {
        alert("¡Escribe algo primero!");
    }
});

const btnPublicar = document.getElementById('btn-publicar');
const postInput = document.getElementById('post-input');
const feed = document.getElementById('feed-container');

btnPublicar.addEventListener('click', () => {
    const texto = postInput.value.trim();
    
    if (texto !== "") {
        // Crear el elemento de la nueva publicación
        const nuevoPost = document.createElement('article');
        nuevoPost.classList.add('post-card');
        
        nuevoPost.innerHTML = `
            <div class="post-header">
                <div class="user-avatar-mini" style="background-color: #2ecc71;"></div>
                <div class="post-info">
                    <span class="user-name">Tú (Usuario)</span>
                    <span class="post-time">Ahora mismo</span>
                </div>
            </div>
            <div class="post-body">
                <p>${texto}</p>
            </div>
            <div class="post-footer">
                <button class="btn-action">⭐ 0</button>
                <button class="btn-action">💬 0</button>
                <button class="btn-action">Compartir</button>
            </div>
        `;
        
        // Insertar al principio del feed
        feed.prepend(nuevoPost);
        
        // Limpiar input
        postInput.value = "";
    }
});

document.addEventListener('click', function(e) {
    if(e.target && e.target.classList.contains('btn-follow')) {
        const btn = e.target;
        if(btn.innerText === "Conectar") {
            btn.innerText = "Siguiendo";
            btn.style.backgroundColor = "#d4d400"; // Tu amarillo
            btn.style.borderColor = "#d4d400";
            btn.style.color = "white";
        } else {
            btn.innerText = "Conectar";
            btn.style.backgroundColor = "transparent";
            btn.style.borderColor = "#2ecc71";
            btn.style.color = "#2ecc71";
        }
    }
});

const notifContainer = document.querySelector('.notification-container');
const notifDropdown = document.getElementById('notif-dropdown');
const badge = document.getElementById('notif-badge');

notifContainer.addEventListener('click', (e) => {
    // Alternar la visualización del menú
    const isVisible = notifDropdown.style.display === 'block';
    notifDropdown.style.display = isVisible ? 'none' : 'block';
    
    // Si se abre, "limpiamos" las notificaciones ocultando el badge
    if (!isVisible) {
        badge.style.display = 'none';
    }
});

// Cerrar el menú si haces clic fuera de él
window.addEventListener('click', (e) => {
    if (!notifContainer.contains(e.target)) {
        notifDropdown.style.display = 'none';
    }
});

const btnEditar = document.querySelector('.btn-primary');
const bio = document.querySelector('.profile-bio');

btnEditar.addEventListener('click', () => {
    const nuevaBio = prompt("Escribe tu nueva biografía:", bio.innerText);
    if (nuevaBio) {
        bio.innerHTML = `${nuevaBio}`;
    }
});

const themeBtn = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');

// Al cargar la página, revisar si ya guardamos un tema antes
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = (currentTheme === 'light') ? 'dark' : 'light';
    
    // Aplicar el nuevo tema
    document.documentElement.setAttribute('data-theme', newTheme);
    // Guardar en la memoria del navegador
    localStorage.setItem('theme', newTheme);
    // Actualizar icono
    updateIcon(newTheme);
});

function updateIcon(theme) {
    themeIcon.innerText = (theme === 'light') ? '🌙' : '☀️';
}


const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendMsg = document.getElementById('send-msg');
const msgInput = document.getElementById('msg-input');
const chatMessages = document.getElementById('chat-messages');

// Abrir y cerrar el chat
chatToggle.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Enviar mensaje
function sendMessage() {
    const text = msgInput.value.trim();
    if (text !== "") {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', 'outgoing');
        msgDiv.innerText = text;
        chatMessages.appendChild(msgDiv);
        
        msgInput.value = "";
        // Scroll automático al último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

sendMsg.addEventListener('click', sendMessage);
msgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

const emojiBar = document.getElementById('emoji-bar');
const inputChat = document.getElementById('msg-input');

emojiBar.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN') {
        inputChat.value += e.target.innerText;
        inputChat.focus(); // Mantiene el cursor en el input
    }
});

