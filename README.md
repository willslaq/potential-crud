# potential-crud


## Backend(API)

### Listagens
Para listar todos desenvolvedores envie método **GET** para a rota **/developers**.

Para filtrar utilize método **GET** com query string como no exemplo:

```
/developers?name="Joao"&gender="M"
```
Filtros disponíveis:
-**name**: Tipo **string**, o valor passado irá procurar por esta ocorrência dentro da string;

-**gender**: Tipo **string**, máximo 1 posição. Passar:

  -**"M"**: Masculino

  -**"F"**: Feminino

  -**"N"**: Não binário/Outro

Para listar os dados de um desenvolvedor em específico, utilizar método **GET** e passar o ID para o endpoint **/developers**, como no exemplo:
```
  /developers/id
```
Tipagem:
-**id**: O ID é um uuid, passar sempre com tipo **string**.




 Retornos de erro:
 
 **[01] Dados incompletos, por favor verifique os dados enviado.**
 
  -Verificar se a estrutura do JSON enviado está completa, com todas as chaves e valores necessários.
