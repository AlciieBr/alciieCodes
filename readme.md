### Alciie



## Português

Aqui estão algumas funções úteis que eu uso com alguma frequência, caso tenha interesse em utilizá-las ou sugerir melhorias fiquem à vontade

Para função de explicação, o arquivo chamado "alciieFunctions.js" está implementado para recolher todas as funções e poder importa-las em conjunto com a usagem "**variável**.**nomeDaFunção**";

Porém, você pode importa-las manualmente uma a uma e a usagem será apenas "**nomeDaFunção**, minha preferencia para importa-las pelo arquivo geral se dá para não "sujar" as variáveis (caso queira criar uma outra função com um nome semelhante ~(não recomendo)~ ou caso você já tenha alguma função de mesmo nome)

Para importa-las em conjunto, adicione a pasta a seu projeto e no inicio do arquivo que quer utilizar as funções digite a linha de comando:

          *const **variável** = require ("./utils/alciieFunctions.js")*

usagem modelo ==> alciie.xMask(args)

Para importar manualmente, adicione a seguinte linha ao inicio do seu arquivo:

          *const **variável** = require ("./utils/**nomedafunção**.js")*

          *usagem modelo ==> variável(args)*

Note que não é necessário que você utilize o nome da constante/função igual a que eu utilizei, porém, recomendo fazê-la para evitar erros, bugs ou conflitos futuros;



## English

Here are some useful functions that I use quite often, if you are interested in using them or suggest improvements feel free

For the sake of explanation, the file called "alciieFunctions.js" is implemented to collect all the functions and be able to import them together using "**variable**.**nameOfFunction**";

However, you can manually import them one by one and the usage will be just "**FunctionName**, my preference for importing them through the general file is to not "dirty" the variables (in case you want to create another function with a similar name ~(I don't recommend)~ or if you already have a function with the same name)

To import them together, add the folder to your project and at the beginning of the file you want to use the functions type the command line:

           *const **variable** = require("./utils/alciieFunctions.js")*

template usage ==> alciie.xMask(args)


To manually import, add the following line to the beginning of your file:

           *const **variable** = require("./utils/**functionname**.js")*

          *template usage ==> variable(args)*

Notice that it is not necessary that you use the name of the constant/function the same as the one I used, however, I recommend doing it to avoid future errors, bugs or conflicts;