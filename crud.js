const readline = require('readline')

let users = [];

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Qual seu nome? ", function(nome) {
    console.log("Olá " + nome);
    menu();

});

function menu(){
  console.log("Digite qual função deseja acessar:")
  console.log("Cadastro | Update | Delete | Mostrar Usuários | Sair")

  r1.question("Escolha: ", function(fc){
      if(fc == "Cadastro"){
    
    r1.question('Digite o nome do usuário: ', function(nome){
      console.log('Usuário ' + nome + ' cadastrado com sucesso');
      users.push(nome);
      menu();
      
    })
  }

  else if(fc == "Delete"){
    let dUser = r1.question("Digite o nome do usuário que vai ser deletar: ", function(userD){
      if (users.includes(userD)) {
        let index = users.indexOf(userD);
        users.splice(index, 1)
        console.log("Usúario deletado com sucesso.")
        menu();
      }
      else{
    console.log("Usuário não encontrado.");
    menu();
}
    })
  }
  else if(fc == "Mostrar Usuários"){
    console.log(users);
    menu();
  }

  else if(fc == "Sair"){
    console.log("OK")
    r1.close();
  }


  else{
    console.log("Opção não encontrada.")
    menu();
  }
  });



}