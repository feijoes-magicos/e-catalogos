import { Product } from "src/RNTypes";

import imageUndefined from "@assets/image-undefined.png";
import { ImageDisplay, Item } from "../Carousel.styles";

type Props = {
	photoCursor: number;
	products: Array<Product>;
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
					<Item key={index}>
						<ImageDisplay
							src={paths[photoCursor]}
							onError={handleImageError}
						/>
					</Item>
				);
			})}
		</>
	);
};
export default CarouselImages;
