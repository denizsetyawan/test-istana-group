<template>
  <div class="container mt-4" v-if="product">
    <h3>Pesan Produk</h3>
    <p><strong>{{ product.nama }}</strong> - Harga: Rp. {{ Number(product.harga).toLocaleString() }}</p>
    
    <strong>Jumlah Order</strong>
    <input type="number" v-model="jumlah" class="form-control mb-3" placeholder="Jumlah" />

    <button class="btn btn-primary" @click="order">Buat Pesanan</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() { return { product: null, jumlah: 1 }; },
  async mounted() {
    const id = new URLSearchParams(window.location.search).get("id");
    const res = await api.get("/products/" + id);
    this.product = res.data;
  },
  methods: {
    async order() {
      await api.post("/orders", {
        product_id: this.product.id,
        jumlah: this.jumlah
      });
      alert("Pesanan berhasil dibuat");
      this.$router.push("/history");
    }
  }
};
</script>
