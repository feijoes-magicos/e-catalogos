import { useEffect, useRef, useState } from "react";
import "./App.css";

import arrow from "./assets/arrow.svg";
import whiteArrow from "./assets/whiteArrow.png";
import seek from "./assets/seek.svg";
import info from "./assets/info.svg";
import shopCart from "./assets/shopCart.svg";
import sweep from "./assets/sweep.png";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";
import equal from "./assets/equal.svg";
import InfoModal from "./components/infoModal";
import SeekModal from "./components/seekModal";

interface photos {
  id: number;
  order: number;
  path: string;
}

interface model {
  id: number;
  size: string;
  stock: number;
  open_grid: boolean;
  min_quantity: number;
}
interface pack extends model {
  quantia: number;
}

interface Packs {
  packs: Array<pack>;
  total: number;
  id: number;
  preco: number;
}

export interface product {
  id: string;
  name: string;
  reference: string;
  gender: string;
  category: string;
  subcategory: string | null;
  prompt_delivery: boolean;
  skus: Array<model>;
  brand: string;
  images: Array<photos>;
  colors: string[];
  companies: { key: number };
  price: number;
}

const ordemTamanhos = ["PP", "P", "M", "G", "GG"];
const fetchProducts = async () => {
  return await fetch("http://localhost:8000/products").then((resposta) =>
    resposta.json(),
  );
};

const awaitFetchProducts = async () => {
  return await fetchProducts();
};

