const mataKuliah = [

    {nama: "Pemrograman Berorientasi Objek", kategori:"wajib", sks:2, kode:"MBS1302137", nilaiTarget:"A"},
    {nama: "Praktikum Pemrograman Berorientasi Objek", kategori:"wajib", sks:1, kode:"MBS1303138", nilaiTarget:"A"},
    {nama: "Kecerdasan Buatan", kategori:"wajib", sks:3, kode:"MKL1303131", nilaiTarget:"A"},
    {nama: "Kriptografi dan Keamanan Teknologi Informasi", kategori:"wajib", sks:2, kode:"MKL1304132", nilaiTarget:"A"},
    {nama: "Riset Operasional", kategori:"wajib", sks:2, kode:"MPS1304120", nilaiTarget:"A"},
    {nama: "Pembelajaran Mendalam", kategori:"wajib", sks:3, kode:"MPK1300112", nilaiTarget:"A"},
    {nama: "Big Data dan Data Mining", kategori:"wajib", sks:2, kode:"MPK1300122", nilaiTarget:"A"},
    {nama: "Pemrograman Web Lanjut", kategori:"pilihan", sks:2, kode:"MPK1300210", nilaiTarget:"A"},
    {nama: "Teori Bahasa dan Automata", kategori:"wajib", sks:3, kode:"MPS1305121", nilaiTarget:"A"},
    {nama: "Riset Teknologi Informasi", kategori:"wajib", sks:2, kode:"MTA1305152", nilaiTarget:"A"},
    {nama: "Proyek Perangkat Lunak", kategori:"pilihan", sks:2, kode:"MPK1300131", nilaiTarget:"A"},
    {nama: "Algoritma dan Pemrograman Data", kategori:"wajib", sks:3, kode:"MPK1370131", nilaiTarget:"A"},
    {nama: "Aljabar Linear", kategori:"pilihan", sks:2, kode:"MPA1370131", nilaiTarget:"A"},
    {nama: "Sistem Digital", kategori:"wajib", sks:1, kode:"MPS1300139", nilaiTarget:"A"},
    {nama: "Jaringan Komputer", kategori:"wajib", sks:3, kode:"MPS13800131", nilaiTarget:"A"},
    {nama: "Sistem Basis Data", kategori:"pilihan", sks:3, kode:"MPS1200131", nilaiTarget:"A"},
    {nama: "Rekayasa Perangkat Lunak", kategori:"wajib", sks:3, kode:"MPR1200131", nilaiTarget:"A"},
    {nama: "Sistem Terdistribusi", kategori:"wajib", sks:2, kode:"MPR1200191", nilaiTarget:"A"},
    {nama: "Sistem Berkas", kategori:"pilihan", sks:3, kode:"MPR1200291", nilaiTarget:"A"},
    {nama: "Pengolahan Citra Digital", kategori:"wajib", sks:3, kode:"MPR1250291", nilaiTarget:"A"},
    {nama: "kalkulus", kategori:"wajib", sks:1, kode:"MPK1050291", nilaiTarget:"A"}

]

const namaMatkulSaja = mataKuliah.map(k=> k.nama);
console.log("Daftar Nama Mata Kuliah:", namaMatkulSaja);

const mkPilihan = mataKuliah.filter(k=> k.kategori === "pilihan");
console.log("Mata kuliah Pilihan:", mkPilihan);
console.log("Jumlah Pilihan:", mkPilihan.length);

const totalSks = mataKuliah.reduce((total, k) => total + k.sks, 0);
console.log("Total SKS yang diambil:", totalSks);

const cariMk = mataKuliah.find(k=> k.kode === "MPK1300210");
console.log("Mata Kuliah dengan Kode MPK1300210", cariMk);

const mk1Sks = mataKuliah.some(k=> k.sks >=3);
console.log("Adakah matkul dengan jumlah sks >= 3?", mk1Sks);

const semuaTargetA = mataKuliah.every(k=> k.nilaiTarget === "A");
console.log("Semua MK target nilai A?", semuaTargetA);