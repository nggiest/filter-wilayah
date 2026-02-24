import { useEffect, useMemo } from "react";
import { FilterProvinceSetting } from "../store/FilterProvince";

const useRegions = () => {
  const store = FilterProvinceSetting;

  useEffect(() => {
    Promise.all([
      fetch("/data/indonesia_province.json").then((r) => r.json()),
      fetch("/data/indonesia_city.json").then((r) => r.json()),
      fetch("/data/indonesia_distric.json").then((r) => r.json()),
    ]).then(([p, c, d]) => {
      store.setListProvince(p);
      store.setListCity(c);
      store.setListDistrict(d);
    });
  }, []);

  const filteredCities = useMemo(
    () =>
      store.getListCity.filter(
        (c) => c.province_id === store.getSelectedProvince,
      ),
    [store.getListCity, store.getSelectedProvince],
  );

  const filteredDistricts = useMemo(
    () =>
      store.getListDistrict.filter(
        (d) => d.regency_id === store.getSelectedCity,
      ),
    [store.getListDistrict, store.getSelectedCity],
  );

  return {
    provinces: store.getListProvince,
    cities: filteredCities,
    districts: filteredDistricts,
    selectedProvince: store.getSelectedProvince,
    selectedCity: store.getSelectedCity,
    selectedDistrict: store.getSelectedDistrict,
    setSelectedProvince: store.setSelectedProvince.bind(store),
    setSelectedCity: store.setSelectedCity.bind(store),
    setSelectedDistrict: store.setSelectedDistrict.bind(store),
  };
};

export default useRegions;
