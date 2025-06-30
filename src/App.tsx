import "./App.css";

import { Packs, Produto } from "./RNTypes";

import { useEffect, useRef, useState } from "react";

import Carousel from "./components/Carousel/";
import ControlPanel from "./components/ControlPanel/";
import Header from "./components/Header/";
import InfoModal from "./components/InfoModal/";
import PackInfo from "./components/PackInfo/";
import SeekModal from "./components/SeekModal/";

const ordemTamanhos = ["PP", "P", "M", "G", "GG"];

const buscarProdutos = async () => {
	const dados = await fetch("http://localhost:8000/products");
	return dados.json();
};

const esperarBuscarProdutos = async () => {
	return await buscarProdutos();
};

function App() {
	const [produtos, setProdutos] = useState<null | Array<Produto>>(null);

	const [cursor, setCursor] = useState<number>(0);
	const [cursorFoto, setCursorFoto] = useState<number>(0);
	const [skus, setSkus] = useState<number>(0);
	const [packs, setPacks] = useState<Packs[]>();

	const [packInvertido, setPackInvertido] = useState(false);

	const [modalInformacoes, setModalInformacoes] = useState(false);
	const [modalPesquisa, setModalPesquisa] = useState(false);

	const [categorias, setCategorias] = useState<Array<string>>();

	const refCarrossel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		esperarBuscarProdutos().then((dados) => {
			if (Array.isArray(dados)) {
				setProdutos(dados);
				setPacks(
					dados
						.map((produto: Produto) => {
							const skusPacking = produto.skus.map((skus) => {
								return { ...skus, quantia: 0 };
							});
							return { packs: skusPacking, preco: produto.price };
						})
						.map((produtos, indice): Packs => {
							const packPersonalizado = {
								packs: produtos.packs.sort(
									(a, b) =>
										ordemTamanhos.indexOf(a.size) -
										ordemTamanhos.indexOf(b.size),
								),
								total: 0,
								id: indice,
								preco: produtos.preco,
							};
							return packPersonalizado;
						}),
				);
				setCategorias([
					...new Set(
						dados.map((produto: Produto) => {
							return produto.category;
						}),
					),
				]);
			}
		});
	}, []);

	return (
		<div className="screen">
			{produtos && modalPesquisa && (
				<SeekModal
					cursorState={(x: number) => {
						setCursor(x);
					}}
					setOpenStatus={() => {
						setModalPesquisa(!modalPesquisa);
					}}
					lista={produtos}
				/>
			)}
			{produtos && modalInformacoes && (
				<InfoModal
					info={{
						genero: produtos[cursor].gender,
						nomeProduto: produtos[cursor].name,
						referencia: produtos[cursor].reference,
						categoria: produtos[cursor].category,
						marca: produtos[cursor].brand,
					}}
					viewabilityHandler={{
						isOpen: modalInformacoes,
						setOpenStatus: () => {
							setModalInformacoes(!modalInformacoes);
						},
					}}
				/>
			)}
			{categorias && produtos && (
				<>
					<Header
						categoriaAtual={produtos[cursor].category}
						produtos={produtos}
						categorias={categorias}
						setCursor={setCursor}
					/>
					<Carousel
						refCarrossel={refCarrossel}
						produtos={produtos}
						cursorHandler={{ cursor, setCursor }}
						cursorFotoHandler={{ cursorFoto, setCursorFoto }}
					/>
				</>
			)}
			{packs && produtos && (
				<div className="rodape">
					<ControlPanel
						produtos={produtos}
						setCursorFoto={setCursorFoto}
						cursor={cursor}
						packInvertidoHandler={{ packInvertido, setPackInvertido }}
						modalPesquisaHandler={{ modalPesquisa, setModalPesquisa }}
						modalInformacoesHandler={{ modalInformacoes, setModalInformacoes }}
					/>
					<PackInfo
						skusHandler={{ skus, setSkus }}
						packsHandler={{ packs, setPacks }}
						packInvertido={packInvertido}
						cursor={cursor}
					/>
				</div>
			)}
		</div>
	);
}
export default App;
