import { Grid } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src="logo.png" alt="Logo Company" />

      <Grid className="footer-info">
        <p className="footer-name">
          CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ SMARTVINA
        </p>
        <p className="footer-address">
          920/6 Võ Nguyên Giáp, Phường Hiệp Phú, TP. Thủ Đức, TP.HCM
        </p>
        <p className="footer-phone">Điện thoại: (+84) 372 75 7777</p>
        <p className="footer-email">Email: smartvina.hcm@gmail.com</p>
      </Grid>
    </div>
  );
}
