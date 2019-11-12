# Código para a web nacional da Semente

Na forma atual, este projeto foi inicialmente autogerado usando
[Luminus](http://luminusweb.net) 3.48, com o seguinte comando:

`lein new luminus relembra +reitit +aleph +datomic +shadow-cljs +kee-frame +auth +kibit`

## Lançar o entorno de desenvolvimento

### Prerrequisitos

Precisas o JDK 1.8 ou mais novo.

Instala também a última versom de [Leiningen][1].

[1]: https://github.com/technomancy/leiningen

Também precisas [git](https://git-scm.com/).

Clona este repositório com

    git clone git://github.com/euccastro/semente

E antes de correr a primeira vez cópia estes arquivos (é configuraçom para
manter localmente sem meter em git):

    cp initial-dev-config.edn dev-config.edn
    cp initial-test-config.edn test-config.edn

### Correr

Para começar um servidor web para a aplicaçom, corre isto num shell, no
diretório base do projeto:

    lein run 

E depois para lançar o processo que recarrega Clojurescript e CSS:

    lein shadow watch app

Para ver a primeira prova de layout, visita entom http://localhost:3000/nacional
no teu navegador.

## License

Copyright © 2019 Projeto Educativo Semente
