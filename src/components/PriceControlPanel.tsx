import styles from "../packInfo.module.css"

type Props = {};

const PriceControlPanel = (props: Props) => {
	return (
		<div className={styles.packPrice_container}>
			<div className={styles.tab}>
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
				className={styles.icon}
				onClick={(e) => {
					e.preventDefault();
					if (packs && packs[cursor].total > 0) {
						setPacks(
							packs.map((pack) => {
								if (pack.id === cursor) {
									return {
										...pack,
										packs: pack.packs.map((modelo, indice) => {
											if (indice === skus) {
												return {
													...modelo,
													quantia: modelo.quantia > 0 ? modelo.quantia - 1 : 0,
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
					<img src={minus} />
				</div>
			</a>
			<div className={styles.icon}>
				<h2>{packs ? packs[cursor].total : "..."}</h2>
			</div>
			<a
				href=""
				className={styles.icon}
				onClick={(e) => {
					e.preventDefault();
					if (packs) {
						setPacks(
							packs.map((pack) => {
								if (pack.id === cursor) {
									return {
										...pack,
										packs: pack.packs.map((modelo, indice) => {
											if (indice === skus) {
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
					<img src={plus} />
				</div>
			</a>
			<div className={styles.tab}>
				<p style={{ fontWeight: "bold", fontSize: 12 }}>Acumulado</p>
				<p>
					R$:
					{packs
						? packs.reduce((acc, packs) => packs.total * packs.preco + acc, 0)
						: (0).toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default PriceControlPanel;
