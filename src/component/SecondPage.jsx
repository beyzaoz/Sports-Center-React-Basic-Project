import yogaImg from "../img/yoga.jpg";
import groupImg from "../img/group.webp";
import soloImg from "../img/solo.jpg";
import stretchImg from "../img/stret.webp";

const classesData = [
  {
    id: "card1",
    title: "Why are your yoga?",
    description: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et a exercitationem assumenda, iusto culpa sunt cupiditate sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur commodi tempore officiis facere sunt, impedit animi ipsum porro odio.",
      "When comes Yoga Your Time.",
      "Saturday-Sunday: 8:00am-10:00am",
      "Monday-Tuesday: 10:00am-12:00pm",
      "Wednesday-Friday: 3:00pm-6:00pm",
    ],
    img: yogaImg,
  },
  {
    id: "card2",
    title: "Why choose Group Gym Work?",
    description: [
      "Training in a group increases motivation, boosts energy, and helps you push your limits with professional guidance. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis perspiciatis, deserunt totam sequi mollitia aliquam iste voluptatibus asperiores id.",
      "Group Gym Schedule",
      "Monday-Wednesday-Friday: 6:00pm - 7:30pm",
      "Tuesday-Thursday: 5:00pm - 6:30pm",
      "Saturday: 10:00am - 12:00pm",
    ],
    img: groupImg,
  },
  {
    id: "card3",
    title: "Why Solo Workout?",
    description: [
      "Solo workouts allow you to focus on your personal goals, move at your own pace, and build a strong mind-body connection. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illum dolorum similique dolore impedit debitis unde eaque doloremque numquam cum.",
      "Solo Workout Time",
      "Monday-Friday: 7:00am - 9:00am",
      "Monday-Friday: 1:00pm - 3:00pm",
      "Sunday: 9:00am - 11:00am",
    ],
    img: soloImg,
  },
  {
    id: "card4",
    title: "Why Stretching Matters?",
    description: [
      "Stretching improves flexibility, reduces muscle tension, and supports recovery after intense workouts. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, officia. Tenetur nisi rem nihil officia, dolorem adipisci deleniti nostrum laboriosam.",
      "Stretching Sessions",
      "Monday-Tuesday: 8:00am - 9:00am",
      "Thursday-Friday: 4:00pm - 5:00pm",
      "Saturday-Sunday: 11:00am - 12:00pm",
    ],
    img: stretchImg,
  },
];

// 1️⃣ Card Component
function ClassCard({ card, cardClass }) {
  return (
    <div className={`card ${cardClass}`}>
      <div className="insideCard flex flex-row items-center justify-between">
        <div className="my-10">
          <h1 className="mb-4">{card.title}</h1>
          {card.description.map((line, i) => (
            <h4 className="mb-4" key={i}>
              {line}
            </h4>
          ))}
        </div>
        <img src={card.img} alt={card.title} />
      </div>
    </div>
  );
}

// 2️⃣ Buttons Component
function ClassButtons() {
  return (
    <div className="buttons relative flex gap-4 mt-4">
      <label
        htmlFor="card1"
        className="cursor-pointer px-4 py-2 border rounded"
      >
        Yoga
      </label>
      <label
        htmlFor="card2"
        className="cursor-pointer px-4 py-2 border rounded"
      >
        Group
      </label>
      <label
        htmlFor="card3"
        className="cursor-pointer px-4 py-2 border rounded"
      >
        Solo
      </label>
      <label
        htmlFor="card4"
        className="cursor-pointer px-4 py-2 border rounded"
      >
        Stretching
      </label>
    </div>
  );
}

// 3️⃣ Main Section Component
export default function ClassesSection() {
  return (
    <section id="classes" className="secondPage grid grid-cols-12">
      <div className="flex col-start-2 col-span-10 md:col-start-3 md:col-span-8 flex-col items-center">
        {/* Başlık */}
        <div className="flex flex-row">
          <div className="items-center justify-center min-h-[20vh] w-full text-center p-12">
            <h1 className="text-3xl md:text-5xl font-bold p-9 text-[#355592]">
              OUR CLASSES
            </h1>
            <div className="h-2 bg-orange-500 mx-auto items-center w-20 rounded-l"></div>
            <h4 className="md:max-w-xl text-gray-700 pt-8 md:m-12 text-2xl font-bold md:font-medium">
              Lorem ipsum is not simply random text. It has roots in a piece of
              classical at Hampten-Sydney College.
            </h4>
          </div>
        </div>

        {/* Radio Inputs */}
        <input
          type="radio"
          name="card"
          id="card1"
          className="hidden"
          defaultChecked
        />
        <input type="radio" name="card" id="card2" className="hidden" />
        <input type="radio" name="card" id="card3" className="hidden" />
        <input type="radio" name="card" id="card4" className="hidden" />

        {/* Buttons */}
        <ClassButtons />

        {/* Cards */}
        <div className="cards w-full">
          {classesData.map((card, i) => (
            <ClassCard key={card.id} card={card} cardClass={`c${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
