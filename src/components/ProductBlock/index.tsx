import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  margin-bottom: 12rem;
  border-radius: 1rem;
  transition: all .3s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: rgba(129, 129, 129, .2);
    transform: translateY(-1rem);
  }
`;

const ImageBox = styled.div``;

const Img = styled.img`
  width: 22rem;
  height: 22rem;
  object-fit: contain;
`;

const H3 = styled.h3`
  margin-bottom: 2rem;
  color: ${({theme}) => theme.title};
  font-size: 2.4rem;
  letter-spacing: 1.4px;
`;

const H4 = styled.h4`
  color: ${({theme}) => theme.links};
  font-family: 'Helvetica Neue Light';
  font-size: 1.8rem;
  letter-spacing: 1.2px;
  font-weight: 300;
  transition: all .3s;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1.8rem;
`;

const Price = styled.div`
  color: ${({theme}) => theme.links};
  font-family: 'Helvetica Neue Medium';
  font-weight: bold;
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  line-height: 2.7rem;
  transition: all .3s;

  span {
    color: ${({theme}) => theme.links};
    opacity: 0.5;
    transition: all .3s;
    margin-left: -.2rem;
  }
`;

const Button = styled.button`
  color: ${({theme}) => theme.buttonText};
  font-family: 'Helvetica Neue Medium';
  letter-spacing: 1.2px;
  border: 2px solid #fbb040;
  transition: all .3s;

  &:hover {
    background-color: #fbb040;
  }

  svg {
    margin-right: 7px;
  }

  span {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const TextBox = styled.div`
  height: 12rem;
`;

const ProductBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 9rem;
  margin-top: 5rem;
  padding: 0 1.2rem;
`;

const ProductBlock = ({id, title, imageUrl, description, price}) => {
    return (
        <Product>
            <ImageBox>
                <Link to={`/items/${id}`}>
                    <Img
                        src={imageUrl}
                        alt="product"
                    />
                </Link>
            </ImageBox>
            <Info>
                <TextBox>
                    <H3>{title}</H3>
                    <H4>{description}</H4>
                </TextBox>
                <ProductBottom>
                    <Price>{price} <span>₽</span></Price>
                    <Button
                        //onClick={() => onClickAdd()}
                        className="button button--outline button--add"
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Выбрать</span>
                    </Button>
                </ProductBottom>
            </Info>
        </Product>
    );
};

export default ProductBlock;