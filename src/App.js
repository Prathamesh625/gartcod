import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  let [img, setImg] = useState("");

  const url = [
    "https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg",

    "https://gartcod.cloud/_next/static/media/chrome.db58996d.svg",

    "https://gartcod.cloud/_next/static/media/mobile.548cdf6e.svg",
  ];

  let imgCounter = 0;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let count = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the currentImageIndex to show the next image

      if (count < url.length) {
        setImg(url[count]);
      }

      count++;
      console.log(count);
    }, 5000); // Change the interval time according to your needs (in milliseconds)

    // Clean up the interval when the component unmounts
  }, [count]);

  var countDownDate = new Date("Feb 1, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"

    setTime({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    // If the count down is finished, write some text
  }, 1000);

  return (
    <div className="container">
      <div className="circle mountain"></div>

      <h1>
        <img
          className="logo"
          src="https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgartcod-without-bg.33aa91c5.png&w=128&q=75"
          width="100px"
        />{" "}
        <span style={{  fontWeight: "bold", color: "white" }}>
          {" "}
          for{" "}
        </span>{" "}
        <img src={img} id="img" width="50px" /> & cloud gaming
      </h1>
      <div className="subtitle">
        Join us on the launch of gartcod by Provoke Developers
        <img
          className="logo-2"
          src="https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprovoke_logo.d9109ac6.png&w=64&q=75"
          width="50px"
        />
      </div>
      <button>Claim Ticket</button>

      <p className="time" id="demo"></p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginLeft: "40%",
          marginRight: "40%",
        }}
      >
        <div style={{ flexDirection: "column", fontWeight: "bold" }}>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{time.days}</p>
          <p style={{ fontSize: "12px", marginTop: "-50px" }}>DAYS</p>
        </div>

        <div style={{ flexDirection: "column" }}>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{time.hours}</p>
          <p style={{ fontSize: "12px", marginTop: "-50px" }}>HOURS</p>
        </div>
        <div style={{ flexDirection: "column" }}>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{time.minutes}</p>
          <p style={{ fontSize: "12px", marginTop: "-50px" }}>MINUTES</p>
        </div>
        <div style={{ flexDirection: "column" }}>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>{time.seconds}</p>
          <p style={{ fontSize: "12px", marginTop: "-50px" }}>SECONDS</p>
        </div>
      </div>
    </div>
  );
}

export default App;
