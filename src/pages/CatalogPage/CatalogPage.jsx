import Banner from "../../components/Banner/Banner";
import SelectsPanel from "../../components/SelectsPanel/SelectsPanel";
import Carousel from "../../components/Carousel/Carousel";
import SeparatorText from "../../components/SeparatorText/SeparatorText";
import Catalog from "../../components/Catalog/Catalog";
import WishesSection from "../../components/WishesSection/WishesSection";

function CatalogPage() {
  return (
    <>
      <Banner />
      <SelectsPanel />
      <Carousel />
      <SeparatorText />
      <Catalog />
      <WishesSection />
    </>
  )
}

export default CatalogPage;
