//const fs = require("fs");
//// Save network state to JSON file.
//const networkState = model_network.toJSON();
//fs.writeFileSync("model_network_state.json",  JSON.stringify(networkState), "utf-8");
//// Load the trained network data from JSON file.
//const networkState = JSON.parse(fs.readFileSync("network_state.json", "utf-8"));
//model_network.fromJSON(networkState);
// const currentDate = new Date();

// // Menggunakan fungsi get_time() untuk mendapatkan waktu dalam format yang diinginkan
// const currentTime = get_time(currentDate);

// // Menggunakan fungsi response_user atau response_bot dengan waktu yang diperoleh dari get_time()
// const userResponse = response_user("Pesan pengguna di sini", currentTime);
// const botResponse = response_bot("Pesan bot di sini", 85, currentTime);
// function to create a dictionary
export function build_dictionary(json_data) {
  // combine string
  var str_data = json_data
    .map((dataSet) => {
      return dataSet.phrase;
    })
    .join(" ");
  // lowercase
  str_data = str_data.toLowerCase();
  // remove punctuation
  str_data = str_data.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
  // remove dupliate items
  var arr_duplicate = str_data.split(" ");
  var str_fix = arr_duplicate
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
    .join(" ");

  return str_fix.split(" ");
}

// clean text input
export function clean_input(txt_input) {
  // lowercase
  txt_input = txt_input.toLowerCase();
  // remove punctuation
  txt_input = txt_input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");

  return txt_input;
}

// user chat replay
export function response_user(chat, date) {
  var html =
    "<div class='containerbot darker'> <img src='./user.png' alt='Avatar' class='right' style='width:100%;'> <div class='row pt-4'> <div class='col-sm-2'><span class='time-left'>" +
    date +
    "</span></div> <div class='col-sm-10 text-end'>" +
    chat +
    "</div></div></div>";
  return html;
}

// bot chat replay
export function response_bot(chat, prob, date) {
  var html =
    "<div class='containerbot'> <img src='./bot.png' alt='Avatar' style='width:100%;'> <div class='row'> <div class='col-sm-8 pt-4'>" +
    chat +
    "</div> <div class='col-sm-4 pt-2'><span class='time-right'>" +
    prob +
    "%</br>" +
    date +
    "</span></div> </div> </div>";
  return html;
}

// get time date today
export function get_time(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;
  // appending zero in the start if hours less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + " " + ampm;
}
