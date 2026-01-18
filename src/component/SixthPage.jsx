import card1 from "../img/client1.jpg";
import card2 from "../img/client2.jpg";

export default function SixthPage() {
  return (
    <section id="review" className="sixthPage grid grid-cols-12 pt-[6rem]">
      <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 flex flex-col items-center">
        <SixthPageStarter />
        <div className="reviewCard flex justify-between w-full gap-12 pb-10">
          <SixthPageCard1 />
          <SixthPageCard2 />
        </div>
      </div>
    </section>
  );
}

function SixthPageStarter() {
  return (
    <>
      <h1 className="text-5xl font-bold pt-4 text-[#355592] text-center">
        REVIEW CLIENT
      </h1>

      <div className="h-2 bg-orange-500 w-20 rounded mx-auto"></div>

      <p
        id="underText"
        className="max-w-4xl text-gray-700 text-2xl font-medium text-center py-8"
      >
        Lorem ipsum is not simply random text. It has roots in a piece of
        classical at Hampten-Sydney College.
      </p>
    </>
  );
}

function SixthPageCard1() {
  return (
    <section className="reviewItem">
      <div className="rCard flex items-center gap-4">
        <img src={card1} className="w-16 h-16 rounded-full" alt="" />

        <div>
          <p className="font-medium">Diet Expert</p>
          <p className="font-light text-gray-500">CFO</p>
        </div>
      </div>

      <div className="reviewText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ea
        voluptate illum quidem impedit, quaerat odio neque quos ut atque!
      </div>
    </section>
  );
}

function SixthPageCard2() {
  return (
    <section className="reviewItem">
      <div className="rCard flex items-center gap-4">
        <img src={card2} className="w-16 h-16 rounded-full" alt="" />

        <div>
          <p className="font-medium">Cardio Trainer</p>
          <p className="font-light text-gray-500">CEO</p>
        </div>
      </div>

      <div className="reviewText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab
        delectus! Tempore, error. Placeat voluptate mollitia inventore commodi
        at odio dolores recusandae perferendis magnam ullam.
      </div>
    </section>
  );
}
