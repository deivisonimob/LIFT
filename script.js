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