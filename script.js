document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Captura os dados do formulário
    let nome = document.getElementById('nome').value;
    let matricula = document.getElementById('matricula').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    // Calcula a média
    let media = (nota1 + nota2) / 2;
    let status = media >= 7 ? 'Aprovado' : 'Reprovado';
    let statusClass = media >= 7 ? 'approved' : 'failed';
    
    // Adiciona uma nova linha na tabela
    let tabela = document.getElementById('tabelaNotas').getElementsByTagName('tbody')[0];
    let newRow = tabela.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerHTML = nome;
    cell2.innerHTML = matricula;
    cell3.innerHTML = nota1.toFixed(1);
    cell4.innerHTML = nota2.toFixed(1);
    cell5.innerHTML = media.toFixed(1);
    cell6.innerHTML = status;

    // Aplica a classe de estilo para aprovação/reprovação
    newRow.classList.add(statusClass);
    
    // Limpa o formulário
    document.getElementById('notaForm').reset();
});
