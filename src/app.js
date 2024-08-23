document.addEventListener("alpine:init", () => {
  Alpine.data("menu", () => ({
    items: [
      { id: 1, name: "Espresso", img: "1.jpg", price: 45000 },
      { id: 2, name: "Kopi Hitam", img: "2.jpg", price: 19000 },
      { id: 3, name: "Kopi Daun", img: "3.jpg", price: 20000 },
      { id: 4, name: "Kopi Latte", img: "4.jpg", price: 18000 },
      { id: 5, name: "Kopi pink", img: "5.jpg", price: 25000 },
      { id: 6, name: "KOpi Love", img: "6.jpg", price: 40000 },
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
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
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

//konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};