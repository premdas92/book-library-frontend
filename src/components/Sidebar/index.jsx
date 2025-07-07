import { useFilter } from "../../context/FilterContext";
import FilterRadioGroup from "../FilterRadiogroup";

export const Sidebar = () => {
  const { filter, setFilter } = useFilter();
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="w-full md:w-[10%] border-r border-[#e0e0e0] p-[40px]">
      <h1 className="text-3xl font-semibold">Filters</h1>
      <FilterRadioGroup onChange={onFilterChange} value={filter} />
    </div>
  );
};
