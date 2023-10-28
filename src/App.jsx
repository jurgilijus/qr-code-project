import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="qr-table">
        <img className="qr-img" src={qr} alt="qr code" />
        <div className="text-conteiner">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the net level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
