function verificar() {
    let data = new Date()
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('{ERRO} Digite uma data válida')
    }else {
        let fsex = document.getElementsByName('radsex') 
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', ' foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {

                    img.setAttribute('src', 'bebem.jpg.jpg')

                }else if (idade <21) {

                    img.setAttribute('src', 'jovemm.jpg')

                }else if(idade < 50) {

                    img.setAttribute('src', 'adultom.jpg.jpg')

                }else {
                    img.setAttribute('src', 'idosom.jpg')
                }
            }else if(fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {

                    img.setAttribute('src', 'bebef.jpg.jpg')

                }else if (idade <21) {

                    img.setAttribute('src', 'jovemf.jpg')

                }else if(idade < 50) {

                    img.setAttribute('src', 'adultaf.jpg')

                }else {

                    img.setAttribute('src', 'idosaf.jpg')

                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}