function App() {
  const [products, setProducts] = useState<null | Array<product>>(null);

  const [cursor, setCursor] = useState<number>(0);
  const [cursorPhoto, setCursorPhoto] = useState<number>(0);
  const [skus, setSkus] = useState<number>(0);
  const [packs, setPacks] = useState<Packs[]>();

  const [sweepPackTemplate, setSweepPackTemplate] = useState(false);

  const [infoModal, setInfoModal] = useState(false);
  const [seekModal, setSeekModal] = useState(false);

  const [categorias, setCategorias] = useState<Array<string>>();

  const joyrideRef = useRef(null);

  useEffect(() => {
    if (joyrideRef) {
      joyrideRef.current.scrollLeft = joyrideRef.current.offsetWidth * cursor;
    }
  }, [cursor]);

  useEffect(() => {
    awaitFetchProducts().then((dados) => {
      if (Array.isArray(dados)) {
        setProducts(dados);
        setPacks(
          dados
            .map((produto: product) => {
              const skusPacking = produto.skus.map((skus) => {
                return { ...skus, quantia: 0 };
              });
              return { packs: skusPacking, preco: produto.price };
            })
            .map((produtos, index: number): Packs => {
              const packPersonalizado = {
                packs: produtos.packs.sort(
                  (a, b) =>
                    ordemTamanhos.indexOf(a.size) -
                    ordemTamanhos.indexOf(b.size),
                ),
                total: 0,
                id: index,
                preco: produtos.preco,
              };
              return packPersonalizado;
            }),
        );
        setCategorias([
          ...new Set(
            dados.map((produto: product) => {
              return produto.category;
            }),
          ),
        ]);
      }
    });
  }, []);

  return (
    <div className="screen">
      {seekModal && products && (
        <SeekModal
          isOpen={seekModal}
          cursorState={(x: number) => {
            setCursor(x);
          }}
          state={() => {
            setSeekModal(!seekModal);
          }}
          lista={products}
        />
      )}
      {infoModal && products && (
        <InfoModal
          info={{
            genero: products[cursor].gender,
            nomeProduto: products[cursor].name,
            referencia: products[cursor].reference,
            categoria: products[cursor].category,
            marca: products[cursor].brand,
          }}
          isOpen={infoModal}
          state={() => {
            setInfoModal(false);
          }}
        />
      )}
      <header className="cabecalho">
        <div className="containerCabecalho">
          <div
            className="botaoCategoria invertido"
            onClick={() => {
              if (products && categorias) {
                const categoriaAtual = products[cursor].category;
                const indiceCategoriaAtual = categorias.indexOf(categoriaAtual);
                if (indiceCategoriaAtual === 0) {
                  for (const [index, produto] of products.entries()) {
                    if (produto.category == categorias[categorias.length - 1]) {
                      setCursor(index);
                      break;
                    }
                  }
                } else {
                  for (const [index, produto] of products.entries()) {
                    if (
                      produto.category == categorias[indiceCategoriaAtual - 1]
                    ) {
                      setCursor(index);
                      break;
                    }
                  }
                }
              }
            }}
          >
            <img
              src={whiteArrow}
              style={{ aspectRatio: "inherit", height: "50%" }}
            />
          </div>
          <div className="caixaCategoria">
            <p style={{ color: "#809caa", fontWeight: "bold" }}>
              {products ? products[cursor].category : "..."}
            </p>
          </div>
          <div
            className="botaoCategoria"
            onClick={() => {
              if (products && categorias) {
                const categoriaAtual = products[cursor].category;
                const indiceCategoriaAtual = categorias.indexOf(categoriaAtual);
                if (indiceCategoriaAtual === categorias.length - 1) {
                  setCursor(0);
                } else {
                  for (const [index, produto] of products.entries()) {
                    if (
                      produto.category == categorias[indiceCategoriaAtual + 1]
                    ) {
                      setCursor(index);
                      break;
                    }
                  }
                }
              }
            }}
          >
            <img
              src={whiteArrow}
              style={{ aspectRatio: "inherit", height: "50%" }}
            />
          </div>
        </div>
      </header>
      <div className="vitrine">
        <div
          className="botao"
          style={{ left: 25 }}
          onClick={() => {
            setCursorPhoto(0);
            if (cursor > 0) {
              setCursor(cursor - 1);
            } else {
              setCursor(products?.length - 1);
            }
          }}
        >
          <img src={arrow} />
        </div>
        <div className="carrossel" ref={joyrideRef}>
          {products &&
            products.map((produto, index) => {
              const paths = produto.images.map((imagem) => imagem.path);
              return (
                <div className="item" style={{ height: "100%" }} key={index}>
                  <img
                    className="imagemDemonstrativa"
                    src={paths[cursorPhoto]}
                    key={index}
                  />
                </div>
              );
            })}
        </div>
        <div
          className="botao invertido"
          style={{ right: 25 }}
          onClick={() => {
            setCursorPhoto(0);
            if (cursor < products?.length - 1) {
              setCursor(cursor + 1);
            } else {
              setCursor(0);
            }
          }}
        >
          <img src={arrow} />
        </div>
      </div>
      <div className="rodape">
        <div className="containerFuncionalidades">
          <div className="altoRodape">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setInfoModal(!infoModal);
              }}
            >
              <div className="info">
                <img src={info} className="icone" />
              </div>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setSeekModal(!seekModal);
              }}
            >
              <div className="seek">
                <img src={seek} className="icone" />
              </div>
            </a>

            <div className="fotosInfo">
              {products
                ? products[cursor].images.map((image) => {
                    return (
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setCursorPhoto(image.order - 1);
                        }}
                        key={image.id}
                      >
                        <div
                          className="imagemMiniatura"
                          style={{ width: 40, height: 40 }}
                        >
                          <img
                            src={image.path}
                            style={{ height: "100%", aspectRatio: "inherit" }}
                          />
                        </div>
                      </a>
                    );
                  })
                : "..."}
            </div>
            <div
              className="shopCart"
              onClick={() => {
                setCursor(cursor + 1);
              }}
            >
              <img src={shopCart} className="icone" />
            </div>
          </div>
          <p style={{ color: "#888888", fontSize: 10 }}>preços ilustrativos</p>
          <hr style={{ width: "90%", color: "#CCD0CF" }} />
          <div
            style={{
              display: "flex",
              height: "fit-content",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <div
              className="sweep"
              onClick={() => {
                setSweepPackTemplate(!sweepPackTemplate);
              }}
            >
              <img src={sweep} className="icone" />
            </div>
            <p style={{ color: "#809caa" }}>
              Ref:{" "}
              <span style={{ color: "black" }}>
                {products ? products[cursor].reference : "..."}
              </span>
            </p>
            <p style={{ color: "#809caa" }}>
              R$:{" "}
              <span style={{ color: "black" }}>
                {products ? products[cursor].price.toFixed(2) : "..."}
              </span>
            </p>
          </div>
        </div>
        <div className={sweepPackTemplate ? "rodapePackInverse" : "rodapePack"}>
          <div className="precoPackContainer">
            <div className="comanda">
              <p style={{ fontWeight: "bold", fontSize: 12 }}>Atual</p>
              <p>
                R$:
                {packs
                  ? (packs[cursor].total * packs[cursor].preco).toFixed(2)
                  : (0).toFixed(2)}
              </p>
            </div>
            <a
              href=""
              className="minus"
              onClick={(e) => {
                e.preventDefault();
                if (packs && packs[cursor].total > 0) {
                  setPacks(
                    packs.map((pack) => {
                      if (pack.id === cursor) {
                        return {
                          ...pack,
                          packs: pack.packs.map((modelo, index) => {
                            if (index === skus) {
                              return {
                                ...modelo,
                                quantia:
                                  modelo.quantia > 0 ? modelo.quantia - 1 : 0,
                              };
                            }
                            return modelo;
                          }),
                          total:
                            pack.packs[skus].quantia > 0
                              ? pack.total - 1
                              : pack.total,
                        };
                      }
                      return pack;
                    }),
                  );
                }
              }}
            >
              <div>
                <img src={minus} className="icone" />
              </div>
            </a>
            <div className="counter">
              <h2>{packs ? packs[cursor].total : "..."}</h2>
            </div>
            <a
              href=""
              className="plus"
              onClick={(e) => {
                e.preventDefault();
                if (packs) {
                  setPacks(
                    packs.map((pack) => {
                      if (pack.id === cursor) {
                        return {
                          ...pack,
                          packs: pack.packs.map((modelo, index) => {
                            if (index === skus) {
                              return {
                                ...modelo,
                                quantia: (modelo.quantia ?? 0) + 1,
                              };
                            }
                            return modelo;
                          }),
                          total: pack.total + 1,
                        };
                      }
                      return pack;
                    }),
                  );
                }
              }}
            >
              <div>
                <img src={plus} className="icone" />
              </div>
            </a>
            <div className="comanda">
              <p style={{ fontWeight: "bold", fontSize: 12 }}>Acumulado</p>
              <p>
                R$:
                {packs
                  ? packs.reduce(
                      (acc, packs) => packs.total * packs.preco + acc,
                      0,
                    )
                  : (0).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="bottomContainer">
            <div className="montaPack">
              {packs &&
                packs[cursor].packs.map((pack, index) => (
                  <div key={index} className="visor">
                    {pack.open_grid ? (
                      <a
                        className="modelo"
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setSkus(index);
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="visor">
                          <p>{pack.quantia}</p>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{
                              position: "absolute",
                              top: "-50%",
                              right: "-25%",
                            }}
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="11"
                              fill="#809CAB"
                              stroke="#fff"
                              strokeWidth="1.2"
                            ></circle>
                            <text
                              x="50%"
                              y="50%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fill="#ffffff"
                              fontSize="12"
                            >
                              {pack.size}
                            </text>
                          </svg>
                        </div>
                      </a>
                    ) : (
                      <div className="visor">
                        <p>{pack.min_quantity}</p>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{
                            position: "absolute",
                            top: "-50%",
                            right: "-25%",
                          }}
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11"
                            fill="#809CAB"
                            stroke="#fff"
                            strokeWidth="1.2"
                          ></circle>
                          <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="12"
                          >
                            {pack.size}
                          </text>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              {packs && (
                <>
                  <img src={equal} />
                  <div className="visor">
                    <p>
                      {packs[cursor].packs.reduce(
                        (acc, vlr) => vlr.min_quantity + acc,
                        0,
                      ) * packs[cursor].total}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
