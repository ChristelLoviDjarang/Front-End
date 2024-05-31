import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    // Inisialisasi state untuk warna header dengan gradient default
    this.state = {
      headerGradient: "linear-gradient(180deg, #191970, #800000)",
      // Gradient default untuk header
    };
  }

  render() {
    // Mengambil nilai gradient header dari state
    const { headerGradient } = this.state;

    return (
      <div
        style={{
          background: headerGradient,
          fontFamily: "Inter, sans-serif", // Menggunakan font Inter
          fontWeight: 400, // Contoh: Normal (400), Bold (700)
          fontStyle: "normal", // Contoh: Italic ("italic")
        }}
        className="card-header oyyy al text-center"
      >
        <h1>Informasi Electronic Chatbot</h1>
      </div>
    );
  }
}

export default Header;
