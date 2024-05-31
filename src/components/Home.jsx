// Home.js

import React, { useEffect } from "react";
import "./home.css"; // Import file CSS terpisah untuk styling

const Home = () => {
  useEffect(() => {
    // Menambahkan kelas "custom-body" ke elemen <body> pada saat komponen di-mount
    document.body.classList.add("custom-body");

    const hr = document.querySelector("#hr");
    const min = document.querySelector("#min");
    const sec = document.querySelector("#sec");

    const update = () => {
      let date = new Date();
      let h = date.getHours();

      hr.innerText = `0${h}`.slice(-2);
      min.innerText = `0${date.getMinutes()}`.slice(-2);
      sec.innerText = `0${date.getSeconds()}`.slice(-2);
    };

    const intervalID = setInterval(update, 1000);

    // Membersihkan interval ketika komponen di-unmount
    return () => {
      clearInterval(intervalID);
      // Menghapus kelas "custom-body" dari elemen <body> pada saat komponen di-unmount
      document.body.classList.remove("custom-body");
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="hr"></div>
      <div id="min"></div>
      <div id="sec"></div>
      <div className="bunga" id="bunga"></div>{" "}
      {/* Tambahkan div untuk bunga di sini */}
    </div>
  );
};

export default Home;
