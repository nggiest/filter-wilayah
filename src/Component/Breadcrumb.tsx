import { observer } from "mobx-react-lite";
import { FilterProvinceSetting } from "../store/FilterProvince";

const Breadcrumb = observer(() => {
  const store = FilterProvinceSetting;
  const getName = (list?: any[], id?: number) =>
    list?.find((item) => item.id === id)?.name || "-";

  const isLast = (type: "province" | "city" | "district") => {
    if (type === "district") return !!store.getSelectedDistrict;
    if (type === "city")
      return !!store.getSelectedCity && !store.getSelectedDistrict;
    if (type === "province")
      return !!store.getSelectedProvince && !store.getSelectedCity;
    return false;
  };

  return (
    <>
      <nav className="border-b border-gray-200 px-8 py-5 items-center text-[11px] font-bold tracking-wide">
        <span className="text-gray-400">Indonesia</span>
        {store.getSelectedProvince && (
          <>
            <span className="text-gray-300 font-light m-1">
              <i className="fa-solid fa-chevron-right text-[9px] text-gray-300"></i>
            </span>
            <span
              className={
                isLast("province") ? "text-blue-600" : "text-gray-400"
              }>
              {getName(store.getListProvince, store.getSelectedProvince)}
            </span>
          </>
        )}

        {store.getSelectedCity && (
          <>
            <span className="text-gray-300 font-light m-1">
              <i className="fa-solid fa-chevron-right text-[9px] text-gray-300"></i>
            </span>
            <span
              className={isLast("city") ? "text-blue-600" : "text-gray-400"}>
              {getName(store.getListCity, store.getSelectedCity)}
            </span>
          </>
        )}

        {store.getSelectedDistrict && (
          <>
            <span className="text-gray-300 font-light m-1">
              <i className="fa-solid fa-chevron-right text-[9px] text-gray-300"></i>
            </span>
            <span className="text-blue-600">
              {getName(store.getListDistrict, store.getSelectedDistrict)}
            </span>
          </>
        )}
      </nav>
    </>
  );
});

export default Breadcrumb;
