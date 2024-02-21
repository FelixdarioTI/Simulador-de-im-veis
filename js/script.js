function calcularImovel(metragem, quartos,precoM2) {
    let preco;

    switch (quartos) {
        case 1:
            preco = metragem * precoM2 * 1.1; 
            break;
        case 2:
            preco = metragem * precoM2 * 1.15; 
            break;
        case 3:
            preco = metragem * precoM2 * 1.2; 
        case 4:
            preco = metragem * precoM2 * 1.25; 
            break;
        default:
            alert("Não permitido.");
            return;
    }

    return preco;
}
function calcularPreco() {
            let metragem = parseFloat(document.getElementById("metragem").value);
            let quartos = parseInt(document.getElementById("quartos").value);
            let precoM2 = parseInt(document.getElementById("precoM2").value);
            let preco = calcularImovel(metragem, quartos,precoM2);
            if (preco !== undefined) {
                alert("Preço do imóvel: R$" + preco.toFixed(2));
            }
        }