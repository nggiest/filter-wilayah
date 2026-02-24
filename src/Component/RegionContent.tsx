import { observer } from "mobx-react-lite";
import { FilterProvinceSetting } from "../store/FilterProvince";
import Breadcrumb from "./Breadcrumb"; // Import breadcrumb yang tadi kita buat

const ResultComponent = observer(() => {
  const store = FilterProvinceSetting;

  const getName = (list: any[], id?: number) =>
    list.find((item) => item.id === id)?.name || "-";

  return (
    <main className="flex-1 w-full flex flex-col h-full bg-white overflow-y-auto">
      <Breadcrumb />
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="text-center w-full">
          <section>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-2">
              Provinsi
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b]">
              {getName(store.getListProvince, store.getSelectedProvince)}
            </h2>
          </section>
          <div className="my-8 text-gray-200 text-2xl font-light">
            <i className="fa-solid fa-chevron-down text-gray-400 text-[12px]"></i>
          </div>
          <section>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-2">
              Kota / Kabupaten
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b]">
              {getName(store.getListCity, store.getSelectedCity)}
            </h2>
          </section>
          <div className="my-8 text-gray-200 text-2xl font-light">
            <i className="fa-solid fa-chevron-down text-gray-400 text-[12px]"></i>
          </div>
          <section>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-2">
              Kecamatan
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b]">
              {getName(store.getListDistrict, store.getSelectedDistrict)}
            </h2>
          </section>
        </div>
      </div>
    </main>
  );
});

export default ResultComponent;
