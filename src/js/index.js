function cadastroDev () {
    const cadastro = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const dadosDoDev = [];

    function chamarEvento (event) {
        event.preventDefault();

        const nome = cadastro.querySelector('.nome');
        const contato = cadastro.querySelector('.contato');
        const senha = cadastro.querySelector('.senha');
        const usuario = cadastro.querySelector('.usuario');
        const frontEnd = cadastro.querySelector('.front-end');
        const backEnd = cadastro.querySelector('.back-end');
        const fullStack = cadastro.querySelector('.full-stack');

        dadosDoDev.push({
            nome: nome.value,
            contato: contato.value,
            senha: senha.value,
            usuario: usuario.value,
            frontEnd: frontEnd.value,
            backEnd: backEnd.value,
            fullStack: fullStack.value
        })

        console.log(dadosDoDev);

        resultado.innerHTML = `${nome.value} ${contato.value}`
    }

    cadastro.addEventListener('submit', chamarEvento);
}

cadastroDev()