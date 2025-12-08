<template>
  <div class="container mt-4">
    <h3>Daftar Produk</h3>

    <table class="table table-bordered mt-3">
      <thead>
        <tr><th>Nama</th><th>Harga</th><th>Stok</th><th>Aksi</th></tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.nama }}</td>
          <td>Rp. {{ Number(p.harga).toLocaleString() }}</td>
          <td>{{ p.stok }}</td>
          <td><button @click="$router.push('/order?id=' + p.id)" class="btn btn-success btn-sm">Pesan</button></td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-secondary mt-3" @click="goOrders">Riwayat Pesanan</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return { products: [] };
  },
  async mounted() {
    const res = await api.get("/products");
    this.products = res.data;
  },
  methods: {
    goOrders() {
      this.$router.push("/history");
    }
  }
};
</script>
