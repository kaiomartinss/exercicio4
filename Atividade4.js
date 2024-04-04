const girlfriend = {
    nome: "Cecilia Palitot",
    idade: 19,
    filiação: ["Jovanka Espinola", "Ubirajara Palitot"],
    endereço: {
        rua:"Av Professora Maria Sales 512",
        cidade:"João Pessoa",
        estado:"Paraíba",
    },
    
    dadosCompletos: function() {
        return !!this.nome && !!this.idade && !!this.filiação &&this.endereço.rua && !!this.endereço.cidade && !!this.endereço.estado;
    }  
};

const boyfriend = {
    nome: "Kaio Paulo",
    idade: 20,
    filiação: ["Lucijane Martins", "Paulo Martins"],
    endereço: {
        rua:"Av Ingá 613",
        cidade: "João Pessoa",
        estado: "Paraíba",
    },

    dadosCompletos: function() {
        return !!this.nome && !!this.idade && !!this.filiação && !!this.endereço.rua && !!this.endereço.cidade && !!this.endereço.estado;
    }
};

function imprimirInformações(pessoa) {
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Filiação:", pessoa.filiação);
    console.log("Endereço:", pessoa.endereço);
    console.log("Dados completos:", pessoa.dadosCompletos());
}


console.log("Dados girlfriend 1:");
imprimirInformações(girlfriend);

console.log("Dados boyfriend 2:");
imprimirInformações(boyfriend);




