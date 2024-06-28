import React from 'react';


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

const Product = ({ product }) => {
  return (
<MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={product.img}
              position="top"
              alt="Canapé 6 places"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <p className="text-muted mb-4">{product.type}</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Dimensions</span>
                  <span>200 x 500 x 150 cm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Prix</span>
                  <span>{product.price} €</span>
                </div>
                
              </div>
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  );
};

export default Product;


/*<div>*/
{/* affichage des props */}/*
<p>Name: {product.name}</p>
<p>Type: {product.type}</p>
<p>Price: {product.price}</p>
</div>
*/