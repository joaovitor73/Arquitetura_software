let usuarios = [];

function Cadastrar(nome, idade){
    alert('Usuário cadastrado com sucesso');
    console.log(usuarios)	
    usuarios.push(new Usuario(nome, idade));
}

class Usuario{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

export default Cadastrar;


