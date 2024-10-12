import ageValidate  from './dominio/usuario.js';
import Cadastrar from './persistencia/usuarioDao.js';
document.getElementById('form').addEventListener('submit', function(event){
    console.log('Evento de submit');
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    if(!ageValidate(idade)){
        return alert('Idade inválida');
    }
    Cadastrar(nome, idade);
});