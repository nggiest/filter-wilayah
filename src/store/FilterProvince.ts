import { makeAutoObservable } from "mobx";

export type provinceType = { id: number; name: string };
export type cityType = { id: number; province_id: number; name: string };
export type districtType = { id: number; regency_id: number; name: string };

class FilterProvinceStore {
  listProvince: provinceType[] = [];
  listCity: cityType[] = [];
  listDistrict: districtType[] = [];
  selectedProvince: number | undefined = localStorage.getItem("province")
    ? Number(localStorage.getItem("province"))
    : undefined;
  selectedCity: number | undefined = localStorage.getItem("regency")
    ? Number(localStorage.getItem("regency"))
    : undefined;

  selectedDistrict: number | undefined = localStorage.getItem("district")
    ? Number(localStorage.getItem("district"))
    : undefined;

  constructor() {
    makeAutoObservable(this);
  }
  setListProvince(data: provinceType[]) {
    this.listProvince = data;
  }
  setListCity(data: cityType[]) {
    this.listCity = data;
  }
  setListDistrict(data: districtType[]) {
    this.listDistrict = data;
  }
  setSelectedProvince(id: number | undefined) {
    this.selectedProvince = id;
    this.selectedCity = undefined;
    this.selectedDistrict = undefined;

    if (id) {
      localStorage.setItem("province", id.toString());
      localStorage.removeItem("regency");
      localStorage.removeItem("district");
    } else {
      localStorage.removeItem("province");
    }
  }

  setSelectedCity(id: number | undefined) {
    this.selectedCity = id;
    this.selectedDistrict = undefined;

    if (id) {
      localStorage.setItem("regency", id.toString());
      localStorage.removeItem("district");
    } else {
      localStorage.removeItem("regency");
    }
  }

  setSelectedDistrict(id: number | undefined) {
    this.selectedDistrict = id;
    if (id) {
      localStorage.setItem("district", id.toString());
    } else {
      localStorage.removeItem("district");
    }
  }

  resetAll() {
    this.selectedProvince = undefined;
    this.selectedCity = undefined;
    this.selectedDistrict = undefined;
    localStorage.removeItem("province");
    localStorage.removeItem("regency");
    localStorage.removeItem("district");
  }

  get getListProvince() {
    return this.listProvince;
  }
  get getListCity() {
    return this.listCity;
  }
  get getListDistrict() {
    return this.listDistrict;
  }
  get getSelectedProvince() {
    return this.selectedProvince;
  }
  get getSelectedCity() {
    return this.selectedCity;
  }
  get getSelectedDistrict() {
    return this.selectedDistrict;
  }
}

export const FilterProvinceSetting = new FilterProvinceStore();
