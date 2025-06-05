export default function Home() {
  return (
    <main className="py-15 flex flex-col items-center px-6">
      <section className="w-full">
        <h1 className="text-3xl font-bold">Welkom!</h1>
        <p className="text-gray-400">6/7 September</p>
        <p className="bg-gray-200 p-4 pl-23 pr-23 mt-3 rounded-full text-gray-500">
          <i className="fa-solid fa-magnifying-glass"></i> Zoek musikanten
        </p>
      </section>
      <section className="w-full">
        <h2 className="mt-4 text-xl font-bold">De Artiesten</h2>
        <div className="flex gap-6 items-center mt-5 border-gray-400 rounded-3xl shadow">
          <img
            className="rounded-3xl object-cover h-30 w-30"
            src="/img/artist/vanbuuren.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Armin van Buuren</h2>
            <p className="font-bold text-md text-gray-400">Trance Icon</p>
          </div>
        </div>
        <div className="flex gap-6 items-center mt-5 border-gray-400 rounded-3xl shadow">
          <img
            className="rounded-3xl object-cover h-30 w-30"
            src="/img/artist/garrix.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Martin Garrix</h2>
            <p className="font-bold text-md text-gray-400">EDM Superstar</p>
          </div>
        </div>
        <div className="flex gap-6 items-center mt-5 border-gray-400 rounded-3xl shadow">
          <img
            className="rounded-3xl object-cover h-30 w-30"
            src="/img/artist/keningston.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">Keningston</h2>
            <p className="font-bold text-md text-gray-400">
              Indie Rock Anthems
            </p>
          </div>
        </div>
        <a href="/musicians">
          <h2 className="shadow bg-vermilion mt-5 p-3 rounded-2xl text-white text-center bold">
            Zie alle artiestsen
          </h2>
        </a>
      </section>
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="mt-4 text-xl font-bold">Podiums</h2>
          <div className="mt-4 pl-5 pr-5 p-1 rounded-full bg-gray-200 hover:bg-gray-300">
            Zaterdag <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <img
            className="rounded-t-3xl w-full h-36 object-cover shadow"
            src="/img/stages/mainstage.png"
            alt=""
          />
          <div className="w-full h-24 rounded-b-3xl shadow">
            <h2 className="font-bold text-xl pl-3 pt-3">Poton</h2>
            <div className="flex items-center pl-3 gap-1 mt-1">
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/vanbuuren.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/keningston.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/destaat.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/navarone.png"
                alt=""
              />
              <img
                className="absolute w-22 right-15 mb-10"
                src="./img/styling/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <img
            className="rounded-t-3xl w-full h-36 object-cover shadow"
            src="/img/stages/thelake.png"
            alt=""
          />
          <div className="w-full h-24 rounded-b-3xl shadow">
            <h2 className="font-bold text-xl pl-3 pt-3">The Lake</h2>
            <div className="flex items-center pl-3 gap-1 mt-1">
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/devisser.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/dotan.png"
                alt=""
              />
              <img
                className="absolute w-22 right-15 mb-10"
                src="./img/styling/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <img
            className="rounded-t-3xl w-full h-36 object-cover shadow"
            src="/img/stages/theclub.png"
            alt=""
          />
          <div className="w-full h-24 rounded-b-3xl shadow">
            <h2 className="font-bold text-xl pt-3 pl-3">The Club</h2>
            <div className="flex items-center pl-3 gap-1 mt-1">
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/garrix.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/spinvis.png"
                alt=""
              />
              <img
                className="absolute w-22 right-15 mb-10"
                src="./img/styling/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10">
          <img
            className="rounded-t-3xl w-full h-36 object-cover shadow"
            src="/img/stages/hangar.png"
            alt=""
          />
          <div className="w-full h-24 rounded-b-3xl shadow">
            <h2 className="font-bold text-xl pt-3 pl-3">Hangar</h2>
            <div className="flex items-center pl-3 gap-1 mt-1">
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/chefspecial.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/froukje.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/temptation.png"
                alt=""
              />
              <img
                className="w-9 h-9 rounded-full"
                src="/img/artist/dotan.png"
                alt=""
              />
              <img
                className="absolute w-22 right-15 mb-10"
                src="./img/styling/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
