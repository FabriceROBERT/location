import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Products from "../components/Products";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Galery from "../components/videoboothSide/Galery";

export default function Home() {
  return (
    <div className="snap-mandatory snap-y">
      <Navbar />
      <Header />
      <Galery />
      <Products id="Products" className="snap-start" />
      {/* <Slider /> */}
      <Booking className="snap-start" id="Booking" />
      <Footer />
    </div>
  );
}
