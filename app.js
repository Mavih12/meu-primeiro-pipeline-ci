<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#e63946">
  <title>¡Hola! — Aprenda Espanhol</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f7f8fc;
      color: #222;
      padding-bottom: 80px;
    }

    header {
      background: linear-gradient(135deg, #e63946, #ff6b6b);
      color: white;
      padding: 28px 20px 35px;
      border-radius: 0 0 30px 30px;
    }

    .logo {
      font-size: 28px;
      font-weight: bold;
    }

    header p {
      margin-top: 8px;
      opacity: .9;
    }

    .container {
      width: 100%;
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }

    .hero {
      margin-top: -15px;
      background: white;
      border-radius: 20px;
      padding: 22px;
      box-shadow: 0 8px 25px rgba(0,0,0,.08);
    }

    .hero h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .hero p {
      color: #666;
      line-height: 1.5;
    }

    .progress-box {
      margin-top: 18px;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      font-size: 14px;
    }

    .progress {
      height: 10px;
      background: #eee;
      border-radius: 20px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      width: 25%;
      background: #e63946;
      transition: .4s;
    }

    .section {
      margin-top: 28px;
    }

    .section-title {
      font-size: 22px;
      margin-bottom: 15px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 18px;
      box-shadow: 0 5px 18px rgba(0,0,0,.06);
      cursor: pointer;
      transition: .2s;
    }

    .card:hover {
      transform: translateY(-3px);
    }

    .card-icon {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .card h3 {
      font-size: 17px;
      margin-bottom: 5px;
    }

    .card p {
      color: #777;
      font-size: 13px;
    }

    .lesson {
      background: white;
      margin-bottom: 14px;
      padding: 18px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      gap: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,.05);
    }

    .lesson-number {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #ffe5e7;
      color: #e63946;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }

    .lesson-content {
      flex: 1;
    }

    .lesson-content h3 {
      font-size: 16px;
      margin-bottom: 4px;
    }

    .lesson-content p {
      font-size: 13px;
      color: #777;
    }

    button {
      border: none;
      background: #e63946;
      color: white;
      padding: 11px 17px;
      border-radius: 12px;
      font-weight: bold;
      cursor: pointer;
    }

    button:active {
      transform: scale(.97);
    }

    .vocab {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 16px;
      border-radius: 15px;
      margin-bottom: 10px;
      box-shadow: 0 3px 12px rgba(0,0,0,.05);
    }

    .spanish {
      font-weight: bold;
      color: #e63946;
      font-size: 18px;
    }

    .translation {
      color: #666;
      margin-top: 4px;
    }

    .sound {
      background: #f1f1f1;
      color: #333;
      border-radius: 50%;
      width: 42px;
      height: 42px;
      padding: 0;
      font-size: 18px;
    }

    .quiz-box {
      background: white;
      padding: 22px;
      border-radius: 20px;
      box-shadow: 0 5px 20px rgba(0,0,0,.07);
    }

    .question {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .answer {
      display: block;
      width: 100%;
      text-align: left;
      margin: 10px 0;
      background: #f4f4f6;
      color: #222;
      padding: 15px;
      border-radius: 12px;
    }

    .answer:hover {
      background: #ffe5e7;
    }

    .result {
      margin-top: 15px;
      font-weight: bold;
      min-height: 25px;
    }

    .phrase {
      background: linear-gradient(135deg, #1d3557, #457b9d);
      color: white;
      padding: 25px;
      border-radius: 20px;
      margin-bottom: 15px;
    }

    .phrase span {
      display: block;
      font-size: 23px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .phrase small {
      opacity: .85;
    }

    nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-around;
      padding: 10px 5px;
      z-index: 10;
    }

    nav button {
      background: transparent;
      color: #666;
      padding: 6px;
      font-size: 12px;
    }

    nav button.active {
      color: #e63946;
    }

    .page {
      display: none;
    }

    .page.active {
      display: block;
    }

    .welcome {
      text-align: center;
      padding: 10px 0 5px;
    }

    .welcome .flag {
      font-size: 55px;
    }

    @media (min-width: 700px) {
      .cards {
        grid-template-columns: repeat(4, 1fr);
      }

      nav {
        max-width: 900px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 20px 20px 0 0;
      }
    }
  </style>
</head>

<body>

<header>
  <div class="container">
    <div class="logo">¡Hola! 🇪🇸</div>
    <p>Aprenda espanhol de um jeito simples e divertido.</p>
  </div>
</header>

<main class="container">

  <!-- INÍCIO -->
  <section id="inicio" class="page active">

    <div class="hero">
      <div class="welcome">
        <div class="flag">🇪🇸</div>
        <h2>Olá! Vamos aprender espanhol?</h2>
        <p>Comece sua jornada e aprenda novas palavras todos os dias.</p>
      </div>

      <div class="progress-box">
        <div class="progress-info">
          <span>Seu progresso</span>
          <strong id="progressText">25%</strong>
        </div>

        <div class="progress">
          <div class="progress-bar" id="progressBar"></div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">O que você quer aprender?</h2>

      <div class="cards">

        <div class="card" onclick="showPage('aulas')">
          <div class="card-icon">📚</div>
          <h3>Aulas</h3>
          <p>Aprenda passo a passo.</p>
        </div>

        <div class="card" onclick="showPage('vocabulario')">
          <div class="card-icon">🧠</div>
          <h3>Vocabulário</h3>
          <p>Aprenda novas palavras.</p>
        </div>

        <div class="card" onclick="showPage('quiz')">
          <div class="card-icon">✏️</div>
          <h3>Quiz</h3>
          <p>Teste seus conhecimentos.</p>
        </div>

        <div class="card" onclick="showPage('frases')">
          <div class="card-icon">💬</div>
          <h3>Frases</h3>
          <p>Fale como um nativo.</p>
        </div>

      </div>
    </div>

  </section>


  <!-- AULAS -->
  <section id="aulas" class="page">

    <h2 class="section-title">📚 Aulas de Espanhol</h2>

    <div class="lesson">
      <div class="lesson-number">1</div>
      <div class="lesson-content">
        <h3>Saludos — Saudações</h3>
        <p>Hola, buenos días, buenas tardes...</p>
      </div>
      <button onclick="completeLesson(1)">Começar</button>
    </div>

    <div class="lesson">
      <div class="lesson-number">2</div>
      <div class="lesson-content">
        <h3>Presentaciones</h3>
        <p>Aprenda a se apresentar em espanhol.</p>
      </div>
      <button onclick="completeLesson(2)">Começar</button>
    </div>

    <div class="lesson">
      <div class="lesson-number">3</div>
      <div class="lesson-content">
        <h3>Números</h3>
        <p>Aprenda os números de 1 a 100.</p>
      </div>
      <button onclick="completeLesson(3)">Começar</button>
    </div>

    <div class="lesson">
      <div class="lesson-number">4</div>
      <div class="lesson-content">
        <h3>Cores</h3>
        <p>Rojo, azul, verde, amarillo...</p>
      </div>
      <button onclick="completeLesson(4)">Começar</button>
    </div>

    <div class="lesson">
      <div class="lesson-number">5</div>
      <div class="lesson-content">
        <h3>Comida</h3>
        <p>Aprenda palavras para falar sobre comida.</p>
      </div>
      <button onclick="completeLesson(5)">Começar</button>
    </div>

  </section>


  <!-- VOCABULÁRIO -->
  <section id="vocabulario" class="page">

    <h2 class="section-title">🧠 Vocabulário</h2>

    <div class="vocab">
      <div>
        <div class="spanish">Hola</div>
        <div class="translation">Olá</div>
      </div>
      <button class="sound" onclick="speak('Hola')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Gracias</div>
        <div class="translation">Obrigado(a)</div>
      </div>
      <button class="sound" onclick="speak('Gracias')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Por favor</div>
        <div class="translation">Por favor</div>
      </div>
      <button class="sound" onclick="speak('Por favor')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Amigo</div>
        <div class="translation">Amigo</div>
      </div>
      <button class="sound" onclick="speak('Amigo')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Familia</div>
        <div class="translation">Família</div>
      </div>
      <button class="sound" onclick="speak('Familia')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Casa</div>
        <div class="translation">Casa</div>
      </div>
      <button class="sound" onclick="speak('Casa')">🔊</button>
    </div>

    <div class="vocab">
      <div>
        <div class="spanish">Comida</div>
        <div class="translation">Comida</div>
      </div>
      <button class="sound" onclick="speak('Comida')">🔊</button>
    </div>

  </section>


  <!-- QUIZ -->
  <section id="quiz" class="page">

    <h2 class="section-title">✏️ Quiz</h2>

    <div class="quiz-box">

      <div class="question">
        O que significa "Gracias"?
      </div>

      <button class="answer" onclick="answer(false)">
        A) Olá
      </button>

      <button class="answer" onclick="answer(true)">
        B) Obrigado(a)
      </button>

      <button class="answer" onclick="answer(false)">
        C) Até amanhã
      </button>

      <button class="answer" onclick="answer(false)">
        D) Por favor
      </button>

      <div class="result" id="quizResult"></div>

    </div>

  </section>


  <!-- FRASES -->
  <section id="frases" class="page">

    <h2 class="section-title">💬 Frases úteis</h2>

    <div class="phrase">
      <span>¿Cómo estás?</span>
      <small>Como você está?</small>
    </div>

    <div class="phrase">
      <span>Me llamo Ana.</span>
      <small>Meu nome é Ana.</small>
    </div>

    <div class="phrase">
      <span>Mucho gusto.</span>
      <small>Muito prazer.</small>
    </div>

    <div class="phrase">
      <span>¿Dónde está el baño?</span>
      <small>Onde fica o banheiro?</small>
    </div>

    <div class="phrase">
      <span>¿Cuánto cuesta?</span>
      <small>Quanto custa?</small>
    </div>

    <div class="phrase">
      <span>No entiendo.</span>
      <small>Não entendo.</small>
    </div>

  </section>

