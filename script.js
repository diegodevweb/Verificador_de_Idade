function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = (document.getElementById('anoNasc').value)
    var resultado = document.getElementById('resultado')
   
    
        
        /*var img = document.createElement('img')  /*Serve para criar img dentro do JS*/
        /*img.setAttribute('id', 'foto') /*- Atribui um id para a img criada */
        
        if (anoDigitado < 1930 || anoDigitado > 2022){
            alert('Erro! Digite um ano válido.')
        }else{
            var sexo = document.getElementsByName('radsex')
            var idade = ano - anoDigitado
            var genero = ''
            var img = document.getElementById('img')

         if(sexo[0].checked){
            genero = 'Mulher'
        if (idade >= 0 && idade <=2){
            img.src = 'midia/bebe_menina.png'
        }else if(idade >2 && idade <10){
            img.src = 'midia/menina.png'
        }else if (idade <20){
            img.src = 'midia/adol_menina.png'
        }else if(idade <25){
            img.src = 'midia/jovem_menina.png'
        }else if(idade < 41){
            img.src = 'midia/mulher_adulta.png'
        }else if(idade < 60){
            img.src = 'midia/mulher_meiaidade.png'
        }else if(idade>=60){
            img.src = 'midia/mulheridosa.png'
        }
        }else if (sexo[1].checked){
            genero = 'Homem'
        
            if (idade >= 0 && idade <=2){
                img.src = 'midia/bebe_menino.png'
            }else if(idade >2 && idade <10){
                img.src = 'midia/menino.png'
            }else if (idade <20){
                img.src = 'midia/adol_menino.png'
            }else if(idade <25){
                img.src = 'midia/jovem_menino.png'
            }else if(idade < 41){
                img.src = 'midia/homem_adulto.png'
            }else if(idade < 60){
                img.src = 'midia/homem_meiaidade.png'
            }else if(idade>=60){
                img.src = 'midia/homem_idoso.png'
            }
            }
            resultado.innerHTML = `Detectamos ${genero} de ${idade} ano(s)`
           
        }
        
}
        
            


