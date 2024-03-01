import Hero from "./components/Hero/Hero";
import Biography from "./components/Biography/Biography";
import WorkingProcess from "./components/WorkingProcess/WorkingProcess";
import Reviews from "./components/Reviews/Reviews";





export default function Home() {

  return (
    <div className="w-full grid justify-center items-center ">
      <Hero />
      <Biography />
      <Reviews />
      <WorkingProcess />
    </div>
  );
}
