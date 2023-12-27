import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './codes.css'
import { useState } from 'react';

const Codes = () => {
    const codeStringHtml = `<div class="fundo">
        <h1 style="text-align: center;">Gustavo Lindo</h1>  
        <div class="calculadora">
            <h1 style="text-align: center;">Calculadora</h1>
            <p id="resultado"></p>
            <table>
                <tr>
                    <td><button class="botao" onclick="clean()">CE</button></td>
                    <td><button class="botao" onclick="back()">C</button></td>
                    <td><button class="botao" onclick="insert('/')">/</button></td>
                    <td><button class="botao" onclick="insert('*')">X</button></td>
                </tr>    
                <tr>
                    <td><button class="botao" onclick="insert('7')">7</button></td>
                    <td><button class="botao" onclick="insert('8')">8</button></td>
                    <td><button class="botao" onclick="insert('9')">9</button></td>
                    <td><button class="botao" onclick="insert('-')">-</button></td>
                </tr>    
                <tr>
                    <td><button class="botao" onclick="insert('4')">4</button></td>
                    <td><button class="botao" onclick="insert('5')">5</button></td>
                    <td><button class="botao" onclick="insert('6')">6</button></td>
                    <td><button class="botao" onclick="insert('+')">+</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onclick="insert('1')">1</button></td>
                    <td><button class="botao" onclick="insert('2')">2</button></td>
                    <td><button class="botao" onclick="insert('3')">3</button></td>
                    <td rowspan="2"><button class="botao" style="height: 106px;" onclick="calcular()" >=</button></td>
                </tr>
                <tr>
                    <TD  colspan="2"><button class="botao" style="width: 106px;" onclick="insert('0')">0</button></TD>
                    <TD><button class="botao" onclick="insert('.')">.</button></TD>
                </tr>

            </table>
        </div>
    </div>`;


    const codeStringCss = `*{
        padding: 0;
        margin: 0;
        font-family: "Raleway", sans-serif;
    }
    
    :root {
        --primary-color:#1F2024;
        --secundary-color: #17181C;
        --tertiary-color: #525664;
        --color-fonts: #fff;
    }
    
    body {
        background: var(--primary-color);
    }
    .container {
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    
    h1,h2,h3, p {
        color: #fff;
    }
    
    /* Side Bar */
    .search-container {
        display: flex;
        position: relative;
        flex-direction: row-reverse;
        align-items: center;
    
    }
    
    .container-btn-charges {
        max-width: 324px;
    }
    
    .search-container a {
        padding: 10px 20px;
        position: absolute;
    }
    
    .search-container a svg {
        fill: #fff;
    }
    
    .header {
        display: flex;
        flex-direction: column;
        padding: 20px 10px 10px;
        gap: 20px;
        margin-bottom: 21px;
    }
    
    
    .title-code-bank {
        font-weight: 100;
        opacity: 0.50;
    }
    .sidebar-container {
        background: var(--secundary-color);
        height: 100vh;
        width: 20%;
    }
    
    
    
    .add-changes {
        cursor: pointer;
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        border: none;
        border-radius: 40px;
        width: 30px;
        height: 30px;
        background: #2A7ABF;
        align-items: center;
        justify-content: center;
    
    }
    
    .add-changes:hover {
        background: #1d5688;
    }
    
    .add-changes img {
        width: 16px;
    }
    
    
    
    
    /* Fim Side Bar */
  `;



    const codeStringJs = `        function insert(num) {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }
    function clean() {
    document.getElementById ('resultado').innerHTML = "";
    }

    function back() {
    var resultado = document.getElementById ('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }

    function calcular() {
    var resultado = document.getElementById ('resultado').innerHTML;
    if(resultado) {
        document.getElementById ('resultado').innerHTML = eval(resultado);
    }else {
        var igual = document.getElementById('resultado').innerHTML = "0"

    }
    }
`;

const [copyHtml, setCopyHtml] = useState(false);
const [copyCss, setCopyCss] = useState(false);
const [copyJs, setCopyJs] = useState(false);

    const funcCopyHtml = () => {
        navigator.clipboard.writeText(codeStringHtml);

        setCopyHtml(true);
        setTimeout(() => {
            setCopyHtml(false);
        }, 2000);
    }

    const funcCopyCss = () => {
        navigator.clipboard.writeText(codeStringCss);

        setCopyCss(true);
        setTimeout(() => {
            setCopyCss(false);
        }, 2000);
    }

    const funcCopyJs = () => {
        navigator.clipboard.writeText(codeStringJs);

        setCopyJs(true);
        setTimeout(() => {
            setCopyJs(false);
        }, 2000);
    }
 
    return (

        <div className="codes-in-html">


            <div className='container-code'>

                <div className=' container-name-code'>
                    <p className='text-sm name-code'>
                        HTML
                    </p>

                    {copyHtml  ? (
                        <button className='btn-copie'>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            Copiado!
                        </button>

                    ) : (<button className='btn-copie'

                        onClick={
                            funcCopyHtml   
                        }>
                        <ion-icon name="documents-outline"></ion-icon>
                        Copiar código!
                    </button>)
                    }
                </div>

                <SyntaxHighlighter className="map-codes" wrapLongLines={true} customStyle={{ padding: "25px", }} language="html" style={atomOneDarkReasonable}>
                    {codeStringHtml}
                </SyntaxHighlighter>

            </div>


            <div className='container-code'>

            <div className=' container-name-code'>
                    <p className='text-sm name-code'>
                        CSS
                    </p>

                    {copyCss ? (
                        <button className='btn-copie'>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            Copiado!
                        </button>

                    ) : (<button className='btn-copie'

                        onClick={                            
                            funcCopyCss
                            }>
                        <ion-icon name="documents-outline"></ion-icon>
                        Copiar código!
                    </button>)
                    }
                </div>

                <SyntaxHighlighter className="map-codes" wrapLongLines={true} customStyle={{ padding: "25px", }} language="css" style={atomOneDarkReasonable}>
                    {codeStringCss}
                </SyntaxHighlighter>

            </div>


            <div className='container-code'>


            <div className=' container-name-code'>
                    <p className='text-sm name-code'>
                        JAVASCRIPT
                    </p>

                    {copyJs ? (
                        <button className='btn-copie'>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                            Copiado!
                        </button>

                    ) : (<button className='btn-copie'

                        onClick={
                            funcCopyJs
                        }>
                        <ion-icon name="documents-outline"></ion-icon>
                        Copiar código!
                    </button>)
                    }
                </div>

                <SyntaxHighlighter className="map-codes" wrapLongLines={true} customStyle={{ padding: "25px", }} language="javascript" style={atomOneDarkReasonable}>
                    {codeStringJs}
                </SyntaxHighlighter>

            </div>

        </div>

    );
};

export default Codes;