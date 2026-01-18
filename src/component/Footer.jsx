import Logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-12 bg-[#355592]">
      <section className="md:col-start-3 md:col-span-8 flex flex-col p-8">
        <ImgLogo />
        <FooterText />
        <Infos />
      </section>
    </footer>
  );
}

function ImgLogo() {
  return (
    <div>
      <img className="m-0" src={Logo} alt="logo" />
    </div>
  );
}

function FooterText() {
  return (
    <h4 className="text-white text-xl mt-4 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sit harum
      voluptas, voluptatibus minus quos sed veniam, deleniti officiis, minima
      praesentium est vitae distinctio. Magni reprehenderit praesentium suscipit
      quisquam repellat.
    </h4>
  );
}

function Infos() {
  return (
    <div className="grid md:grid-cols-12 pt-10">
      <div
        id="ftrInfo"
        className="md:col-start-4 md:col-span-6 flex flex-col md:flex-row md:justify-between gap-8"
      >
        <div className="flex flex-col text-white gap-4 font-medium">
          <h1 className="text-3xl">Information</h1>
          <a href="#">About Us</a>
          <a href="#">Classes</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="flex flex-col text-white gap-4 font-medium">
          <h1 className="text-3xl">Helpful Links</h1>
          <a href="#">Services</a>
          <a href="#">Supports</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
