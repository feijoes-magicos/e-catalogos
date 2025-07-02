import { Product } from "src/RNTypes";
import styles from "../carousel.module.css";

import imageUndefined from "@assets/image-undefined.png";

type Props = {
	photoCursor: number;
	products: Array<Product>
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
	const target = e.currentTarget;
	target.onerror = null;
	target.src = imageUndefined;
};

const CarouselImages = (props: Props) => {
	const { photoCursor, products } = props;
	return (
		<>
			{products.map((product, index) => {
				const paths = product.images.map((imagem) => imagem.path);
				return (
					<div className={styles.item} key={index}>
						<img
							className={styles.display_image}
							src={paths[photoCursor]}
							onError={handleImageError}
						/>
					</div>
				);
			})}
		</>
	);
};
export default CarouselImages;
