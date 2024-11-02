import Herosection from "./components/herosection";
import Featurednewcars from "./components/featurednewcars";
import Footer from "./components/footer";


export default function Home() {
  return (
<div className="bg-white">
  
         <Herosection />
         <Featurednewcars />
         <Footer />

    </div>

  );
}