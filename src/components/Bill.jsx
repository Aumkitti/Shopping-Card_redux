import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import qrcode from 'qrcode'
import generatePayload from 'promptpay-qr'

const Bill = () => {
    const mobileNumber = "098-865-0599"
    const IdCardNumber = "0-0000-00000-00-0"
    const [svg, setSvg] = useState("");
    const carts = useSelector((state) => state.carts)
    const subtotal = carts.reduce((total,product) => total + product.quantity * product.price, 0);
    const shippingCost = (subtotal) => {
        if(subtotal > 0) return subtotal + 35
    };


    useEffect(()=>{
        const total = shippingCost(subtotal);
        generateQR(total);
    },[subtotal])

    const generateQR = (amount) => {
        const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber

        // Convert to SVG QR Code
        const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
        qrcode.toString(payload, options, (err, svg) => {
            if (err) return console.log(err);
            setSvg(svg);
        })
    }
    

    const handleCheckOut = (()=> {
        Swal.fire({
            title: "<strong>PromptPay Payment</strong>",
            icon: "info",
            html: `
             <img src="data:image/svg+xml;utf8, ${encodeURIComponent(svg)}"/>
             Please give me money
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i> Close
            `,
            cancelButtonAriaLabel: "Thumbs down"
          });
    })
  return (
    <div className='justify-between mb-auto w-auto rounded-lg bg-white p-5 shadow-md md:mt-0 ' >
        <div className="mb-2 flex justify-between">
            <p className="text-black">
                Subtotal
            </p>
            <p className="text-black">
                {subtotal}
            </p>
        </div>
        <div className="mb-2 flex justify-between">
            <p className="text-black">
                Shipping
            </p>
            <p className="text-black">
                {subtotal>0?"35฿" : 0}
            </p>
        </div>
        <hr className="my-4" />
        <div className="flext justity-between">
            <p className="text-lg font-bold">
                total
                </p>
            <div>
                <p className="mb-1 text-lg font-bold">
                    {subtotal >0?shippingCost(subtotal):0}
                </p>
                <p className="text-sm text-black">including VAT</p>
            </div>
            <button className="mt-6 w-full rounded-md bg-black py-1 5 font-md text-white hover:bg-gray-400" onClick={handleCheckOut}>
                Check out
            </button>

        </div>
    </div>
  )
}

export default Bill