</main>


<!-- MENU -->
<nav>

  <button class="active" onclick="showPage('inicio', this)">
    🏠<br>Início
  </button>

  <button onclick="showPage('aulas', this)">
    📚<br>Aulas
  </button>

  <button onclick="showPage('vocabulario', this)">
    🧠<br>Palavras
  </button>

  <button onclick="showPage('quiz', this)">
    ✏️<br>Quiz
  </button>

  <button onclick="showPage('frases', this)">
    💬<br>Frases
  </button>

</nav>


<script>

  let completedLessons = 0;

  function showPage(pageId, button) {

    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('nav button').forEach(btn => {
      btn.classList.remove('active');
    });

    if (button) {
      button.classList.add('active');
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  function completeLesson(number) {

    alert(
      "🎉 Parabéns!\n\n" +
      "Você iniciou a aula " + number + ".\n" +
      "Continue estudando!"
    );

    completedLessons++;

    if (completedLessons > 5) {
      completedLessons = 5;
    }

    let percentage = Math.round(
      (completedLessons / 5) * 100
    );

    document.getElementById("progressBar").style.width =
      percentage + "%";

    document.getElementById("progressText").innerText =
      percentage + "%";
  }


  function answer(correct) {

    const result = document.getElementById("quizResult");

    if (correct) {

      result.innerText = "🎉 Muito bem! Resposta correta!";

      result.style.color = "green";

    } else {

      result.innerText = "❌ Quase! Tente novamente.";

      result.style.color = "red";
    }
  }


  function speak(text) {

    if ("speechSynthesis" in window) {

      const speech = new SpeechSynthesisUtterance(text);

      speech.lang = "es-ES";

      speech.rate = 0.85;

      window.speechSynthesis.speak(speech);

    } else {

      alert("Seu navegador não suporta áudio.");

    }
  }

</script>

</body>
</html>
