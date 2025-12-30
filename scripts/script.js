
const pesquisar = document.querySelector('.perquisar')
const resultadoDaPesquisa = document.querySelector('.resultadoDaPesquisa')

const btnCertificados = document.querySelector('.certificados')
const divMeusCertificados = document.getElementById('meusCertificados') 
const divOndeEstãoMeusCertificados = document.getElementById('divMeusCertificados')

const btnImgIconeDeSeta = document.getElementById('imgIconeDeSeta')

const meusCertificados = [
    'vitor kruger gomes - Curso JavaScript na Web_ manipule o DOM com JavaScript - Alura',

    'vitor kruger gomes - Curso JavaScript_ construindo páginas dinâmicas - Alura',

    'vitor kruger gomes - Curso JavaScript_ entendendo promises e async_await - Alura',

    'vitor kruger gomes - Curso JavaScript_ explorando a manipulação de elementos e da localStorage - Alura',

    'vitor kruger gomes - Curso JavaScript_ manipulando elementos no DOM - Alura',

    'vitor kruger gomes - Curso JavaScript_ métodos de array - Alura',

    'vitor kruger gomes - Curso JavaScript_ implementando CRUD com requisições HTTP - Alura'
]

const MeusSites = [
    'https://vitor-rlk-gomes.github.io/fokus/',
    'https://vitor-rlk-gomes.github.io/codeConect/',
    'https://vitor-rlk-gomes.github.io/alura-books/',
]

let certificadosVisiveis = false

function mostrarCertificados(){
    if(certificadosVisiveis){
        btnImgIconeDeSeta.setAttribute('src', './img/icones/seta-para-baixo.png')
        divMeusCertificados.innerHTML = ''
        divOndeEstãoMeusCertificados.style.display = 'none'
        certificadosVisiveis = false
        return;
    }

    let index = -1
    meusCertificados.forEach(certificados => {

        btnImgIconeDeSeta.setAttribute('src', './img/icones/seta-direita.png')
        btnImgIconeDeSeta.style.transform = 'rotate(90angle)'
        btnImgIconeDeSeta.style.transition = '2s'
    
        certificados = index ++

        certificados = document.createElement('li')
        certificados.classList.add('liDeCertificado')

        const linkDoCertificado = document.createElement('a')
        linkDoCertificado.classList.add('linkDoCertificado')

        linkDoCertificado.setAttribute('href', `./img/meusCertificadosImg/${meusCertificados[index]}.pdf`)
        linkDoCertificado.target = '_blank'
        linkDoCertificado.textContent = meusCertificados[index]

        certificados.appendChild(linkDoCertificado)

        divMeusCertificados.appendChild(certificados)

        divOndeEstãoMeusCertificados.style.display = 'block'

    });

    certificadosVisiveis = true
}

btnCertificados.addEventListener('click', () => {
    mostrarCertificados() 
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
