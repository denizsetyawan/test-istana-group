<template>
  <div class="container mt-5" style="max-width:400px;">
    <h3 class="text-center mb-4">Login</h3>

    <div class="alert alert-danger" v-if="error">{{ error }}</div>

    <form @submit.prevent="login">
      <input v-model="username" class="form-control mb-3" placeholder="Username" />
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Password" />

      <button class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return { username: "", password: "", error: "" };
  },
  methods: {
    async login() {
      try {
        const res = await api.post("/auth/login", {
          username: this.username,
          password: this.password,
        });

        localStorage.setItem("token", res.data.token);
        this.$router.push("/products");
      } catch (err) {
        this.error = err.response.data.message;
      }
    },
  },
};
</script>
