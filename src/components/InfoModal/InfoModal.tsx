import { Props } from "./types";
import styles from "./infoModal.module.css"

import whiteCross from "@assets/cruz_branca.png";

const InfoModal = (props: Props) => {
		return (
			<div
				className= {styles.modal}
				onClick={() => {
					props.setOpenStatus();
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
								props.setOpenStatus();
							}}
							style={{ position: "absolute", right: "2%", top: "4%" }}
						>
							<img src={whiteCross} />
						</a>
					</div>
					<h3 style={{ fontSize: 14, alignSelf: "center" }}>Cores</h3>
					<div className={styles.body_infomodal}>
						<p>
							Nome do Produto: {props.info ? props.info.name : "..."}
						</p>
						<p>Referencia: {props.info ? props.info.reference : "..."}</p>
						<p>Marca: {props.info ? props.info.reference : "..."}</p>
						<p>Categoria: {props.info ? props.info.categories : "..."}</p>
						<p>Genero: {props.info ? props.info.gender : "..."}</p>
					</div>
				</div>
			</div>
		);
};

export default InfoModal;
