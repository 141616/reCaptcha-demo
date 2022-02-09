import React from "react";
import logo from "./logo.svg";
import "./App.css";

let timer: NodeJS.Timer | null = null;

const tryInitWithInterval = () => {
  timer = setInterval(() => {
    reCAPTCHAInit("recaptcha");
  }, 1000);
};

const reCAPTCHAInit = (id: string) => {
  let grecaptcha = window.grecaptcha;
  if (!grecaptcha?.ready) {
    return;
  }

  timer && clearInterval(timer);

  // Usage
  grecaptcha.ready(function () {
    grecaptcha.render(id, {
      sitekey: "6LeJfWUeAAAAACIY8zp3WQb_XxcGYQiYV53Pbsug",
      callback: (token: any) => {
        console.log(token);
      },
    });
  });
};

function App() {
  React.useEffect(tryInitWithInterval, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="recaptcha"></div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
