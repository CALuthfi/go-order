import { array } from "prop-types";

//belajar tipe data
//sebelumnya kenali dulu apa itu bentuk  = string,array,object
(string = ""), (array = []), (object = {});

//object
const saya = {
  nama: "nana",
  number: 2
};
//array berisi array
const biodata = [[(nama = "luthfi")], [(umur = "17")]];

//array berisi oject
const biodata = [
  {
    nama: "luthfi",
    umur: 12
  },
  {
    nama: "ahmad",
    umur: 10
  }
];
//cara menjalankan
console.log(biodata[0].nama);
//biodata[0][nama];
