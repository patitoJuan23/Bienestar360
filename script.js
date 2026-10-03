/**
 * Bienestar 360° - Static Application Logic
 * Vanilla JavaScript (ES6+) - 100% Client Side, LocalStorage Persisted
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DATA STRUCTURES & DATA BANK
  // ==========================================
  
  const APP_STORAGE_KEY = 'bienestar360_user_data';

  // Questions Database across 6 core wellness categories
  const quizQuestions = [
    // DESCANSO
    {
      id: 1,
      category: 'descanso',
      categoryName: 'Descanso y Sueño',
      categoryIcon: 'fa-moon',
      categoryColor: 'var(--cat-descanso)',
      question: '¿Cuántas horas duermes habitualmente entre semana?',
      options: [
        { text: 'Menos de 6 horas', score: 25 },
        { text: 'Entre 6 y 7 horas', score: 60 },
        { text: 'Entre 7 y 9 horas (Recomendado)', score: 100 },
        { text: 'Más de 10 horas desorganizadas', score: 50 }
      ]
    },
    {
      id: 2,
      category: 'descanso',
      categoryName: 'Descanso y Sueño',
      categoryIcon: 'fa-moon',
      categoryColor: 'var(--cat-descanso)',
      question: '¿Cómo te sientes al despertarte por la mañana para estudiar?',
      options: [
        { text: 'Muy cansado/a y sin energía', score: 20 },
        { text: 'Un poco fatigado/a pero logro arrancar', score: 50 },
        { text: 'Con buena energía la mayoría de días', score: 85 },
        { text: 'Fresco/a, descansado/a y renovado/a', score: 100 }
      ]
    },

    // HIDRATACIÓN
    {
      id: 3,
      category: 'hidratacion',
      categoryName: 'Hidratación',
      categoryIcon: 'fa-glass-water',
      categoryColor: 'var(--cat-hidratacion)',
      question: '¿Cuánta agua bebes aproximadamente a lo largo del día?',
      options: [
        { text: 'Casi nada (menos de 2 vasos)', score: 20 },
        { text: 'De 3 a 5 vasos', score: 60 },
        { text: 'De 6 a 8 vasos (1.5 - 2 Litros)', score: 100 },
        { text: 'Solo consumo bebidas azucaradas o gaseosas', score: 15 }
      ]
    },
    {
      id: 4,
      category: 'hidratacion',
      categoryName: 'Hidratación',
      categoryIcon: 'fa-glass-water',
      categoryColor: 'var(--cat-hidratacion)',
      question: '¿Tienes el hábito de llevar una botella de agua contigo al estudiar o ir a clase?',
      options: [
        { text: 'Nunca', score: 20 },
        { text: 'Rara vez', score: 50 },
        { text: 'Frecuentemente', score: 80 },
        { text: 'Siempre la llevo a la mano', score: 100 }
      ]
    },

    // TIEMPO DE PANTALLA
    {
      id: 5,
      category: 'pantallas',
      categoryName: 'Tiempo de Pantalla',
      categoryIcon: 'fa-mobile-screen-button',
      categoryColor: 'var(--cat-pantallas)',
      question: '¿Cuánto tiempo pasas en redes sociales o videojuegos fuera de tus deberes?',
      options: [
        { text: 'Más de 5 horas diarias', score: 25 },
        { text: 'Entre 3 y 5 horas', score: 50 },
        { text: 'Entre 1 y 3 horas', score: 80 },
        { text: 'Menos de 1 hora o uso consciente', score: 100 }
      ]
    },
    {
      id: 6,
      category: 'pantallas',
      categoryName: 'Tiempo de Pantalla',
      categoryIcon: 'fa-mobile-screen-button',
      categoryColor: 'var(--cat-pantallas)',
      question: '¿Usas el celular o pantallas justo antes de dormir en tu cama?',
      options: [
        { text: 'Sí, hasta dormirme con la pantalla prendida', score: 15 },
        { text: 'Frecuentemente hasta 10 mins antes de dormir', score: 40 },
        { text: 'A veces, pero intento apagarlo temprano', score: 75 },
        { text: 'No, desconecto 30-60 min antes de acostarme', score: 100 }
      ]
    },

    // HÁBITOS DE ESTUDIO
    {
      id: 7,
      category: 'estudio',
      categoryName: 'Hábitos de Estudio',
      categoryIcon: 'fa-book-open-reader',
      categoryColor: 'var(--cat-estudio)',
      question: '¿Cómo organizas tus horarios para cumplir con tus actividades académicas?',
      options: [
        { text: 'Estudio todo a última hora la noche anterior', score: 20 },
        { text: 'Reviso mis pendientes cuando me acuerdo', score: 45 },
        { text: 'Planifico mis tareas con varios días de anticipación', score: 85 },
        { text: 'Uso agenda/horario fijo con pausas planificadas', score: 100 }
      ]
    },
    {
      id: 8,
      category: 'estudio',
      categoryName: 'Hábitos de Estudio',
      categoryIcon: 'fa-book-open-reader',
      categoryColor: 'var(--cat-estudio)',
      question: '¿Sueles hacer pausas breves durante tus sesiones de estudio (Técnica Pomodoro o similar)?',
      options: [
        { text: 'Estudio horas seguidas sin descansar', score: 30 },
        { text: 'Solo descanso cuando ya me siento agotado/a', score: 55 },
        { text: 'Hago pausas breves cada 45-60 minutos', score: 90 },
        { text: 'Pauto pausas de 5-10 minutos cada 25-30 mins', score: 100 }
      ]
    },

    // ACTIVIDAD FÍSICA
    {
      id: 9,
      category: 'actividad',
      categoryName: 'Actividad Física',
      categoryIcon: 'fa-person-running',
      categoryColor: 'var(--cat-actividad)',
      question: '¿Con qué frecuencia realizas ejercicio, deportes o caminatas activas?',
      options: [
        { text: 'Casi nunca o estilo de vida muy sedentario', score: 20 },
        { text: '1 o 2 días a la semana', score: 50 },
        { text: '3 a 4 días a la semana', score: 85 },
        { text: '5 o más días a la semana', score: 100 }
      ]
    },
    {
      id: 10,
      category: 'actividad',
      categoryName: 'Actividad Física',
      categoryIcon: 'fa-person-running',
      categoryColor: 'var(--cat-actividad)',
      question: 'Durante tus sesiones de estudio sentado/a, ¿te levantas a estirarte?',
      options: [
        { text: 'Permanezco sentado/a horas en la misma posición', score: 25 },
        { text: 'Solo me levanto si es estrictamente necesario', score: 50 },
        { text: 'Procuro ponerme de pie y estirarme de vez en cuando', score: 80 },
        { text: 'Cada hora me levanto, camino y me estiro activamente', score: 100 }
      ]
    },

    // CONCENTRACIÓN
    {
      id: 11,
      category: 'concentracion',
      categoryName: 'Concentración y Foco',
      categoryIcon: 'fa-brain',
      categoryColor: 'var(--cat-concentracion)',
      question: '¿Qué tan fácil te resulta mantener el foco sin distraerte con notificaciones?',
      options: [
        { text: 'Me distraigo constantemente a los pocos minutos', score: 20 },
        { text: 'Me cuesta trabajo, reviso el celular seguido', score: 50 },
        { text: 'Logro concentrarme silenciando notificaciones', score: 85 },
        { text: 'Mantengo foco profundo y elimino todas las distracciones', score: 100 }
      ]
    },
    {
      id: 12,
      category: 'concentracion',
      categoryName: 'Concentración y Foco',
      categoryIcon: 'fa-brain',
      categoryColor: 'var(--cat-concentracion)',
      question: '¿Practicas alguna técnica de mindfulness, respiración consciente o pausa mental?',
      options: [
        { text: 'Nunca', score: 25 },
        { text: 'Rara vez cuando estoy muy estresado/a', score: 50 },
        { text: 'Ocasionalmente a la semana', score: 80 },
        { text: 'Diariamente antes o después de estudiar', score: 100 }
      ]
    }
  ];

  // List of Daily Challenges for the Habit Tracker
  const defaultHabits = [
    { id: 'h1', title: 'Beber 2 litros de agua', desc: 'Mantén tu termo cerca durante el día de estudio', category: 'Hidratación', icon: 'fa-glass-water', color: 'var(--cat-hidratacion)' },
    { id: 'h2', title: 'Dormir al menos 7.5 horas', desc: 'Procura acostarte a la misma hora esta noche', category: 'Descanso', icon: 'fa-moon', color: 'var(--cat-descanso)' },
    { id: 'h3', title: 'Pausa sin pantallas (20 mins)', desc: 'Desconecta de teléfono y PC durante el almuerzo', category: 'Pantallas', icon: 'fa-mobile-screen-button', color: 'var(--cat-pantallas)' },
    { id: 'h4', title: 'Caminata o estiramientos 15 min', desc: 'Activa la circulación y libera tensión muscular', category: 'Actividad', icon: 'fa-person-running', color: 'var(--cat-actividad)' },
    { id: 'h5', title: 'Organizar espacio de estudio', desc: 'Limpia tu escritorio antes de comenzar a repasar', category: 'Estudio', icon: 'fa-book-open-reader', color: 'var(--cat-estudio)' },
    { id: 'h6', title: '3 minutos de respiración profunda', desc: 'Realiza 4 tiempos de inhalación, 4 de retención y 4 de exhalación', category: 'Concentración', icon: 'fa-wind', color: 'var(--cat-concentracion)' }
  ];

  // Roulette items configuration
  const rouletteSegments = [
    { text: 'Tomar Agua', color: '#0ea5e9', icon: 'fa-glass-water', desc: 'Bebe un vaso de agua fresca de inmediato para recargar tu energía cognitiva.' },
    { text: 'Pausa Activa', color: '#10b981', icon: 'fa-child-reaching', desc: 'Ponte de pie, estira tus brazos y espalda durante 2 minutos.' },
    { text: 'Respiración 4-7-8', color: '#8b5cf6', icon: 'fa-lungs', desc: 'Inhala en 4s, mantén el aire 7s y exhala suavemente en 8s por 3 repeticiones.' },
    { text: 'Ordena tu Mesa', color: '#f59e0b', icon: 'fa-broom', desc: 'Tómate 3 minutos para despejar los objetos que no necesites en tu lugar de trabajo.' },
    { text: 'Descanso Visual', color: '#f43f5e', icon: 'fa-eye-slash', desc: 'Mira un punto lejano por la ventana durante 20 segundos para relajar la vista (Regla 20-20-20).' },
    { text: 'Música Relajante', color: '#ec4899', icon: 'fa-music', desc: 'Escucha una canción instrumental o ruido blanco para serenar la mente.' },
    { text: 'Planifica 3 Tareas', color: '#14b8a6', icon: 'fa-list-check', desc: 'Escribe en un papel las 3 prioridades más importantes de tu día.' }
  ];

  // Recommendations mapping based on category performance
  const categoryRecommendationsMap = {
    descanso: {
      title: 'Optimiza tu Descanso Nocturno',
      icon: 'fa-moon',
      color: 'var(--cat-descanso)',
      tips: [
        'Establece un horario fijo para acostarte y despertarte, incluso los fines de semana.',
        'Evita consumir cafeína o bebidas energizantes después de las 4:00 PM.',
        'Crea una rutina de desaceleración 30 minutos antes de dormir (lectura ligera, luz tenue).'
      ]
    },
    hidratacion: {
      title: 'Potencia tu Hidratación Diario',
      icon: 'fa-glass-water',
      color: 'var(--cat-hidratacion)',
      tips: [
        'Mantén siempre un termo lleno de agua visible en tu escritorio mientras estudias.',
        'Asocia beber agua con actividades diarias: un vaso al despertar, otro al iniciar clases, etc.',
        'Si te cuesta tomar agua sola, agrégale rodajas de limón o pepino para darle un toque fresco.'
      ]
    },
    pantallas: {
      title: 'Higiene Digital y Uso Consciente',
      icon: 'fa-mobile-screen-button',
      color: 'var(--cat-pantallas)',
      tips: [
        'Activa el modo "No Molestar" o enfócate con aplicaciones de bloqueo durante sesiones de estudio.',
        'Evita llevar el teléfono a la cama. Usa un reloj despertador tradicional.',
        'Aplica la regla 20-20-20: Cada 20 minutos de pantalla, mira un objeto a 6 metros durante 20 segundos.'
      ]
    },
    estudio: {
      title: 'Técnicas de Estudio Eficiente',
      icon: 'fa-book-open-reader',
      color: 'var(--cat-estudio)',
      tips: [
        'Prueba la técnica Pomodoro: 25 minutos de estudio enfocado + 5 minutos de descanso.',
        'Divide proyectos grandes en micro-tareas específicas para evitar la procrastinación.',
        'Revisa tus apuntes el mismo día de la clase durante 10 minutos para afianzar el aprendizaje.'
      ]
    },
    actividad: {
      title: 'Movimiento y Vitalidad Física',
      icon: 'fa-person-running',
      color: 'var(--cat-actividad)',
      tips: [
        'Realiza pausas activas cada hora: 10 sentadillas o estiramientos de cuello y columna.',
        'Busca una actividad física que disfrutes (caminar, bailar, deporte, yoga) al menos 3 veces por semana.',
        'Camina mientras escuchas podcasts educativos o repasas de memoria.'
      ]
    },
    concentracion: {
      title: 'Enfoque Profundo y Atención',
      icon: 'fa-brain',
      color: 'var(--cat-concentracion)',
      tips: [
        'Antes de comenzar a estudiar, realiza 1 minuto de respiración consciente para enfocar tu mente.',
        'Despeja tu escritorio de distracciones visuales antes de empezar.',
        'Si llega un pensamiento distractor, anótalo en una libreta rápida y vuelve a tu tarea.'
      ]
    }
  };

  // ==========================================
  // 2. STATE MANAGEMENT & STORAGE
  // ==========================================

  let state = {
    user: {
      name: '',
      age: '',
      grade: ''
    },
    currentQuizStep: 0,
    quizAnswers: {}, // questionId -> optionScore
    lastResult: null,
    previousResult: null,
    completedHabits: {}, // habitId -> boolean
    rouletteSpinning: false,
    rouletteAngle: 0
  };

  function loadState() {
    try {
      const stored = localStorage.getItem(APP_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load stored state from localStorage', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save state to localStorage', e);
    }
  }

  // Init state
  loadState();

  // ==========================================
  // 3. NAVIGATION & VIEW SWITCHER
  // ==========================================

  const navLinks = document.querySelectorAll('.nav-link');
  const viewSections = document.querySelectorAll('.view-section');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const userBadgeName = document.getElementById('userBadgeName');
  const userBadgeAvatar = document.getElementById('userBadgeAvatar');

  function switchView(viewId) {
    viewSections.forEach(section => {
      if (section.id === viewId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    navLinks.forEach(link => {
      if (link.dataset.view === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }

    // Scroll top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // View specific side-effects
    if (viewId === 'resultados') {
      renderResultsView();
    } else if (viewId === 'recomendaciones') {
      renderRecommendationsView();
    } else if (viewId === 'ruleta') {
      drawRoulette();
    } else if (viewId === 'retos') {
      renderRetosView();
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.dataset.view;
      
      // If quiz target without profile, open profile modal or start quiz
      if (targetView === 'evaluacion' && !state.user.name) {
        openProfileModal();
      } else {
        switchView(targetView);
      }
    });
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Update navbar user badge
  function updateUserBadge() {
    if (state.user.name) {
      userBadgeName.textContent = state.user.name;
      userBadgeAvatar.textContent = state.user.name.charAt(0).toUpperCase();
    } else {
      userBadgeName.textContent = 'Mi Perfil';
      userBadgeAvatar.textContent = '?';
    }
  }

  updateUserBadge();

  // Button triggers for view navigation
  document.getElementById('startQuizBtn')?.addEventListener('click', () => {
    if (!state.user.name) {
      openProfileModal();
    } else {
      startNewEvaluation();
    }
  });

  document.getElementById('navProfileBtn')?.addEventListener('click', openProfileModal);

  // ==========================================
  // 4. PROFILE FORM MODAL
  // ==========================================

  const profileModal = document.getElementById('profileModal');
  const profileForm = document.getElementById('profileForm');
  const closeProfileBtn = document.getElementById('closeProfileBtn');

  function openProfileModal() {
    document.getElementById('inputName').value = state.user.name || '';
    document.getElementById('inputAge').value = state.user.age || '';
    document.getElementById('inputGrade').value = state.user.grade || '';
    profileModal.style.display = 'flex';
  }

  function closeProfileModal() {
    profileModal.style.display = 'none';
  }

  closeProfileBtn?.addEventListener('click', closeProfileModal);
  
  window.addEventListener('click', (e) => {
    if (e.target === profileModal) {
      closeProfileModal();
    }
  });

  profileForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.user.name = document.getElementById('inputName').value.trim();
    state.user.age = document.getElementById('inputAge').value;
    state.user.grade = document.getElementById('inputGrade').value;

    saveState();
    updateUserBadge();
    closeProfileModal();

    // Start evaluation if came from CTA
    startNewEvaluation();
  });

  // ==========================================
  // 5. EVALUATION / QUIZ ENGINE
  // ==========================================

  function startNewEvaluation() {
    state.currentQuizStep = 0;
    state.quizAnswers = {};
    switchView('evaluacion');
    renderQuestion();
  }

  function renderQuestion() {
    const q = quizQuestions[state.currentQuizStep];
    const totalQ = quizQuestions.length;

    // Progress bar & Meta
    const fillPercent = ((state.currentQuizStep + 1) / totalQ) * 100;
    document.getElementById('quizProgressFill').style.width = `${fillPercent}%`;
    document.getElementById('quizStepMeta').textContent = `Pregunta ${state.currentQuizStep + 1} de ${totalQ}`;

    // Question content
    const catTag = document.getElementById('quizCategoryTag');
    catTag.style.backgroundColor = `rgba(16, 185, 129, 0.15)`;
    catTag.style.color = q.categoryColor;
    catTag.innerHTML = `<i class="fa-solid ${q.categoryIcon}"></i> ${q.categoryName}`;

    document.getElementById('questionText').textContent = q.question;

    // Render options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const selectedScore = state.quizAnswers[q.id];

    q.options.forEach((opt) => {
      const isSelected = selectedScore === opt.score;
      const btn = document.createElement('button');
      btn.className = `option-btn ${isSelected ? 'selected' : ''}`;
      btn.innerHTML = `
        <span>${opt.text}</span>
        <div class="option-indicator">
          ${isSelected ? '<i class="fa-solid fa-check"></i>' : ''}
        </div>
      `;

      btn.addEventListener('click', () => {
        state.quizAnswers[q.id] = opt.score;
        renderQuestion();
      });

      optionsContainer.appendChild(btn);
    });

    // Control buttons state
    const prevBtn = document.getElementById('quizPrevBtn');
    const nextBtn = document.getElementById('quizNextBtn');

    prevBtn.disabled = state.currentQuizStep === 0;

    if (selectedScore !== undefined) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }

    if (state.currentQuizStep === totalQ - 1) {
      nextBtn.innerHTML = `Finalizar Evaluación <i class="fa-solid fa-flag-checkered"></i>`;
    } else {
      nextBtn.innerHTML = `Siguiente <i class="fa-solid fa-arrow-right"></i>`;
    }
  }

  document.getElementById('quizPrevBtn')?.addEventListener('click', () => {
    if (state.currentQuizStep > 0) {
      state.currentQuizStep--;
      renderQuestion();
    }
  });

  document.getElementById('quizNextBtn')?.addEventListener('click', () => {
    const totalQ = quizQuestions.length;
    if (state.currentQuizStep < totalQ - 1) {
      state.currentQuizStep++;
      renderQuestion();
    } else {
      calculateAndSaveResults();
    }
  });

  // ==========================================
  // 6. SCORING & RESULTS 360° ENGINE
  // ==========================================

  function calculateAndSaveResults() {
    // Group answers by category
    const categoryScores = {
      descanso: { total: 0, count: 0 },
      hidratacion: { total: 0, count: 0 },
      pantallas: { total: 0, count: 0 },
      estudio: { total: 0, count: 0 },
      actividad: { total: 0, count: 0 },
      concentracion: { total: 0, count: 0 }
    };

    quizQuestions.forEach(q => {
      const score = state.quizAnswers[q.id] || 0;
      categoryScores[q.category].total += score;
      categoryScores[q.category].count += 1;
    });

    // Calculate normalized 0-100 average for each category
    const finalCategoryResults = {};
    let grandTotalSum = 0;
    let categoryCount = 0;

    for (const cat in categoryScores) {
      const count = categoryScores[cat].count;
      const catAvg = count > 0 ? Math.round(categoryScores[cat].total / count) : 0;
      finalCategoryResults[cat] = catAvg;
      grandTotalSum += catAvg;
      categoryCount++;
    }

    const overallIndex = Math.round(grandTotalSum / categoryCount);

    // Save history logic
    if (state.lastResult) {
      state.previousResult = state.lastResult;
    }

    state.lastResult = {
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      overallIndex,
      categories: finalCategoryResults
    };

    saveState();
    switchView('resultados');
  }

  function getWellnessLevelInfo(score) {
    if (score >= 85) {
      return { level: 'Bienestar Excelente 🌟', color: '#10b981', desc: '¡Felicidades! Tienes hábitos sumamente saludables e integrales que potencian tu rendimiento académico y personal.' };
    } else if (score >= 70) {
      return { level: 'Bienestar Equilibrado 👍', color: '#6366f1', desc: '¡Buen trabajo! Tienes bases muy sólidas, aunque existen pequeñas áreas de mejora para alcanzar un equilibrio óptimo.' };
    } else if (score >= 50) {
      return { level: 'En Desarrollo 🌿', color: '#f59e0b', desc: 'Estás en un nivel medio. Hay varios hábitos cotidianos que puedes ajustar para sentirte con mayor energía y foco.' };
    } else {
      return { level: 'Requiere Atención 💡', color: '#f43f5e', desc: 'Tus hábitos actuales podrían estar afectando tu energía y concentración. ¡Es un excelente momento para iniciar pequeños cambios!' };
    }
  }

  function renderResultsView() {
    if (!state.lastResult) {
      // If no test has been completed yet
      document.getElementById('noResultsFallback').style.display = 'block';
      document.getElementById('resultsMainContent').style.display = 'none';
      return;
    }

    document.getElementById('noResultsFallback').style.display = 'none';
    document.getElementById('resultsMainContent').style.display = 'block';

    const { overallIndex, categories } = state.lastResult;
    const levelInfo = getWellnessLevelInfo(overallIndex);

    // Render Gauge Circle
    const scoreValElem = document.getElementById('scoreValText');
    const scoreLevelBadge = document.getElementById('scoreLevelBadge');
    const scoreDescText = document.getElementById('scoreDescText');
    const circleFill = document.getElementById('scoreCircleFill');

    scoreValElem.textContent = overallIndex;
    scoreLevelBadge.textContent = levelInfo.level;
    scoreLevelBadge.style.backgroundColor = `${levelInfo.color}22`;
    scoreLevelBadge.style.color = levelInfo.color;
    scoreDescText.textContent = levelInfo.desc;

    // SVG stroke dashoffset animation (565 is full circumference)
    const offset = 565 - (565 * overallIndex) / 100;
    setTimeout(() => {
      circleFill.style.strokeDashoffset = offset;
    }, 100);

    // Render Category Breakdown Bars
    const categoryScoresContainer = document.getElementById('categoryScoresContainer');
    categoryScoresContainer.innerHTML = '';

    const catMeta = [
      { key: 'descanso', name: 'Descanso y Sueño', icon: 'fa-moon', color: 'var(--cat-descanso)' },
      { key: 'hidratacion', name: 'Hidratación', icon: 'fa-glass-water', color: 'var(--cat-hidratacion)' },
      { key: 'pantallas', name: 'Tiempo de Pantalla', icon: 'fa-mobile-screen-button', color: 'var(--cat-pantallas)' },
      { key: 'estudio', name: 'Hábitos de Estudio', icon: 'fa-book-open-reader', color: 'var(--cat-estudio)' },
      { key: 'actividad', name: 'Actividad Física', icon: 'fa-person-running', color: 'var(--cat-actividad)' },
      { key: 'concentracion', name: 'Concentración', icon: 'fa-brain', color: 'var(--cat-concentracion)' }
    ];

    catMeta.forEach(c => {
      const score = categories[c.key] || 0;
      const item = document.createElement('div');
      item.className = 'cat-score-item';
      item.innerHTML = `
        <div class="cat-score-header">
          <div class="cat-name-icon">
            <i class="fa-solid ${c.icon}" style="color: ${c.color}"></i>
            <span>${c.name}</span>
          </div>
          <span style="font-weight: 700; color: ${c.color}">${score}%</span>
        </div>
        <div class="cat-score-bar-bg">
          <div class="cat-score-bar-fill" style="width: 0%; background: ${c.color}"></div>
        </div>
      `;

      categoryScoresContainer.appendChild(item);

      // Animate width after DOM paint
      setTimeout(() => {
        item.querySelector('.cat-score-bar-fill').style.width = `${score}%`;
      }, 150);
    });

    // Render History Comparison Box if previous result exists
    const comparisonBox = document.getElementById('historyComparisonBox');
    if (state.previousResult) {
      comparisonBox.style.display = 'flex';
      const prev = state.previousResult.overallIndex;
      const diff = overallIndex - prev;

      let deltaHTML = '';
      if (diff > 0) {
        deltaHTML = `<span class="delta-badge positive"><i class="fa-solid fa-arrow-up"></i> +${diff} pts</span>`;
      } else if (diff < 0) {
        deltaHTML = `<span class="delta-badge negative"><i class="fa-solid fa-arrow-down"></i> ${diff} pts</span>`;
      } else {
        deltaHTML = `<span class="delta-badge neutral"><i class="fa-solid fa-equals"></i> Sin cambios</span>`;
      }

      document.getElementById('comparisonText').innerHTML = `
        <div>
          <div style="font-size: 0.85rem; color: var(--text-muted)">Evaluación Anterior (${state.previousResult.date})</div>
          <div style="font-weight: 700">Índice previo: ${prev}/100</div>
        </div>
        ${deltaHTML}
      `;
    } else {
      comparisonBox.style.display = 'none';
    }
  }

  // ==========================================
  // 7. RECOMMENDATIONS GENERATOR ENGINE
  // ==========================================

  function renderRecommendationsView() {
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = '';

    if (!state.lastResult) {
      container.innerHTML = `
        <div class="glass-card" style="grid-column: 1/-1; text-align: center;">
          <p class="text-muted">Realiza tu primera evaluación de bienestar para desbloquear recomendaciones personalizadas para tus hábitos.</p>
          <button class="btn btn-primary" style="margin-top: 1rem;" onclick="document.getElementById('startQuizBtn').click()">Realizar Evaluación</button>
        </div>
      `;
      return;
    }

    const { categories } = state.lastResult;

    // Sort categories from lowest score to highest to prioritize areas needing improvement
    const sortedCats = Object.keys(categories).sort((a, b) => categories[a] - categories[b]);

    sortedCats.forEach(catKey => {
      const score = categories[catKey];
      const recInfo = categoryRecommendationsMap[catKey];
      if (!recInfo) return;

      let statusBadge = '';
      if (score < 60) {
        statusBadge = `<span style="background: rgba(244,63,94,0.2); color: var(--accent-rose); font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 700;">Prioritario (${score}%)</span>`;
      } else if (score < 85) {
        statusBadge = `<span style="background: rgba(245,158,11,0.2); color: var(--accent-amber); font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 700;">Por Mejorar (${score}%)</span>`;
      } else {
        statusBadge = `<span style="background: rgba(16,185,129,0.2); color: var(--primary); font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 700;">Fortaleza (${score}%)</span>`;
      }

      const card = document.createElement('div');
      card.className = 'rec-card';
      card.innerHTML = `
        <div>
          <div class="rec-header">
            <div class="rec-icon" style="background: ${recInfo.color}">
              <i class="fa-solid ${recInfo.icon}"></i>
            </div>
            <div>
              <div class="rec-title">${recInfo.title}</div>
              ${statusBadge}
            </div>
          </div>
          <ul style="padding-left: 1.2rem; color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
            ${recInfo.tips.map(tip => `<li style="margin-bottom: 0.4rem;">${tip}</li>`).join('')}
          </ul>
        </div>
        <div class="rec-action-pill">
          <i class="fa-solid fa-lightbulb"></i> Consejo educativo sugerido
        </div>
      `;

      container.appendChild(card);
    });
  }

  // ==========================================
  // 8. ROULETTE / RULETA INTERACTIVA (Canvas 2D)
  // ==========================================

  const canvas = document.getElementById('rouletteCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const spinBtn = document.getElementById('spinWheelBtn');
  const resultCard = document.getElementById('rouletteResultCard');

  let currentAngle = 0;
  let isSpinning = false;

  function drawRoulette() {
    if (!ctx || !canvas) return;

    const numSegments = rouletteSegments.length;
    const arcSize = (2 * Math.PI) / numSegments;
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSegments; i++) {
      const angle = currentAngle + i * arcSize;
      const seg = rouletteSegments[i];

      // Segment Arc
      ctx.beginPath();
      ctx.fillStyle = seg.color;
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius - 6, angle, angle + arcSize);
      ctx.lineTo(radius, radius);
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#0f172a';
      ctx.stroke();

      // Segment Text
      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(angle + arcSize / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px Outfit, sans-serif';
      ctx.fillText(seg.text, radius - 25, 5);
      ctx.restore();
    }

    // Outer Rim
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 3, 0, 2 * Math.PI);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    // Center Pin
    ctx.beginPath();
    ctx.arc(radius, radius, 28, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('360°', radius, radius);
  }

  function spinWheel() {
    if (isSpinning) return;

    isSpinning = true;
    spinBtn.disabled = true;
    resultCard.style.display = 'none';

    // Random spin turns (between 5 and 10 full rotations + random angle)
    const spinTurns = 5 + Math.random() * 5;
    const targetAngle = currentAngle + spinTurns * 2 * Math.PI;
    const duration = 4000; // 4 seconds spin
    const startTime = performance.now();

    function animateSpin(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic formula
      const easeOut = 1 - Math.pow(1 - progress, 3);
      currentAngle = targetAngle * easeOut;

      drawRoulette();

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        isSpinning = false;
        spinBtn.disabled = false;
        calculateWinningSegment();
      }
    }

    requestAnimationFrame(animateSpin);
  }

  function calculateWinningSegment() {
    const numSegments = rouletteSegments.length;
    const arcSize = (2 * Math.PI) / numSegments;

    // Normalise angle to 0 - 2PI
    const normalizedAngle = (currentAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    // Pointer is at Top (3PI/2 or 270 deg).
    // Calculate which segment covers 3PI/2
    const pointerAngle = (1.5 * Math.PI - normalizedAngle + 4 * Math.PI) % (2 * Math.PI);
    const winningIndex = Math.floor(pointerAngle / arcSize) % numSegments;

    const winner = rouletteSegments[winningIndex];

    // Show result modal
    resultCard.style.display = 'block';
    document.getElementById('winningTitle').innerHTML = `<i class="fa-solid ${winner.icon}"></i> ${winner.text}`;
    document.getElementById('winningDesc').textContent = winner.desc;
    document.getElementById('winningBadge').style.backgroundColor = winner.color;
  }

  spinBtn?.addEventListener('click', spinWheel);

  // ==========================================
  // 9. HABIT CHECKLIST & RETOS TRACKER
  // ==========================================

  function renderRetosView() {
    const grid = document.getElementById('retosGrid');
    grid.innerHTML = '';

    let completedCount = 0;
    const totalCount = defaultHabits.length;

    defaultHabits.forEach(habit => {
      const isDone = !!state.completedHabits[habit.id];
      if (isDone) completedCount++;

      const item = document.createElement('div');
      item.className = `reto-item ${isDone ? 'completed' : ''}`;
      item.innerHTML = `
        <div class="reto-checkbox">
          ${isDone ? '<i class="fa-solid fa-check"></i>' : ''}
        </div>
        <div class="reto-info">
          <h4>${habit.title}</h4>
          <p>${habit.desc}</p>
        </div>
        <div class="reto-tag">${habit.category}</div>
      `;

      item.addEventListener('click', () => {
        state.completedHabits[habit.id] = !state.completedHabits[habit.id];
        saveState();
        renderRetosView();
      });

      grid.appendChild(item);
    });

    // Update Progress Bar & Counter
    const percent = Math.round((completedCount / totalCount) * 100);
    document.getElementById('retosProgressFill').style.width = `${percent}%`;
    document.getElementById('retosCounterText').textContent = `${completedCount} de ${totalCount} completados (${percent}%)`;
  }

  function resetForNewUser() {
    state.user = { name: '', age: '', grade: '' };
    state.currentQuizStep = 0;
    state.quizAnswers = {};
    saveState();
    updateUserBadge();
    document.getElementById('inputName').value = '';
    document.getElementById('inputAge').value = '';
    document.getElementById('inputGrade').value = '';
    openProfileModal();
  }

  // Export functions to global window object for full onclick reliability
  window.switchView = switchView;
  window.openProfileModal = openProfileModal;
  window.startNewEvaluation = startNewEvaluation;
  window.resetForNewUser = resetForNewUser;

  // Bind direct DOM event listeners
  document.getElementById('btnGoRecommendations')?.addEventListener('click', () => switchView('recomendaciones'));
  document.getElementById('btnRetakeEvaluation')?.addEventListener('click', startNewEvaluation);
  document.getElementById('btnNewUser')?.addEventListener('click', resetForNewUser);

  // Initial draw setup
  drawRoulette();
});
