import { useState, useEffect, useRef } from "react";
import bmiImg from "../img/bmi-index.jpg";

export default function ThirdPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(21.79);
  const [review, setReview] = useState("Normal");
  const [trianglePos, setTrianglePos] = useState("50%"); // Başlangıç pozisyonu
  const navbarRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 0) {
          navbarRef.current.classList.add("scrolled");
        } else {
          navbarRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // BMI hesaplama
  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) {
      alert("Please enter value!");
      return;
    }

    const heightM = h / 100;
    let bmiResult = w / (heightM * heightM);

    if (bmiResult < 18.5) setReview("Underweight");
    else if (bmiResult < 25) setReview("Normal");
    else if (bmiResult < 30) setReview("Overweight");
    else if (bmiResult < 35) setReview("Obese");
    else setReview("Extremely Obese");

    bmiResult = Number(bmiResult.toFixed(2));
    setBmi(bmiResult);

    moveTriangle(bmiResult);
  };

  // Triangle pozisyonu
  const moveTriangle = (bmiValue) => {
    let safeBMI = Math.max(15, Math.min(40, bmiValue));
    let rawPercent = ((safeBMI - 15) / (40 - 15)) * 100;
    let finalPosition = (rawPercent * 78) / 100 + 10; // 10-88 arası
    setTrianglePos(finalPosition + "%");
  };

  // Enter ile hesaplama
  const handleKeyDown = (e) => {
    if (e.key === "Enter") calculateBMI();
  };

  return (
    <section className="thirdPage grid grid-cols-12 py-12 bg-white">
      <div className="flex col-start-2 col-span-9 md:col-start-3 md:col-span-8 justify-between gap-6 flex-col md:flex-row">
        <BMICalculatorForm
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          calculateBMI={calculateBMI}
          handleKeyDown={handleKeyDown}
        />
        <BMIResult bmi={bmi} review={review} trianglePos={trianglePos} />
      </div>
    </section>
  );
}

// Form component
function BMICalculatorForm({
  height,
  setHeight,
  weight,
  setWeight,
  calculateBMI,
  handleKeyDown,
}) {
  return (
    <div className="sm:w-[50vh] flex flex-col">
      <h1 className="md:text-6xl text-[#355592] font-bold">BMI Calculator</h1>

      <p className="text-[#4E4E4E] text-xl font-bold mt-10">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>

      <p className="text-[#4E4E4E] text-xl font-bold mt-10">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>

      <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-10">
        <div className="flex items-center gap-2">
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-[#4E4E4E] text-lg font-bold border-[0.1rem] border-black rounded-l shadow-2xl p-2"
            type="text"
            placeholder="Your Height"
          />
          <p>cm</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyDown={handleKeyDown}
            className="text-[#4E4E4E] text-lg font-bold border-[0.1rem] border-black rounded-l shadow-2xl p-2"
            type="text"
            placeholder="Your Weight"
          />
          <p>kg</p>
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="mt-6 py-3 bg-[#355592] text-white rounded-lg font-bold hover:bg-orange-500 transition"
      >
        Calculate
      </button>
    </div>
  );
}

// Result + image component
function BMIResult({ bmi, review, trianglePos }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-0 w-full">
      <div className="result flex flex-col justify-center items-center mb-6">
        <h4 className="text-2xl md:ml-80 font-bold">{bmi}</h4>
        <h4 className="text-xl md:ml-80 font-semibold">{review}</h4>
        <h4 className="md:hidden flex">Your BMI</h4>
      </div>

      <div className="relative w-full md:ml-115">
        <img
          id="bmiPicture"
          className="block w-full rounded-lg"
          src={bmiImg}
          alt="bmi-index"
        />
        <div
          className="triangle absolute bottom-[-30px]  w-0 h-0 border-l-[25px] border-r-[25px] border-b-[35px] border-l-transparent border-r-transparent border-b-orange-500"
          style={{ left: trianglePos }}
        ></div>
      </div>
    </div>
  );
}
