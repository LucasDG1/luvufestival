import { useState } from "react";

export default function Info() {
  const [openSection, setOpenSection] = useState(null);

  function toggleSection(section) {
    setOpenSection((prev) => (prev === section ? null : section));
  }

  return (
    <main className="py-15 pb-30 flex flex-col items-center px-6">
      <section className="w-full">
        <h1 className="font-bold text-2xl text-vermilion">
          Algemeen en Contact
        </h1>
        <div className="mt-3">
          <p>
            Het ❤️U Festival is voor (nieuwe) studenten in de regio Utrecht en
            is een aanvulling op UIT.
          </p>{" "}
          <br />
          <p className="font-bold text-xl text-vermilion">Adres Locatie:</p>
          Strijkviertel, Utrecht
          <br />
          <br />
          <p className="font-bold text-xl text-vermilion">Navigatieadres:</p>
          Strijkviertelweg, Utrecht<br></br> <br />
          <p className="font-bold text-xl text-vermilion">
            Datum & Openingstijden
          </p>
          Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
          <br />
          <br />
          <h2 className="font-bold text-2xl text-vermilion">Bereikbaarheid</h2>
          <br />
          <p className="font-bold text-xl text-vermilion">Fiets</p>
          Er is een grote gratis fietsenstalling aanwezig waar je jouw fiets de
          gehele dag kunt stallen.
          <br />
          <br />
          <p className="font-bold text-xl text-vermilion">Auto</p>
          Je kunt een parkingticket aanschaffen. Parkeren kan op P+R Papendorp,
          volg hiervoor de borden 'P online ticket'. Heb je geen ticket van te
          voren gekocht? Dan kun je bij de parkeerwachter op locatie een
          parkeerticket aanschaffen (PIN ONLY). Let wel op:{" "}
          <span className="text-vermilion">VOL=VOL</span>
          <br />
          <br />
          <p className="font-bold text-xl text-vermilion">OV</p>
          Kom je met het openbaar vervoer naar Lief? Plan dan je trip
          via 9292.nl.
          <br />
          <br />
          <p className="text-xl font-bold text-vermilion">ShuttleBus</p>
          Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting het
          festivalterrein pakken. Je vindt deze bus op het centraal station aan
          de Mineurslaan. Volg de witte bordjes met zwarte pijlen én ' ❤️U
          Festival'.
          <br />
          De bus rijdt tussen 12:00 uur & 19:00 uur richting het festival en
          vanaf 21:00 uur kun je weer instappen om richting het station te gaan.
          <br />
          <br />
          <p className="font-bold text-xl text-vermilion">Taxi + Kiss & Ride</p>
          Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden "Kiss
          & Ride ❤️U Festival", zodra je in de buurt bent van het
          festivalterrein.
          <br />
          <br />
          <p className="font-bold text-xl text-vermilion">Lockers</p>
          Op het festivalterrein zijn kluisjes aanwezig waar je je spullen
          veilig kunt opbergen! Hier passen 3 à 4 jassen in. Goed om te weten:
          je kunt je kluisje gedurende de hele dag openen en sluiten zo vaak je
          wilt. Het is niet mogelijk om online een kluisje te reserveren.
          <br />
          <br />
        </div>
      </section>
      <section className="w-full">
        <p className="font-bold text-xl text-vermilion">FAQ</p>
        <div className="relative shadow rounded-2xl mt-3">
          <button className="" onClick={() => toggleSection("medication")}>
            <h2 className="p-4 text-vermilion flex justify-between">
              Ik gebruik medicatie. Wat nu?
              <i
                className={
                  `absolute right-4 inline-block fa-solid fa-caret-down text-xl mr-2 transition-transform duration-300 rotate-180` +
                  (openSection === "medication" ? "" : "rotate-180")
                }></i>
            </h2>
          </button>
          <div
            className="flex flex-col overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openSection === "medication" ? "300px" : "0px",
            }}>
            <p className="p-4">
              Het is toegestaan om medicijnen mee te nemen in een dosis die je
              maximaal nodig hebt op 1 dag. Een
              doktersverklaring/medicatiepaspoort is noodzakelijk. De
              beveiliging zal jouw documentatie beoordelen en de medicijnen
              controleren. Het kan zijn dat de EHBO jouw medicijnen
              (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in bewaring
              neemt en je deze enkel kan innemen bij de EHBO. 
            </p>
          </div>
        </div>
        <div className="relative shadow rounded-2xl mt-3">
          <button className="" onClick={() => toggleSection("leave")}>
            <h2 className="p-4 text-sm text-vermilion flex justify-between">
              Mag ik het festivalterrein tussentijds verlaten?
              <i
                className={
                  `absolute right-4 inline-block fa-solid fa-caret-down text-lg mr-2 transition-transform duration-300 rotate-180` +
                  (openSection === "leave" ? "" : "rotate-180")
                }></i>
            </h2>
          </button>
          <div
            className="flex flex-col overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openSection === "leave" ? "300px" : "0px",
            }}>
            <p className="p-4">
              Nee, helaas is dat niet mogelijk. Om de veiligheid van alle
              bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat
              het festivalterrein tussentijds verlaten wordt. Wij hebben
              namelijk geen zicht op hetgeen wat een bezoeker buiten het
              festivalterrein doet en ik welke staat deze het terrein weer
              betreedt. Hier kunnen dan ook geen uitzonderingen voor gemaakt
              worden. Wij hebben genoeg loungeplekken, foodstands & barren om
              het een hele dag uit te kunnen houden.
            </p>
          </div>
        </div>
        <div className="relative shadow rounded-2xl mt-3">
          <button className="" onClick={() => toggleSection("lock")}>
            <h2 className="p-4 text-vermilion flex justify-between">
              Zijn er lockers?
              <i
                className={
                  `absolute right-4 inline-block fa-solid fa-caret-down text-lg mr-2 transition-transform duration-300 rotate-180` +
                  (openSection === "lock" ? "" : "rotate-180")
                }></i>
            </h2>
          </button>
          <div
            className="flex flex-col overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openSection === "lock" ? "300px" : "0px",
            }}>
            <p className="p-4">
              Yes, deze zijn er! Op het terrein kun je medium & grote lockers
              huren.
            </p>
          </div>
        </div>
        <div className="relative shadow rounded-2xl mt-3">
          <button className="" onClick={() => toggleSection("glu")}>
            <h2 className="p-4 text-vermilion flex justify-between">
              Golden-GLU
              <i
                className={
                  `absolute right-4 inline-block fa-solid fa-caret-down text-lg mr-2 transition-transform duration-300 rotate-180` +
                  (openSection === "glu" ? "" : "rotate-180")
                }></i>
            </h2>
          </button>
          <div
            className="flex flex-col overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openSection === "glu" ? "300px" : "0px",
            }}>
            <p className="p-4">
              Studenten van het GLU hebben tijdens het festival speciale
              privileges en zijn herkenbaar aan een gouden armbandje. Met dit
              gouden armbandje kunnen ze tijdens het festival gebruik maken van
              de gouden toiletten en met goud gemarkeerde bestelpunten aan de
              bars zonder in een rij te hoeven staan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
