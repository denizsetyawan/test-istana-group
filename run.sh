echo "Menghentikan container lama dan menghapus volume..."
docker-compose down -v

echo "Build dan menjalankan semua container..."
docker-compose up --build
