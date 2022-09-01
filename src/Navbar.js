import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Redux toolkit shopping cart
          </MDBNavbarBrand>
          <MDBNavbarLink>
            <a href="h" className="mx-3">
              <MDBIcon fas icon="shopping-cart" size="lg" color="white">
                <MDBBadge
                  pill
                  color="danger"
                  notification
                  style={{ fontSize: "12px" }}
                >
                  {totalCount}
                </MDBBadge>
              </MDBIcon>
            </a>
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
