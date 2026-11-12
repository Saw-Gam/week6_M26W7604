// Part B task 5
import menu from "./data.json";

// import components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import TailwindCssPractice from "./components/TailwindCssPractice.jsx";
import Sawgam from "./components/Sawgam.jsx";

// print the title of the app in an h1 tag
function App() {
  const item = menu[0];
  return (
    <main>
      <Header />
       <Hero />
      <h1 className="bg-amber-100 p-4">M26W7604 . Tiny Town Toys</h1>
       <p>We have {menu.length} menu items.</p>
        <div className="rounded-xl bg-white p-4 shadow-md">
          <img
            src={item.toyPhoto}
            alt={item.toyName}
            className="rounded-lg"
          />

          <h2 className="mt-2 text-xl font-bold">
            {item.toyName}
          </h2>

          <p className="text-gray-600">
            {item.toyType}
          </p>

          <p>
            {item.recommendedAge} years · ★ {item.kidRating}
          </p>

          <p>
            boxColor: {item.box.boxColor} · weightGrams: {item.box.weightGrams} 
          </p>
          {/* making grid of 3 columns of card */}
          <ul className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3">
            {menu.map((m) => (
              <li key={m.id} className="rounded border p-2">
                {m.toyName}
              </li>
            ))}
          </ul>

        </div>
        {/* call componnent  */}
        <TailwindCssPractice />
       <Footer />
       <Sawgam/>
    </main>
  );
}

export default App;