import { Dispatch, SetStateAction } from "react";
import styles from "../controlPanel.module.css";

import imageUndefined from "@assets/image-undefined.png";

type Props = {
	images: Array<{ order: number; id: number; path: string }>;
	setPhotoCursor: Dispatch<SetStateAction<number>>;
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
	const target = e.currentTarget;
	target.onerror = null;
	target.src = imageUndefined;
};

const ImageSelector = (props: Props) => {
	const { images, setPhotoCursor } = props;
	return (
		<>
			{images.map((image) => {
				return (
					<a
						onClick={(e) => {
							e.preventDefault();
							setPhotoCursor(image.order - 1);
						}}
						key={image.id}
					>
						<div className={styles.mini_pic} style={{ width: 40, height: 40 }}>
							<img
								src={image.path}
								style={{ height: "100%", aspectRatio: "inherit" }}
								onError={handleImageError}
							/>
						</div>
					</a>
				);
			})}
		</>
	);
};
export default ImageSelector;
