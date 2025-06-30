import { Props } from "./types";
import styles from "./infoModal.module.css"

import whiteCross from "@assets/cruz_branca.png";

const InfoModal = (props: Props) => {
		return (
			<div
				className= {styles.modal}
				onClick={() => {
					props.viewabilityHandler.setOpenStatus();
				}}
			>
				<div className={styles.window}>
					<div
						className={styles.header}
						style={{
						}}
					>
						<h2 style={{ color: "white" }}>Informações</h2>
						<a
							href=""
							onClick={(e) => {
								e.preventDefault();
								props.viewabilityHandler.setOpenStatus();
							}}
							style={{ position: "absolute", right: "2%", top: "4%" }}
						>
							<img src={whiteCross} />
						</a>
					</div>
					<h3 style={{ fontSize: 14, alignSelf: "center" }}>Cores</h3>
					<div className={styles.body_infomodal}>
						<p>
							Nome do Produto: {props.info ? props.info.nomeProduto : "..."}
						</p>
						<p>Referencia: {props.info ? props.info.referencia : "..."}</p>
						<p>Marca: {props.info ? props.info.marca : "..."}</p>
						<p>Categoria: {props.info ? props.info.categoria : "..."}</p>
						<p>Genero: {props.info ? props.info.genero : "..."}</p>
					</div>
				</div>
			</div>
		);
};

export default InfoModal;
