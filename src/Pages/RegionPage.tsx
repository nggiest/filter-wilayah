import FilterComponent from "../Component/Filter";
import ResultComponent from "../Component/RegionContent";

const FilterPage = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <FilterComponent />
      <ResultComponent />
    </div>
  );
};

export default FilterPage;
