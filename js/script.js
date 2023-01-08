var texto1 = document.querySelector('.area1');
var texto2 = document.querySelector('.area2');
var encriptar = document.querySelector('.encriptar');
var desencriptar = document.querySelector('.desencriptar');
var tCopiar = document.querySelector('.copiar');
var texto;



function cifrar() {	
	let textoCifrado;
	texto = texto1.value;
	textoCifrado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");
	texto2.value = textoCifrado;
	texto1.value = "";
}

function decodificar() {
	let textoDecodificado;
	texto = texto1.value;
	textoDecodificado =  texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");	
	texto2.value = textoDecodificado;
}

const copiar = str => (
	navigator.clipboard?.writeText?.(str)
	?? Promise.reject("No esta disponible el copiado")
)


encriptar.onclick = cifrar;
desencriptar.onclick = decodificar;
tCopiar.addEventListener('click', async () => {
	try {
		await copiar(texto2.value);
	} catch (error) {
		console.error(error);
	}
})








