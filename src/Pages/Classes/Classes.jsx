import { Helmet } from "react-helmet-async";
import Daily from "./Daily";
import AllClasses from "./AllClasses";

const Classes = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Freak || Classes</title>
      </Helmet>
     <Daily></Daily>
     <AllClasses></AllClasses>
    </div>
  );
};

export default Classes;