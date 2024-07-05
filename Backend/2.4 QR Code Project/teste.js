import qr from "qr-image"
import fs from "fs"

var url = "www.google.com"

var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_google2.png'));
         