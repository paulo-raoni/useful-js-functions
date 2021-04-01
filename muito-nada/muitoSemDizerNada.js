

(function(doc){
    ((function(){if(typeof(jQuery)=="undefined"){window.jQuery="loading";var a=document.createElement("script");a.type="text/javascript";a.src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";a.onload=function(){console.log("jQuery "+jQuery.fn.jquery+" loaded successfully.")};a.onerror=function(){delete jQuery;alert("Error while loading jQuery!")};document.getElementsByTagName("head")[0].appendChild(a)}else{if(typeof(jQuery)=="function"){alert("jQuery ("+jQuery.fn.jquery+") is already loaded!")}else{alert("jQuery is already loading...")}}})())
   
    const phrases = [
        [
            'Caros colegas,',
            'Por outro lado,',
            'Não podemos esquecer que',
            'Do mesmo modo,',
            'A prática mostra que',
            'Nunca é demais insistir que',
            'A experiência mostra que',
            'É fundamental ressaltar que',
            'O incentivo ao avanço tecnológico, assim como',
            'Assim mesmo,'
        ],
        [
            'a execução deste projeto',
            'a complexidade dos estudos efetuados',
            'a atual estrutura de organização',
            'o novo modelo estrutural aqui preconizado',
            'o desenvolvimento de formas distintas de atuação',
            'a constante divulgação das informações',
            'a consolidação das estruturas',
            'a análise dos diversos resultados',
            'o início do programa de formação de atitudes',
            'a expansão de nossa atividade'
        ],
        [
            'nos obriga à análise',
            'cumpre um papel essencial na formulação',
            'auxilia a preparação e a estruturação',
            'contribui para a correta determinação',
            'assume importantes posições na definição',
            'facilita a definição',
            'prejudica a percepção da importância',
            'oferece uma boa oportunidade de verificação',
            'acarreta um processo de reformulação',
            'exige precisão e definição'
        ],
        [
            'das nossas opções de desenvolvimento futuro.',
            'das nossas metas financeiras e administrativas.',
            'das atitudes e das atribuições da diretoria.',
            'das novas proposições.',
            'das opções básicas para o sucesso do programa.',
            'do nosso sistema de formação de quadros.',
            'das condições apropriadas para os negócios.',
            'dos índices pretendidos.',
            'das formas de ação.',
            'dos conceitos de participação geral.'
        ],
    ] 
    
    const $input = doc.querySelector('[data-tab="1"]')

    const statementMaker = (e) => {
        removePlaceholder(e)
        const key = e.which || e.keyCode
        const parent = e.target.parentNode
        let statement = ''

        if(key === 32) {
            
            for(let i = 0; i < 4; i++)
               statement += phrases[i][Math.floor(Math.random() * 10)] + " "

               $input.innerHTML = statement
               $input.nodeValue = statement
               
               $input.parentNode.firstElementChild.setAttribute("style", "visibility: hidden")
        } 
        
        // else {
        //     parent.parent.click()
        //     // parent.trigger({ type: 'keypress', keyCode: 34, charCode: 34, which: 34 })
        //     // parent.trigger({ type: 'keypress', keyCode: 35, charCode: 35, which: 35 })
        //     // parent.trigger({ type: 'keypress', keyCode: 8, charCode: 8, which: 8 })
        //     // parent.trigger({ type: 'keypress', keyCode: 13, charCode: 13, which: 13 })
        // }

    }

    const removePlaceholder = (e) => {
        const previous = e.target.previousSibling
        previous.style.display = 'none'        
    }

   $input.addEventListener('keyup', statementMaker)
   $input.addEventListener('mouseup', removePlaceholder)
   
})(document)





// const end = new Event('keydown')
//     end.key="End";    // just enter the char you want to send 
//     end.keyCode=35;
//     end.which=35;
//     end.altKey=false;
//     end.ctrlKey=false;
//     end.shiftKey=false;
//     end.metaKey=false;
//     end.bubbles=true;

//     const backspace = new Event('keydown')
//     backspace.key="Backspace";    // just enter the char you want to send 
//     backspace.keyCode=8;
//     backspace.which=8;
//     backspace.altKey=false;
//     backspace.ctrlKey=false;
//     backspace.shiftKey=false;
//     backspace.metaKey=false;
//     backspace.bubbles=true;

//     const enter = new Event('keydown')
//     enter.key="Enter";    // just enter the char you want to send 
//     enter.keyCode=13;
//     enter.which=13;
//     enter.altKey=false;
//     enter.ctrlKey=false;
//     enter.shiftKey=false;
//     enter.metaKey=false;
//     enter.bubbles=true;



function fireKeyboardEvent(event, keycode) {
    var keyboardEvent = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");

    if(keyboardEvent.initEvent) {
        keyboardEvent.initEvent(event, true, true);
    }

    keyboardEvent.keyCode = keycode;
    keyboardEvent.which = keycode;

    document.dispatchEvent ? document.dispatchEvent(keyboardEvent) 
                           : document.fireEvent(event, keyboardEvent);
  }

fireKeyboardEvent('keyup', 35)
fireKeyboardEvent('keyup', 8)
fireKeyboardEvent('keyup', 13)