import styles from "./header.module.css";
import { CategoryChangeHandler, Props } from "./types";

import whiteArrow from "@assets/whiteArrow.png";
import backwardButton from "@assets/backwards.png";

const handleCategoryChangeByVector = (params: CategoryChangeHandler) => {
	if (
		params.currentCategoryIndex === params.categories.length - 1 &&
		params.vector === "right"
	) {
		params.setCursor(0);
		return;
	}
	if (params.currentCategoryIndex === 0 && params.vector === "left") {
		for (const [index, product] of params.products.entries()) {
			if (
				product.categories == params.categories[params.categories.length - 1]
			) {
				params.setCursor(index);
				return;
			}
		}
	}
	const changeToIndex =
		params.vector === "left"
			? params.currentCategoryIndex - 1
			: params.currentCategoryIndex + 1;
	for (const [index, product] of params.products.entries()) {
		if (product.categories == params.categories[changeToIndex]) {
			params.setCursor(index);
			break;
		}
	}
};

const Header = (props: Props) => {
	const { currentCategory, products, categories } = props;
	const currentCategoryIndex = categories.indexOf(currentCategory);
	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<div className={`${styles.category_button}`}>
					<img
						src={backwardButton}
						style={{ aspectRatio: "inherit", height: "50%" }}
					/>
				</div>
				<div
					className={`${styles.category_button} invertido`}
					onClick={() => {
						handleCategoryChangeByVector({
							...props,
							vector: "left",
							currentCategoryIndex,
						});
					}}
				>
					<img
						src={whiteArrow}
						style={{ aspectRatio: "inherit", height: "50%" }}
					/>
				</div>
				<div className={styles.category_box}>
					<p style={{ color: "#809caa", fontWeight: "bold" }}>
						{products ? currentCategory : "..."}
					</p>
				</div>
				<div
					className={styles.category_button}
					onClick={() => {
						handleCategoryChangeByVector({
							...props,
							vector: "right",
							currentCategoryIndex,
						});
					}}
				>
					<img
						src={whiteArrow}
						style={{ aspectRatio: "inherit", height: "50%" }}
					/>
				</div>
				<span
					className={styles.category_button}
					style={{
						color: "#809caa",
						backgroundColor: "white",
						aspectRatio: 1,
						borderRadius: "50%",
						width: 25,
						height: 25,
						alignSelf: "center",
					}}
				>
					F
				</span>
			</div>
		</header>
	);
};

export default Header;
