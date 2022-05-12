"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function add(veiculo, salvar) {
            var _a, _b;
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class='delete' data-placa='${veiculo.placa}'>Delete</button>
            </td>
            `;
            (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            if (salvar)
                patio().save([...read(), veiculo]);
            (_b = row.querySelector('.delete')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            });
        }
        function remove() { }
        function save(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function read() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = read();
            if (patio.length) {
                patio.forEach((veiculo) => add(veiculo));
            }
        }
        return { add, remove, save, read, render };
    }
    patio().render();
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert('os campos nome e placa sao obrigatorios');
            return;
        }
        const veiculo = { nome, placa, entrada: new Date().toLocaleString() };
        patio().add(veiculo, true);
    });
})();
