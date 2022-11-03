import MainScreen from "../../components/MainScreen/MainScreen";
import HowIsItWork from "../../components/HowIsItWork/HowIsItWork";
import CatalogBlock from "../../components/CatalogBlock/CatalogBlock";
import QuestionsBlock from "../../components/QuestionsBlock/QuestionsBlock";

function HomePage() {
  return (
    <>
      <MainScreen />
      <HowIsItWork />
      <CatalogBlock />
      <QuestionsBlock />
    </>
  )
}

export default HomePage;
