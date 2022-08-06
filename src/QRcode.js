import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";

function QrCode({ texto }) {

    useEffect(() => {
        console.log(texto);
    });
    return (
        <QRCode value={texto}></QRCode>
    )
}
export default QrCode;