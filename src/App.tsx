import "./App.css";

import { Packs, Product } from "./RNTypes";

import { useEffect, useMemo, useRef, useState } from "react";

import Carousel from "./components/Carousel";
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import PackInfo from "./components/PackInfo";
import SeekModal from "./components/SeekModal";
import PriceControlPanel from "./components/PriceControlPanel/PriceControlPanel";

const sizeOrder = ["PP", "P", "M", "G", "GG"];

const fetchProducts = async () => {
  const data = await fetch("http://localhost:8000/products");
  return data.json();
};

function App() {
  const [products, setProducts] = useState<Array<Product>>([]);

  const [cursor, setCursor] = useState<number>(0);
  const [photoCursor, setPhotoCursor] = useState<number>(0);
  const [packs, setPacks] = useState<Packs[]>([]);

  const [reversedPack, setReversedPack] = useState<boolean>(false);

  const [infoModal, setInfoModal] = useState(false);
  const [seekModal, setSeekModal] = useState(false);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.categories))];
  }, [products]);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      if (Array.isArray(data)) {
        setProducts(data);
        setPacks(
          data
            .map((product: Product) => {
              const skusPacking = product.skus.map((skus) => {
                return { ...skus, quantity: 0 };
              });
              return { packs: skusPacking, price: product.price };
            })
            .map((products, indice): Packs => {
              const incrementedPack = {
                packs: products.packs.sort(
                  (a, b) =>
                    sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size),
                ),
                total: 0,
                id: indice,
                price: products.price,
              };
              return incrementedPack;
            }),
        );
      }
    });
  }, []);

  return (
    <div className="screen">
      {products[0] && seekModal && (
        <SeekModal
          cursorState={(x: number) => {
            setCursor(x);
          }}
          setOpenStatus={() => {
            setSeekModal(!seekModal);
          }}
          list={products}
        />
      )}
      {products[0] && infoModal && (
        <InfoModal
          info={{
            ...products[cursor],
          }}
          setOpenStatus={() => {
            setInfoModal(!infoModal);
          }}
        />
      )}
      {categories && products[0] && (
        <>
          <Header
            currentCategory={products[cursor].categories}
            products={products}
            categories={categories}
            setCursor={setCursor}
          />
          <Carousel
            carouselRef={carouselRef}
            products={products}
            cursorHandler={{ cursor, setCursor }}
            photoCursorHandler={{ photoCursor, setPhotoCursor }}
          />
        </>
      )}

      {packs && products[0] && (
        <div className="rodape">
          <ControlPanel
            products={products}
            setPhotoCursor={setPhotoCursor}
            cursor={cursor}
            reversedPackHandler={{ reversedPack, setReversedPack }}
            seekModalHandler={{ seekModal, setSeekModal }}
            infoModalHandler={{
              infoModal,
              setInfoModal,
            }}
          />
          <div className={reversedPack ? "packInfo" : "packInfo_reversed"}>
            <PriceControlPanel
              cursor={cursor}
              packsHandler={{ packs, setPacks }}
            />
            <PackInfo
              packs={packs}
              reversedPack={reversedPack}
              cursor={cursor}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
