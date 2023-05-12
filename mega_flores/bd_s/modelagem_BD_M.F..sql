create database mega_flores
use mega_flores

create table clientes(
id_cod_cli int primary key identity (1,1),
nome varchar(70) not null,
email varchar(50) not null,
senha varchar(30) not null,
cpf varchar(15),
endereco varchar(50)
)
create table produtos(
id_cod_prod int primary key identity (1,1),
nome varchar(100) not null,
descricao varchar(300),
quantidade int not null,
valor float not null
)
create table notaFiscal(
id_cod_NF int primary key identity (1,1),
dataEmicao date not null,
id_cod_cli int
)
create table transacao(
id_cod_prod int,
id_cod_NF int,
quantidade_vendas int
)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Branca','A flor margarida branca significa o amor, pureza, paz, inoc�ncia, juventude, criatividade, virgindade, sensibilidade e a bondade.',100,2.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Vermelha','O significado das margaridas vermelhas pode variar dependendo da cultura ou contexto em que s�o usadas. Em geral, a cor vermelha simboliza o amor, a paix�o e a emo��o intensa, ent�o as margaridas vermelhas podem representar sentimentos rom�nticos ou amorosos.',100,3.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Margarida Amarela','H� quem acredite que o significado de margarida amarela � amor leal. Mas, tamb�m tem quem ache que representa a bondade, afeto e pureza.',100,1.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Branca','A tulipa branca representa pureza e perd�o. Linda, ela ganha destaque na decora��o devido � cor t�o elegante e sofisticada.',100,4.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Vermelha','A tulipa vermelha � uma flor de beleza incompar�vel, que simboliza amor verdadeiro e paix�o intensa.',100,6.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Tulipa Amarela','A tulipa amarela simboliza alegria, felicidade, amizade e calor humano. � uma flor vibrante e exuberante, que transmite energia positiva e otimismo.',100,5.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Branca','No amor, a rosa branca transmite paz, tranquilidade e inoc�ncia, al�m de transpassar a sensa��o de calmaria e ingenuidade.',100,3.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Vermelha','As cl�ssicas rosas vermelhas significam amor, romance e a mais profunda afei��o por algu�m.',100,2.99)

insert into produtos
(nome, descricao, quantidade, valor)
values('Rosa Amarela','Rosas Amarelas representam riqueza, o ouro, os raios do Sol, a energia e a prosperidade.',100,2.99)

select produtos from mega_flores


insert into clientes
(nome,email,senha,cpf,endereco)
values('Ricardo Flores','ricardogamer323@gmail.com','FloresSaoLegais','101 463 834-50','4173, Bela Vista, S�o Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('V�tor Ros�rio','vitorRosarioSilva@yahoo.com.br','Vitao11021994','413 551 591-70','5143, Apartamento 6, S�o Francisco, S�o Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Suzana Ramos','susanaramos1@gmail.com','FQWJIBF_15943810','314 816 556-60','7546, S�o Crist�v�o, S�o Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Wanda Pacheco','pachecowanda@outlook.com.br','WP253581','113 414 182-60','950, Bela Vista, S�o Paulo SP')

insert into clientes
(nome,email,senha,cpf,endereco)
values('Leandro Borba','leandroBorba89@gmail.com','LALILULELO123456','931 546 513-30','5863, Boa Vista, Osasco SP')

select clientes from mega_flores


use master
drop database mega_flores