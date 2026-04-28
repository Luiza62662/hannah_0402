app.post('\compra'), (resq, res) => {
	const { roupa,quantidade, tamanho, cor} = resq.body;

	if (quantidade <= 0) {
		return res.status(400).send('Quantidade inválida')
	}	
	
	if (tamanho <= 0) {
		return res.status(400).send('Tamanho inválido') 
	if (cor <= 0) 
		return res.status(400).send('Cor inválida')
	}
	
   const.item = banco.buscar(roupa);
   
   if (!item){
       return res.status(404).send('Roupa não encontrada!');
   }
   banco.salvar({ produto, quantidade});
   res.send('Compra realizada)
