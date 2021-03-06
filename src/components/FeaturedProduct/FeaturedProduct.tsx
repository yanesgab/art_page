import { FC } from "react";
import { Product } from "../../types";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

type FeaturedProductProps = {
  product: Product;
  otherProducts: Product[];
};

export const FeaturedProduct: FC<FeaturedProductProps> = ({
  product,
  otherProducts,
}) => {
  const handleAddCart = () => {};

  // TODO: Complete this
  const productsImages = otherProducts.map((product) => product.image);
  console.log(
    "🚀 ~ file: FeaturedProduct.tsx ~ line 15 ~ productsImages",
    productsImages
  );
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TitleContainer>
            <Title>{product.name}</Title>
            <Button onClick={() => handleAddCart()}>ADD TO CART</Button>
          </TitleContainer>
          <Image src={product.image.src} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle>About the {product.name}</SubTitle>
          <CategoryTitle>
            {product.category[0].toUpperCase() + product.category.substring(1)}
          </CategoryTitle>
          <div>{product.details.description}</div>
        </Grid>
        <Grid item xs={4}>
          <OtherItemsContainer>
            <h2>People also buy</h2>
            <h2>Details</h2>
            <div>
              Size: {product.details.dimensions.width} x{" "}
              {product.details.dimensions.height} pixel
            </div>
            <div>Size: {product.details.size / 1000} mb</div>
          </OtherItemsContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 0;
  border-bottom: 4px solid #e4e4e4;
`;

const OtherItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
`;

const CategoryTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #656565;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  left: 1115px;
  top: 182px;
  background: #000000;
  color: #ffffff;
  font-style: normal;
  font-weight: 540;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.07em;
  cursor: pointer;
`;
