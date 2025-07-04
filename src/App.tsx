import "./App.css";
import { Screen, Footer, PackDisplay } from "./App.styles";
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
	const data = await fetch(import.meta.env.VITE_PRODUCTS_URL);
	if (!data.ok) {
		return new Error(`Falha na requisição por parte da rede:${data.status}`);
	}
	return data.json();
};

const App = () => {
	const [maybeProducts, setMaybeProducts] = useState<Array<Product> | Error>(
		[],
	);
	const categories = useMemo(() => {
		if (Array.isArray(maybeProducts) && maybeProducts[0]) {
			return [...new Set(maybeProducts.map((product) => product.categories))];
		}
		return [];
	}, [maybeProducts]);

	const [cursor, setCursor] = useState<number>(0);
	const [photoCursor, setPhotoCursor] = useState<number>(0);
	const [packs, setPacks] = useState<Packs[]>([]);

	const [reversedPack, setReversedPack] = useState<boolean>(false);

	const [infoModal, setInfoModal] = useState(false);
	const [seekModal, setSeekModal] = useState(false);

	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetchProducts()
			.then((data) => {
				if (Array.isArray(data)) {
					setMaybeProducts(data);
				}
			})
			.catch((e) => {
				setMaybeProducts(e);
			});
	}, []);

	useEffect(() => {
		if (maybeProducts instanceof Error || !maybeProducts[0]) {
			return;
		}
		const incrementedPacks = maybeProducts.map((product, indice) => {
			return {
				packs: product.skus.sort(
					(a, b) => sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size),
				),
				total: 0,
				id: indice,
				price: product.skus[0].price,
			};
		});
		setPacks(incrementedPacks);
	}, [maybeProducts]);

	useEffect(() => {
		setPhotoCursor(0);
	}, [cursor]);

	if (maybeProducts instanceof Error) {
		return (
			<Screen>
				<p style={{ width: "80%", textAlign: "center" }}>
					Algo deu terrívelmente errado e alguém com toda certeza vai ter muita
					dor de cabeça com isso :p
				</p>
				<h3 style={{ color: "red" }}>{maybeProducts.message}</h3>
			</Screen>
		);
	}

	if ((!maybeProducts[0] || !packs[0]) && !(maybeProducts instanceof Error)) {
		return (
			<Screen>
				<p>Carregando...</p>
			</Screen>
		);
	}

	return (
		<Screen>
			{seekModal && (
				<SeekModal
					cursorState={setCursor}
					setOpenStatus={() => {
						setSeekModal(!seekModal);
					}}
					list={maybeProducts}
				/>
			)}
			{infoModal && (
				<InfoModal
					info={{
						...maybeProducts[cursor],
					}}
					setOpenStatus={() => {
						setInfoModal(!infoModal);
					}}
				/>
			)}
			{categories && (
				<>
					<Header
						currentCategory={maybeProducts[cursor].categories}
						products={maybeProducts}
						categories={categories}
						setCursor={setCursor}
					/>
					<Carousel
						carouselRef={carouselRef}
						products={maybeProducts}
						cursorHandler={{ cursor, setCursor }}
						photoCursor={photoCursor}
					/>
				</>
			)}

			{packs && (
				<Footer>
					<ControlPanel
						products={maybeProducts}
						setPhotoCursor={setPhotoCursor}
						cursor={cursor}
						reversedPackHandler={{ reversedPack, setReversedPack }}
						seekModalHandler={{ seekModal, setSeekModal }}
						infoModalHandler={{
							infoModal,
							setInfoModal,
						}}
					/>
					<PackDisplay $reversed={reversedPack}>
						<PriceControlPanel
							cursor={cursor}
							packsHandler={{ packs, setPacks }}
						/>
						<PackInfo
							packs={packs}
							reversedPack={reversedPack}
							cursor={cursor}
						/>
					</PackDisplay>
				</Footer>
			)}
		</Screen>
	);
};
export default App;
