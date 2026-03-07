const pesquisar = document.querySelector('.perquisar')
const resultadoDaPesquisa = document.querySelector('.resultadoDaPesquisa')

const btnCertificados = document.querySelector('.certificados')
const divMeusCertificados = document.getElementById('meusCertificados') 
const divOndeEstãoMeusCertificados = document.getElementById('divMeusCertificados')

const btnImgIconeDeSeta = document.getElementById('imgIconeDeSeta')


const meusCertificados = {
        JavaScript: [
            'vitor kruger gomes - Curso JavaScript na Web_ manipule o DOM com JavaScript - Alura',

            'vitor kruger gomes - Curso JavaScript_ construindo páginas dinâmicas - Alura',

            'vitor kruger gomes - Curso JavaScript_ entendendo promises e async_await - Alura',

            'vitor kruger gomes - Curso JavaScript_ explorando a manipulação de elementos e da localStorage - Alura',

            'vitor kruger gomes - Curso JavaScript_ manipulando elementos no DOM - Alura',

            'vitor kruger gomes - Curso JavaScript_ métodos de array - Alura',

            'vitor kruger gomes - Curso JavaScript_ implementando CRUD com requisições HTTP - Alura',

            'vitor kruger gomes - Curso JavaScript_ evoluindo a sua aplicação com ES6+ - Alura',

            'vitor kruger gomes - Curso Node.js e terminal_ dominando o ambiente de desenvolvimento front-end - Alura'
        ],
        nodeJs: [
            'vitor kruger gomes - Curso JavaScript com Node.js_ criando sua primeira biblioteca - Alura'
        ]
    }

const MeusSites = [
    'https://vitor-rlk-gomes.github.io/fokus/',
    'https://vitor-rlk-gomes.github.io/codeConect/',
    'https://vitor-rlk-gomes.github.io/alura-books/',
]

let certificadosVisiveis = false
const h2LinguagemDoCertificado = document.querySelector('#h2linguagemDoCertificado')

function mostrarCertificados(tipoDeCertificado) {
    if (!certificadosVisiveis) {
        h2LinguagemDoCertificado.textContent = tipoDeCertificado 
        divOndeEstãoMeusCertificados.style.display = 'block'
        const certificado = meusCertificados[tipoDeCertificado]
        certificado.forEach(cert => {
            const lideCertificado = document.createElement('li')
            lideCertificado.classList.add('liDeCertificado')
            
            const linkDoCertificado = document.createElement('a')
            linkDoCertificado.href = `../img/meusCertificadosImg/${tipoDeCertificado}/${cert}.pdf`
            linkDoCertificado.target = '_blank'
            linkDoCertificado.classList.add('linkDoCertificado')
            linkDoCertificado.textContent = cert

            lideCertificado.appendChild(linkDoCertificado)
            divMeusCertificados.appendChild(lideCertificado)
        })
        certificadosVisiveis = true
    }
}

const mudaCertificado = document.getElementById('mudaCertificado')

function mudarCertificados() {
    if (h2LinguagemDoCertificado.textContent === 'JavaScript') {
        h2LinguagemDoCertificado.textContent = 'Node.js'
        divMeusCertificados.innerHTML = ''
        const certificado = meusCertificados['nodeJs']
        certificado.forEach(cert => {
            divMeusCertificados.innerHTML += `<li class="liDeCertificado"><a href="../img/meusCertificadosImg/nodeJs/${cert}.pdf" target="_blank" class="linkDoCertificado">${cert}</a></li>`
        })
    } else {
        h2LinguagemDoCertificado.textContent = 'JavaScript'
        divMeusCertificados.innerHTML = ''
        const certificado = meusCertificados['JavaScript']
        certificado.forEach(cert => {
            divMeusCertificados.innerHTML += `<li class="liDeCertificado"><a href="../img/meusCertificadosImg/javaScript/${cert}.pdf" target="_blank" class="linkDoCertificado">${cert}</a></li>`
        })
    }
}

btnCertificados.addEventListener('click', () => {
    mostrarCertificados('JavaScript')
})

mudaCertificado.addEventListener('click', () => {
    mudarCertificados()
})

pesquisar.addEventListener('focus', () => {
    retornoDaPesquisa()
    resultadoDaPesquisa.style.display = 'block'
       
    document.addEventListener('click', (event) => {
        const isClickInside = pesquisar.contains(event.target) || resultadoDaPesquisa.contains(event.target)

        if (!isClickInside) {
            resultadoDaPesquisa.style.display = 'none'
        }
    })
})

function retornoDaPesquisa(){
   
    pesquisar.onkeyup = () => {
        const resMeusSites = MeusSites.filter(site => site.toLowerCase().includes(pesquisar.value.toLowerCase()))

        const resMeusCertificados = meusCertificados.filter(certificado => certificado.toLowerCase().includes(pesquisar.value.toLowerCase()))

        if(pesquisar.value.length === 0 ){
            resultadoDaPesquisa.innerHTML = ''
        }
        else if(resMeusCertificados){
            resultadoDaPesquisa.innerHTML = resMeusSites.map(site => `<li class="liDeCertificado"><a href="${site}" target="_blank" class="linkDoCertificado">${site}</a></li>`).join('')

            resultadoDaPesquisa.innerHTML += resMeusCertificados.map(certificado => `<li class="liDeCertificado"><a href="./img/meusCertificadosImg/${certificado}.pdf" target="_blank" class="linkDoCertificado">${certificado}</a></li>`).join('')
        }

    }

}
