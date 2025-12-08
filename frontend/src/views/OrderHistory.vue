<template>
  <div class="container mt-4">
    <h3>Riwayat Pesanan</h3>

    <table class="table table-striped mt-3">
      <thead>
        <tr><th>Produk</th><th>Jumlah</th><th>Total Harga</th><th>Tanggal</th></tr>
      </thead>
      <tbody>
        <tr v-for="o in orders" :key="o.id">
          <td>{{ o.nama }}</td>
          <td>{{ o.jumlah }}</td>
          <td>Rp. {{ Number(o.total_harga).toLocaleString() }}</td>
          <td>{{ formatDate(o.created_at) }}</td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-secondary" @click="$router.push('/products')">Kembali</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() { return { orders: [] }; },
  async mounted() {
    const res = await api.get("/orders");
    this.orders = res.data;
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      const hours = String(d.getHours()).padStart(2, "0");
      const minutes = String(d.getMinutes()).padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
  }
};
</script>
