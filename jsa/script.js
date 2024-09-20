class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
  }

  class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }

  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }

  function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
  }
  

  function criarFuncionario() {
    try {

      document.getElementById('resultado').innerHTML = '';
      exibirErro('');
  

      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value);
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;
  
 
      if (!nome || !idade || isNaN(idade) || !cargo) {
        throw new Error('Por favor, preencha todos os campos corretamente.');
      }
  
      let funcionario;
  
      if (cargo === 'Gerente') {
        if (!departamento) {
          throw new Error('Por favor, preencha o departamento para o Gerente.');
        }
        funcionario = new Gerente(nome, idade, departamento);
      } else if (cargo === 'Desenvolvedor') {
        if (!linguagem) {
          throw new Error('Por favor, preencha a linguagem de programação para o Desenvolvedor.');
        }
        funcionario = new Desenvolvedor(nome, idade, linguagem);
      } else {
        throw new Error('Cargo inválido.');
      }
  

      exibirResultado(funcionario);
    } catch (erro) {
      exibirErro(erro.message);
    }
  }
  
  function exibirResultado(funcionario) {
    const resultadoDiv = document.getElementById('resultado');
    let resultado = funcionario.seApresentar() + '<br>' + funcionario.trabalhar() + '<br>';
  
    if (funcionario instanceof Gerente) {
      resultado += funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
      resultado += funcionario.programar();
    }
  
    resultadoDiv.innerHTML = resultado;
  }
  