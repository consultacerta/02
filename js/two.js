const url = window.location.href;

// Em seguida, crie um objeto URLSearchParams
const urlParams = new URLSearchParams(new URL(url).search);

// Agora, você pode pegar o valor do parâmetro desejado
const nome = urlParams.get('name');

if(nome){
    document.querySelector("#nome").innerHTML = `Olá, <b style="color: #333">${nome}</b>`
}else{
    document.querySelector("#nome").style.display = "none"

}


