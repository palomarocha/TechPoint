document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav ul");

    menu.addEventListener("click", function () {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }

        window.addEventListener("resize", function () {
            if (window.innerWidth > 483) {
                nav.style.display = "flex";
            } else {
                nav.style.display = "none";
            }
        });
    })

    function comprar(plano, preco) {
        const confirmacao = window.confirm(`Você deseja adquirir o plano ${plano} por ${preco}?`);
        if (confirmacao) {
            window.alert(`Compra do plano ${plano} realizada com sucesso!`);
        } else {
            window.alert("Compra cancelada.");
        }
    }


    document.querySelector("#produto1").addEventListener("click", () => comprar("Básico", "R$50/mês"));
    document.querySelector("#produto2").addEventListener("click", () => comprar("Avançado", "R$90/mês"));
    document.querySelector("#produto3").addEventListener("click", () => comprar("Premium", "R$150/mês"));
});