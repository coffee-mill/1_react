import { FC } from "react";
import TopHeader from "../components/topPage/topHeader";
import TopMain from "../components/topPage/topMain";
const TopPage: FC = () => {
  return (
    <div className="TopPage">
      <TopHeader />
      <TopMain />
    </div>
  );
};

export default TopPage;
