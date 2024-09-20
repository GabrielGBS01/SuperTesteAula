// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
  }
  
  // Classe Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
      super(nome, idade, 'Gerente');
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
  }
  
  // Classe Desenvolvedor que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
      super(nome, idade, 'Desenvolvedor');
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  
  //Gerente
  const gerente = new Gerente('Gabriel', 25, 'Vendas');
  gerente.seApresentar();
  gerente.trabalhar();
  gerente.gerenciar();
  
  //Desenvolvedor
  const desenvolvedor = new Desenvolvedor('Jonas', 32, 'JavaScript');
  desenvolvedor.seApresentar();
  desenvolvedor.trabalhar();
  desenvolvedor.programar();
  