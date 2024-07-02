
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
              src={product.picturl}
              position="top"
              alt="Canapé 6 places"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <p className="text-muted mb-4">{product.category}</p>
              </div>
              <div>
              <p className='text-muted mb-4'>Etat : {product.status} • Couleur : {product.color} • Matière : {product.material}</p>
                <p>{product.description}</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Dimensions : {product.width} x {product.height} x {product.depth} cm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Prix : {product.price} €</span>
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
