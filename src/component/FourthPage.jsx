import trainer1 from "../img/trainer1.jpg";
import trainer2 from "../img/trainer2.jpg";
import trainer3 from "../img/trainer3.jpg";

export default function FourthPage() {
  return (
    <>
      <section id="trainers" className="pageFourth">
        <div>
          <PowerfullText />
          <GroupText />
        </div>
      </section>
    </>
  );
}

function PowerfullText() {
  return (
    <>
      <h1>OUR BEST TRAINERS</h1>
      <div className="h-2 bg-orange-500 mx-auto mt-2 items-center w-20 rounded-l "></div>
      <div className="grid grid-cols-12">
        <div className="flex col-start-3 col-span-8 text-center md:col-start-4 md:col-span-6">
          <p className="flex justify-center items-center text-center">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>
      </div>
    </>
  );
}

function GroupText() {
  return (
    <div className="grid grid-cols-12">
      <div
        id="trainerImg"
        className="flex col-start-2 col-span-10 md:col-start-3 md:col-span-8"
      >
        <div className="trainer-card">
          <img src={trainer1} alt="trainer1" />
        </div>
        <div className="trainer-card">
          <img src={trainer2} alt="trainer2" />
        </div>
        <div className="trainer-card">
          <img src={trainer3} alt="trainer3" />
        </div>
      </div>
    </div>
  );
}
