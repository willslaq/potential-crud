# potential-crud


## Backend(API)

### Listagens
Para listar todos desenvolvedores envie método **GET** para a rota **/developers**.

Para filtrar utilize método **GET** com query string como no exemplo:  
```
/developers?name="Joao"&gender="M"
```
Filtros disponíveis:  
* **name**: Tipo **string**, o valor passado irá procurar por esta ocorrência dentro da string;
* **gender**: Tipo **string**, máximo 1 posição. Passar:  
   * **M**: Masculino  
   * **F**: Feminino  
   * **N**: Não binário/Outro

Para listar os dados de um desenvolvedor em específico, utilizar método **GET** e passar o ID para o endpoint **/developers**, como no exemplo:
```
  /developers/id
```
Tipagem:  
* **id**: O ID é um uuid, passar sempre com tipo **string**.

### Cadastrar
Para cadastrar enviar **JSON** no corpo da requisição por método **POST** para a rota **/developers**, como no exemplo:
```javascript
  {
    "name": "José das Couve",
    "gender": "m",
    "age": 22,
    "hobby": "Ver o ar livre",
    "birthDate": "1999-05-20"
  }
```
Tipagem:  
* **name**: Passar nome do desenvolvedor, tipo **string** `Obrigatório`  
* **gender**: Passar gênero sexual do desenvolvedor, tipo **string** `Obrigatório`  
  * **M**: Masculino  
  * **F**: Feminino  
  * **N**: Não binário/Outro  
* **age**: Passar a idade do desenvolvedor, tipo **integer** `Obrigatório`  
* **hobby**: Passar o passatempo/diversão do desenvolvedor, tipo **string** `Obrigatório`  
* **birthDate**: Passar a data de nascimento do desenvolvedor, tipo **Date**, no formato **AAAA-MM-DD**(timestamp) `Obrigatório`  

### Atualizar Dados
Para atualizar dados de um registro envie **JSON** no corpo da requisição por método **PUT** para a rota **/developers**
e enviar o `ID` pela URL. Como nos exemplo a seguir:  

Exemplo URL:
```
  /developers/id
```

Exemplo Body:
```javascript
  {
    "name": "José das Couve Aparecido",
  }
```
-Todos os atributos, com excessão do ID podem ser atualizados  
-Precisa ter ao menos um atributo a ser atualizado no objeto

#### Deletar
Para deletar um desenvolvedor, utilizar método **DELETE** e passar o ID para o endpoint **/developers**, como no exemplo:  
```
  /developers/id
```

### Retornos de erros:
 
 **😐 [01] Dados incompletos, por favor verifique os dados enviados.**  
  -Verificar se a estrutura do JSON enviado está completa, com todas as chaves e valores necessários.

 **😐 [02] Informe um uuid válido.**  
  -Verificar o uuid enviado.

 **😐 [03] Para atualizar um registro, informe um ID**  
  -Verificar se realmente foi enviado o ID na URL de envio do pacote

 **😐 [04] Informe ao menos um parâmetro a ser atualizado**  
  -Verificar se foi passado algum parâmetro no corpo da requisição para fazer o update  

 **🤔 [05] Informe um ID a ser deletado**  
  -Verificar se foi realmente passado id para a url ao tentar utilizar o método delete

 **🕵️‍♂️ [06] Nenhum desenvolvedor com este ID encontrado**  
  -Verificar se o ID de desenvolvedor está correto, pois não foi encontrado ocorrência do mesmo em nenhuma entidade do banco.