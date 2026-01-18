export default function SeventhPage() {
  return (
    <section
      id="contact"
      className="seventhPage grid grid-cols-12 pb-5 md:mt-10"
    >
      <TitlePart />
      <Inside />
      <GoogleMap />
    </section>
  );
}

function TitlePart() {
  return (
    <div
      id="titlePart"
      className="col-start-3 col-span-8 flex flex-col items-center mb-6"
    >
      <h1 className="text-5xl font-bold mt-4 mb-4 text-[#355592] text-center">
        CONTACT US
      </h1>

      <div className="h-2 bg-orange-500 w-20 rounded mx-auto"></div>

      <p className="max-w-4xl text-gray-700 text-2xl font-medium text-center mt-2 md:mt-5">
        Lorem ipsum is not simply random text. It has roots in a piece of
        classical at Hampten-Sydney College.
      </p>
    </div>
  );
}

function Inside() {
  return (
    <div
      id="infoPart"
      className="col-start-3 col-span-8 flex flex-col md:flex-row justify-between gap-10"
    >
      <div>
        <div id="contactInfo" className="flex flex-col md:flex-row gap-7 mb-8">
          <div>
            <h1 className="text-[#4E4E4E] font-medium text-3xl">
              Mobile Number
            </h1>
            <h2 className="text-[#4E4E4E] font-medium text-xl">
              +135 773 321 4442
            </h2>
          </div>

          <div>
            <h1 className="font-medium text-3xl text-[#4E4E4E]">
              Email Address
            </h1>
            <h2 className="text-[#4E4E4E] font-medium text-xl">
              demo@demo.com
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-[#4E4E4E]">
            Make An Appointment
          </h1>

          <input
            className="p-3 rounded-md text-[#4E4E4E]"
            type="text"
            placeholder="Your Name"
            style={{ backgroundColor: "#F1F8FF" }}
          />
          <input
            className="p-3 rounded-md text-[#4E4E4E]"
            type="email"
            placeholder="Your Email"
            style={{ backgroundColor: "#F1F8FF" }}
          />
          <textarea
            id="message"
            className="p-3 rounded-md text-[#4E4E4E]"
            placeholder="Your Message"
            style={{ backgroundColor: "#F1F8FF" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function GoogleMap() {
  return (
    <div id="map" className="mapContainer md:ml-[-440px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6924.587922106326!2d-95.40308405139139!3d29.79805070019431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b89ff43d5ab7%3A0xbeaa5119beac7cc1!2sHouston%20Heights%2C%20Houston%2C%20TX%2077008!5e0!3m2!1sen!2sus!4v1767394731341!5m2!1sen!2sus"
        width="500"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
