# Modelo de dados de artigos

Este documento descreve a estrutura que tenhem os artigos nas suas várias
representaçons internas.

Estes artigos podem ser criados e editados por gente sem conhecementos de
desenho. Esta estrutura e restriçons visam fazer mais simples estas tarefas e
uniformizar estilos.

No aspecto técnico, estas definiçons importam à hora de guardar arquivos na base
de dados, à hora de mostrá-los, e de definir as interfaces de ediçom. Portanto
compreender isto pode ajudar a lêr o código.

## Título

Cada artigo tem um título, que é mostrado como elemento destacado tanto nas
listagens de artigos quanto na vista particular do artigo. Na vista particular
do artigo o título também aparece na barra de título do navegador. Além disso, o
path da vista particular do artigo é derivada do título (por exemplo, um
hipotético título "O Apalpador em Amaía" teria o URL
http://semente.gal/amaia/artigo/o-apalpador-em-amaia)

## Nomes normalizados de artigos

Como dixemos acima, o URL dum artigo é derivado do título. Como o título pode
ser editado, o URL pode mudar. Para que os velhos URLs sigam funcionando,
guardamos na base de dados todos os URLs que tivo ou tem um artigo. Ou para ser
exactos, guardamos todos os nomes normalizados dos artigos
("o-apalpador-em-amaia" no exemplo anterior), a partir dos quais construimos os
URLs.

## Tipo

Um artigo pode ser um _dia-a-dia_ (crónica quotidiana das atividades da escola) ou
umha _nova_. No futuro podemos definir novas categorias. Isto só importa se
queremos fazer listagens específicas dum tipo.

## Âmbito

Um artigo pode ter âmbito nacional ou circunscrito a algumha das associaçons ou
centros.

## Imagem principal

Todo artigo tem umha imagem principal, que é a que é mostrada nas listagens de
artigos. O modelo de dados dumha imagem é o mesmo que no corpo do artigo (ver
embaixo).

## Sinopse

Todo artigo tem umha sinopse de longitude restringida e de texto plano (o que é
dizer, sem negrita, cursiva, ligaçons ou outros elementos de formato). Esta
sinopse é editada a mam; nom é extraída automáticamente do texto principal do
artigo. Aparece nas listagens de artigos, e num futuro pode servir para postear
automaticamente a redes sociais.

A longitude da sinopse está por determinar. 288 caracteres é a longitude máxima
dum tuit, e hai que deixar espaço para umha ligaçom ao artigo.

## Corpo principal

Isto é o que mostramos na vista de detalhe do artigo, coa única excepçom de que
título é insertado automaticamente como um cabeçalho.

O corpo principal é umha sucessom de bloques. Cada bloque pode ser

- um parágrafo normal
- umha cita
- umha lista
- umha imagem

Estes tipos som definidos a seguir.

### Parágrafo

Um parágrafo é umha sucessom de tramos de texto, cada um dos quais pode ser nu
ou com as seguintes decoraçons:

- **força (negrita)**
- _ênfase (cursiva)_
- [ligaçom](https://github.com/euccastro/semente/blob/master/doc/formato-artigo.md#par%C3%A1grafo)

### Cita

Umha cita tem o mesmo formato que um parágrafo, mas é mostrada com um estilo
diferente.

### Lista

Umha lista pode ser numerada ou nom.  Cada elemento dumha lista tém o mesmo
formato que um parágrafo.

### Imagem

Umha imagem tem as seguintes propriedades:

- descriçom: aparece como `<alt>` no HTML da página, e portanto é importante para
  quem visita a página sem imagens (por exemplo, pessoas invidentes).
- fonte e extensom: estes som elementos de uso interno no código; nem as
  editoras nem as visitantes da página se tenhem que importar com isto.
