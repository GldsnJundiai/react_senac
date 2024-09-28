import React from "react";
import '../assets/css/components/cartao.css'; 
import biscoito from "../assets/img/biscrok.jpg";

const Produtos = () => {
    return (
      <main>
        <div className="container">
          <h2 className="titulo-pagina">Produtos para o cão</h2>
        </div>
        <section className="container flex flex--centro">
          <article className="cartao post">
            <h2 className="cartao__titulo"></h2>
            <p className="cartao__texto__titulo">
            Biscoito Pedigree Biscrok Multi para Cães Adultos
            </p>

            <p className="cartao__texto__descricao">
                <ul>
                    - Indicado para cães adultos; 
                    - Deliciosos biscoitos assados e crocantes;
                    - Com ômega 6 para pelos mais brilhantes;
                    - Com cálcio para o fortalecimento de ossos e dentes;
                    - Proteínas para o desenvolvimento muscular;
                    - Vitamina e mais sabor para seu cachorro;
                    - Sabor irresistível que seu cão vai adorar;
                    - Momentos de carinho e conexão com o seu cachorro;
                    - Disponível em embalagens de 500 g e 1 kg.
                </ul>
            </p>

            <img
            className="prod_cachorro"
            src={biscoito}
            alt="biscoito"
          />
          </article>
        </section>
      </main>
    );
  };

  export default Produtos;