import card1 from "../img/purchase1.jpg";
import card2 from "../img/purchase2.jpg";
import card3 from "../img/purchase3.jpg";
import card4 from "../img/purchase4.jpg";

export default function FifthPage() {
  return (
    <>
      <section className="fifthPage">
        <div>
          <PurchasePart />
        </div>
      </section>

      <div className="grid md:grid-cols-12">
        <div className="extCard flex sm:col-start-3 sm:col-span-8 sm:justify-between mt-10 gap-6">
          <CardPart1 />
          <CardPart2 />
          <CardPart3 />
          <CardPart4 />
        </div>
      </div>
    </>
  );
}

function PurchasePart() {
  return (
    <>
      <h1>PURCHASE FROM US</h1>
      <div className="h-2 bg-orange-500 mx-auto m-5 items-center w-20 rounded-l "></div>
      <div className="grid md:grid-cols-12">
        <div className="flex col-start-4 col-span-6">
          <p className="flex justify-center items-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            possimus dicta, quidem ducimus vitae explicabo a! Earum vitae fuga
            reiciendis ipsa architecto aliquam, perspiciatis minus dolore odio
            eaque ullam quidem?
          </p>
        </div>
      </div>
    </>
  );
}

function CardPart1() {
  return (
    <div className="card">
      <img src={card1} alt="" />
      <h2 className="text-black font-bold text-3xl text-center">
        Kettlebell / 5kg
      </h2>

      <div className="flex flex-row items-center justify-center">
        <h4 className=" sale text-black font-bold text-xl mt-2">$89.99 </h4>
        <h4 className="text-black font-bold text-xl mt-2">/$59.99</h4>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <i className="fa-solid fa-cart-shopping"></i>
        <h4 className="text-black font-bold text-xl">Add To Cart</h4>
      </div>
    </div>
  );
}

function CardPart2() {
  return (
    <div className="card">
      <img src={card2} alt="" />
      <h2 className="text-black font-bold text-3xl text-center">Treadmill</h2>

      <div className="flex flex-row items-center justify-center">
        <h4 className=" sale text-black font-bold text-xl mt-2">$899.99 </h4>
        <h4 className="text-black font-bold text-xl mt-2">/$599.99</h4>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <i className="fa-solid fa-cart-shopping"></i>
        <h4 className="text-black font-bold text-xl">Add To Cart</h4>
      </div>
    </div>
  );
}

function CardPart3() {
  return (
    <div className="card">
      <img src={card3} alt="" />
      <h2 className="text-black font-bold text-2xl text-center">
        Adjustable Dumbbell
      </h2>

      <div className="flex flex-row items-center justify-center">
        <h4 className=" sale text-black font-bold text-xl mt-2">$89.99 </h4>
        <h4 className="text-black font-bold text-xl mt-2">/$59.99</h4>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <i className="fa-solid fa-cart-shopping"></i>
        <h4 className="text-black font-bold text-xl">Add To Cart</h4>
      </div>
    </div>
  );
}
function CardPart4() {
  return (
    <div className="card">
      <img src={card4} alt="" />
      <h2 className="text-black font-bold text-3xl text-center">
        Kettlebell / 3kg
      </h2>

      <div className="flex flex-row items-center justify-center">
        <h4 className=" sale text-black font-bold text-xl mt-2">$89.99 </h4>
        <h4 className="text-black font-bold text-xl mt-2">/$59.99</h4>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <i className="fa-solid fa-cart-shopping"></i>
        <h4 className="text-black font-bold text-xl">Add To Cart</h4>
      </div>
    </div>
  );
}
