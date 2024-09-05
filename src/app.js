document.addEventListener("alpine:init", () => {
    Alpine.data("menu", () => ({
        items: [
            { id: 1, name: "Midnight", img: "1.jpg", price: 45000 },
            { id: 2, name: "Cocoa", img: "2.jpg", price: 19000 },
            { id: 3, name: "Americano", img: "3.jpg", price: 20000 },
            { id: 4, name: "Cap", img: "4.jpg", price: 18000 },
            { id: 5, name: "Caramel", img: "5.jpg", price: 25000 },
            { id: 6, name: "Mocha", img: "6.jpg", price: 40000 },
        ],
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            //jika belum ada / cart masih kosng
            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barang nya udh ada, cek apakah barang beda atau sama  dengan yang ada di cart
                this.items = this.items.map((item) => {
                    //jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        //jika barang sudah ada,tambah  quantity dan sub totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil items yang mau di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            //jika items lebih dari 1
            if (cartItem.quantity > 1) {
                //telusuri 11
                this.items = this.items.map((item) => {
                    //jika burang barang yang  diklik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barang nya kurang dari 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

//form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function() {
    let allFieldsFilled = true; // flag untuk cek apakah semua field terisi
    for (let i = 0; i < form.elements.length; i++) {
        if (
            form.elements[i].type !== "hidden" &&
            form.elements[i].value.length === 0
        ) {
            allFieldsFilled = false;
            break;
        }
    }

    if (allFieldsFilled) {
        checkoutButton.disabled = false;
        checkoutButton.classList.remove("disabled");
    } else {
        checkoutButton.disabled = true;
        checkoutButton.classList.add("disabled");
    }
});

//kirim data ketika tombole checkout di click
checkoutButton.addEventListener("click", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);

    console.log("Form Data:", objData); // Debugging: pastikan data terisi

    const message = formatMessage(objData);
    console.log("WhatsApp Message:", message); // Debugging: pastikan pesan diformat dengan benar

    window.open(
        "http://wa.me/+62895385890629?text=" + encodeURIComponent(message)
    );
});

//format pesan WA
const formatMessage = (obj) => {
        return `Data Customer
Nama: ${obj.name}
Email: ${obj.email}
No Hp: ${obj.phone}
Data Pesanan:
${JSON.parse(obj.items)
  .map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)})`)
  .join("\n")}
TOTAL: ${rupiah(obj.total)}
Terima Kasih.`;
};

//konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
