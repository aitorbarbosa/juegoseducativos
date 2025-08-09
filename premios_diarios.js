const STORAGE_KEY = 'premiosDiarios';
const premios = [
  { tipo: 'vidas', min: 1, max: 5 },
  { tipo: 'monedas', min: 100, max: 1000 },
  { tipo: 'gemas', min: 1, max: 10 },
  { tipo: 'cofre', rareza: 'común' },
  { tipo: 'cofre', rareza: 'raro' },
  { tipo: 'cofre', rareza: 'épico' },
  { tipo: 'cofre', rareza: 'legendario' }
];

function hoy() {
  return new Date().toISOString().split('T')[0];
}

function cargarEstado() {
  const datos = localStorage.getItem(STORAGE_KEY);
  if (!datos) return { ultimaFecha: null, streak: 0 };
  try {
    return JSON.parse(datos);
  } catch (_) {
    return { ultimaFecha: null, streak: 0 };
  }
}

function guardarEstado(estado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function reiniciarEstado() {
  guardarEstado({ ultimaFecha: null, streak: 0 });
}

function crearVista() {
  const contenedor = document.getElementById('premios');
  premios.forEach((p, i) => {
    const dia = i + 1;
    const div = document.createElement('div');
    div.className = 'premio';
    div.dataset.dia = dia;
    div.innerHTML = `<strong>Día ${dia}</strong>`;
    div.addEventListener('click', () => intentarReclamar(dia));
    contenedor.appendChild(div);
  });
  actualizarVista();
}

function actualizarVista() {
  const estado = cargarEstado();
  const hoyStr = hoy();
  const premiosEls = document.querySelectorAll('.premio');
  premiosEls.forEach(el => {
    const dia = parseInt(el.dataset.dia, 10);
    el.classList.remove('bloqueado', 'reclamado');
    if (estado.ultimaFecha === hoyStr && dia <= estado.streak) {
      el.classList.add('reclamado');
    } else if (dia > estado.streak + 1) {
      el.classList.add('bloqueado');
    }
  });
}

function obtenerRecompensa(dia) {
  const premio = premios[dia - 1];
  if (premio.tipo === 'cofre') {
    alert(`¡Has conseguido un cofre ${premio.rareza}!`);
  } else {
    const cantidad = Math.floor(Math.random() * (premio.max - premio.min + 1)) + premio.min;
    alert(`¡Has conseguido ${cantidad} ${premio.tipo}!`);
  }
}

function intentarReclamar(dia) {
  const estado = cargarEstado();
  const hoyStr = hoy();

  if (estado.ultimaFecha === hoyStr) {
    if (dia === estado.streak + 1) {
      alert('Disponible mañana');
    } else {
      alert('Todavía no disponible');
    }
    return;
  }

  if (estado.ultimaFecha) {
    const diff = (new Date(hoyStr) - new Date(estado.ultimaFecha)) / (1000 * 60 * 60 * 24);
    if (diff > 1 && dia !== 1) {
      alert('Todavía no disponible');
      reiniciarEstado();
      actualizarVista();
      return;
    }
    if (diff > 1 || dia !== estado.streak + 1) {
      alert('Todavía no disponible');
      reiniciarEstado();
      actualizarVista();
      return;
    }
  } else if (dia !== 1) {
    alert('Todavía no disponible');
    return;
  }

  if (confirm('¿Quieres ver un anuncio para conseguir el premio diario?')) {
    obtenerRecompensa(dia);
    estado.ultimaFecha = hoyStr;
    estado.streak = dia % 7;
    guardarEstado(estado);
    actualizarVista();
  }
}

crearVista();
