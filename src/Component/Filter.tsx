import { observer } from "mobx-react-lite";
import useRegions from "../Hooks/useRegions";

const FilterComponent = observer(() => {
  const {
    provinces,
    cities,
    districts,
    selectedProvince,
    selectedCity,
    selectedDistrict,
    setSelectedProvince,
    setSelectedCity,
    setSelectedDistrict,
  } = useRegions();

  const onReset = () => {
    setSelectedProvince(undefined);
    setSelectedCity(undefined);
    setSelectedDistrict(undefined);
  };

  return (
    <div className="w-72 border-r border-gray-200 h-screen p-6 flex flex-col bg-[#F8F9FB]">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-blue-100 p-2 rounded-full">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <h6 className="font-bold text-gray-600">Frontend Assessment</h6>
      </div>

      <div className="flex-1">
        <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">
          Filter Wilayah
        </h2>

        <div className="mb-5">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            Provinsi
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="fa-solid fa-map text-gray-400 text-[14px]"></i>
            </span>
            <select
              value={selectedProvince ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedProvince(value ? Number(value) : undefined);
                setSelectedCity(undefined);
                setSelectedDistrict(undefined);
              }}
              className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 cursor-pointer">
              <option value="" disabled hidden>
                Pilih Provinsi
              </option>
              {provinces.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            Kota / Kabupaten
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="fa-solid fa-city text-gray-400 text-[14px]"></i>
            </span>
            <select
              value={selectedCity ?? ""}
              disabled={!selectedProvince}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedCity(value ? Number(value) : undefined);
                setSelectedDistrict(undefined);
              }}
              className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 disabled:bg-gray-50 disabled:cursor-not-allowed cursor-pointer">
              <option value="" disabled hidden>
                Pilih Kota
              </option>
              {cities.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            Kecamatan
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="fa-solid fa-location-dot text-gray-400 text-[14px]"></i>
            </span>
            <select
              value={selectedDistrict ?? ""}
              disabled={!selectedCity}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedDistrict(value ? Number(value) : undefined);
              }}
              className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 disabled:bg-gray-50 disabled:cursor-not-allowed cursor-pointer">
              <option value="" disabled hidden>
                Pilih Kecamatan
              </option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-[11px] font-bold transition-all uppercase tracking-wider
    border-blue-900 text-blue-900 bg-transparent hover:bg-blue-50 
    disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
          onClick={onReset}
          disabled={!selectedProvince}>
          <span className="text-sm">⟳</span> RESET
        </button>
      </div>
    </div>
  );
});

export default FilterComponent;
