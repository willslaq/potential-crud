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

### Retornos de erros:
 
 **[01] Dados incompletos, por favor verifique os dados enviados.**  
  -Verificar se a estrutura do JSON enviado está completa, com todas as chaves e valores necessários.
