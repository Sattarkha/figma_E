import Product from "@/components/Product";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sale from "@/components/Sale";
import Category from "@/components/Category";
import OurProducts from "@/components/OurProducts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Sale/>
    <Category/>
    <Product/>
    <OurProducts/>
    <Features/>
    <Footer/>
    
   </div>
  );
}
