import { Props } from "./types";
import whiteCross from "@assets/cruz_branca.png";
import { BodyInfoModal, Header, Modal, Window } from "./InfoModal.styles";

const InfoModal = (props: Props) => {
	return (
		<Modal
			onClick={() => {
				props.setOpenStatus();
			}}
		>
			<Window>
				<Header>
					<h2 style={{ color: "white" }}>Informações</h2>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							props.setOpenStatus();
						}}
						style={{ position: "absolute", right: "2%", top: "4%" }}
					>
						<img src={whiteCross} />
					</a>
				</Header>
				<h3 style={{ fontSize: 14, alignSelf: "center" }}>Cores</h3>
				<BodyInfoModal>
					<p>
						Nome do Produto: {props.info ? props.info.name : "..."}
					</p>
					<p>Referencia: {props.info ? props.info.reference : "..."}</p>
					<p>Marca: {props.info ? props.info.reference : "..."}</p>
					<p>Categoria: {props.info ? props.info.categories : "..."}</p>
					<p>Genero: {props.info ? props.info.gender : "..."}</p>
				</BodyInfoModal>
			</Window>
		</Modal>
	);
};

export default InfoModal;
