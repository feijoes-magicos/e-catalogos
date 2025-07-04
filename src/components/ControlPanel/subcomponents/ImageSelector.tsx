import { Dispatch, SetStateAction } from "react";

import imageUndefined from "@assets/image-undefined.png";
import { MiniPic } from "../ControlPanel.styles";

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
						<MiniPic>
							<img
								src={image.path}
								style={{ height: "100%", aspectRatio: "inherit" }}
								onError={handleImageError}
							/>
						</MiniPic>
					</a>
				);
			})}
		</>
	);
};
export default ImageSelector;
