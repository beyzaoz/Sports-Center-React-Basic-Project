import logo from "../img/logo.png";

export default function FirstPage() {
  return (
    <section class="fullPage">
      <section
        id="home"
        className="md:grid md:grid-cols-12 pt-[6rem] pb-[1rem]"
      >
        <div className=" flex md:col-start-3 md:col-span-8">
          <div className="">
            <PowerfullText />
            <GroupText />
            <ButtonAndText />
          </div>
        </div>
      </section>

      <section className="cardArea grid md:grid-cols-12">
        <Courses />
      </section>
    </section>
  );
}

function PowerfullText() {
  return (
    <p className="bg-[#355592] inline-block text-white p-2 rounded-l font-bold text-2xl">
      POWERFULL
    </p>
  );
}

function GroupText() {
  return (
    <div>
      <h3 className="text-white font-bold text-[6rem] block md:block  inline">
        GROUP
      </h3>
      <h3 className="text-white font-bold text-[6rem] block md:block inline">
        PRACTICE
      </h3>
      <h3 className="text-white font-bold text-[6rem]  md:block  sm:inline">
        WITH TRAINER
      </h3>
    </div>
  );
}

function ButtonAndText() {
  return (
    <div>
      <h4
        id="explanation"
        className="text-white font-bold text-[2.1rem] bg-black/30"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        sapiente facilis maxime dicta animi, doloremque dolorum, officiis qui
        molestias nisi nam explicabo facere inventore omnis minus ex nobis fugit
        eum.
      </h4>

      <button className="btn1 bg-[#355592] p-3 rounded-xl text-white text-xl mr-12 mt-2 px-12 md:font-extrabold">
        Sign Up
      </button>
      <button
        id="details"
        className="btn1 border-4 border-black p-3 text-white text-xl rounded-xl px-12 md:font-extrabold bg-black bg-opacity-50 "
      >
        Details
      </button>
    </div>
  );
}

function Courses() {
  return (
    <section className="cardArea grid md:grid-cols-12">
      <div className="flex flex-col sm:flex-col md:flex-row col-start-3 col-span-8 md:gap-10 ">
        <div className="card">
          <h3 className="firstText">325</h3>
          <h3 className="secondText">Course</h3>
        </div>
        <div className="card ">
          <h3 className="firstText">405</h3>
          <h3 className="secondText">Work Out</h3>
        </div>
        <div className="card">
          <h3 className="firstText">305</h3>
          <h3 className="secondText">Working Hour</h3>
        </div>
        <div className="card">
          <h3 className="firstText">705</h3>
          <h3 className="secondText">Happy Client</h3>
        </div>
      </div>
    </section>
  );
}
