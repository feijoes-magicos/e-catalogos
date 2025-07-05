import { CategoryChangeHandler, Props } from "./types";
import {
  Button,
  HeaderDisplay,
  HeaderContainer,
  CategoryBox,
  FunctionButton,
} from "./Header.styles";

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
    <HeaderDisplay>
      <HeaderContainer>
        <Button>
          <img
            src={backwardButton}
            style={{ aspectRatio: "inherit", height: "50%" }}
          />
        </Button>
        <Button
          $side="left"
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
        </Button>
        <CategoryBox>
          <p style={{ color: "#809caa", fontWeight: "bold" }}>
            {products ? currentCategory : "..."}
          </p>
        </CategoryBox>
        <Button
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
        </Button>
        <FunctionButton as="span">F</FunctionButton>
      </HeaderContainer>
    </HeaderDisplay>
  );
};

export default Header;
