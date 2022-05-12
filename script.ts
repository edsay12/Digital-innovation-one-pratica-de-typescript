type Veiculo = {
    nome:String,
    placa:String,
    entrada: String | Date,
}

(function(){
    const $ = (query:string):HTMLInputElement | null => document.querySelector(query)
    
    function patio(){
        function add(veiculo: Veiculo,salvar?:boolean){
            const row = document.createElement('tr')
            row.innerHTML =`
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class='delete' data-placa='${veiculo.placa}'>Delete</button>
            </td>
            `
            $('#patio')?.appendChild(row)
            if(salvar) patio().save([...read(),veiculo])
            row.querySelector('.delete')?.addEventListener('click',()=>{

            })
           
        }
        function remove(){}
        function save(veiculos:Veiculo[]){
            localStorage.setItem('patio',JSON.stringify(veiculos));

        }

        function read():Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio) : []
        }
        function render(){
            $('#patio')!.innerHTML = ''
            const patio = read()
            if(patio.length){
                patio.forEach((veiculo) => add(veiculo));

            }
        }

        return {add,remove,save,read,render}
    }
    patio().render()


    $('#cadastrar')?.addEventListener('click',()=>{
        const nome = $('#nome')?.value
        const placa = $('#placa')?.value
        if(!nome || !placa){
            alert('os campos nome e placa sao obrigatorios')
            return
        }

        const veiculo = {nome,placa,entrada:new Date().toLocaleString()}

        patio().add(veiculo,true)
        
        
    })
})();