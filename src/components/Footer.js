import { Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img className="footer-logo" src="logo.png" alt="Logo Company" />
        <Grid className="footer-introduce">
          <p className="text-introduce">
            Cillum occaecat deserunt fugiat elit aute ea culpa Lorem pariatur.
            Aliquip et et ipsum fugiat esse anim tempor ea Lorem irure commodo
            in. Et fugiat ea enim et veniam magna ullamco amet velit irure.
            Laborum nostrud sunt elit occaecat mollit ipsum minim in eu irure
            anim qui. Ea in sit tempor et est laborum consequat fugiat pariatur
            ut nisi eiusmod. Velit duis fugiat et enim fugiat irure labore ex
            aute quis sunt. Voluptate aliqua culpa anim eiusmod aute aute ad eu.
            Occaecat ullamco minim adipisicing nostrud eiusmod ut eiusmod.
            Fugiat magna culpa dolor incididunt do magna pariatur mollit.
          </p>
        </Grid>
        <Grid className="footer-info">
          <p className="footer-name">
            CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ SMARTVINA
          </p>
          <p className="footer-address">
            920 Võ Nguyên Giáp, Phường Hiệp Phú, TP. Thủ Đức, TP.HCM
          </p>
          <p className="footer-phone">Điện thoại: (+84) 372 75 7777</p>
          <p className="footer-email">Email: smartvina.hcm@gmail.com</p>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
