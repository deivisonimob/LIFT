// Adicione seu script JavaScript aqui
  const wheel = document.getElementById('wheel');
  const prizeImage = document.getElementById('prize-image');
  const prizeText = document.getElementById('prize-text');
  const spinBtn = document.getElementById('spin-btn');
  const termsModal = document.getElementById('terms-modal');

  function showTerms() {
    termsModal.style.display = 'flex';
  }

  function closeTermsModal() {
    termsModal.style.display = 'none';
  }

  // Defina os prêmios e suas imagens
  const prizes = [
    { value: 100, image: '1.gif', code: '9198475' },
    { value: 150, image: '2.gif', code: '8257875' },
    { value: 200, image: '3.gif', code: '5353745' },
    { value: 250, image: '4.gif', code: '9484025' },
    { value: 300, image: '5.gif', code: '4585764' },
    { value: 350, image: '6.gif', code: '3647684' },
    { value: 400, image: '7.gif', code: '6745764' },
  ];

  function spinWheel() {
    // Lógica de rotação aleatória
    const randomRotations = Math.floor(Math.random() * 10) + 5; // Gera um número aleatório entre 5 e 14
    const totalDegrees = randomRotations * 360; // Converte as rotações em graus

    // Aplica a rotação
    wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    wheel.style.transform = `rotate(${totalDegrees}deg)`;

    // Desabilita o botão durante a rotação
    spinBtn.disabled = true;

    // Aguarda o término da rotação e exibe o resultado
    setTimeout(() => {
      const selectedPrize = getSelectedPrize();
      prizeImage.src = selectedPrize.image;
      prizeImage.style.display = 'block';
      prizeText.innerHTML = `Parabéns! Ao efetivar a compra do seu imóvel com a Imobiliária DEIVISON N I LTDA, você será premiado com um Pix de R$ ${selectedPrize.value.toFixed(2)}. Valide o seu código "<span class="code-number">${selectedPrize.code}</span>" para resgate no formulário abaixo e aguarde nosso contato.`;
      prizeText.style.display = 'block';

      // Habilita o botão após o sorteio
      spinBtn.disabled = false;

      // Oculta o botão após o sorteio
      spinBtn.style.display = 'none';

      // Reseta a transformação para permitir novos giros
      wheel.style.transition = 'none';
      wheel.style.transform = 'rotate(0deg)';
    }, 4000); // Ajuste conforme necessário
  }

  // Função para determinar o prêmio selecionado
  function getSelectedPrize() {
    const availablePrizes = prizes.filter(prize => !prize.selected);
    if (availablePrizes.length === 0) {
      // Se todos os prêmios foram selecionados, resete a seleção
      prizes.forEach(prize => prize.selected = false);
    }

    // Seleciona um prêmio aleatório não selecionado
    const randomIndex = Math.floor(Math.random() * availablePrizes.length);
    const selectedPrize = availablePrizes[randomIndex];
    selectedPrize.selected = true;

    return selectedPrize;
  }

  const visitaSelect = document.getElementById('visita');
    const dataHorarioFields = document.getElementById('data-horario-fields');
    visitaSelect.addEventListener('change', function () {
        if (visitaSelect.value === 'sim') {
            // Se "Sim" for selecionado, mostre os campos de seleção de data e horário
            dataHorarioFields.style.display = 'block';
        } else {
            // Caso contrário, oculte os campos de seleção de data e horário
            dataHorarioFields.style.display = 'none';
        }
    });
