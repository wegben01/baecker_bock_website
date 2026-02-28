export interface Location {
  id: string;
  name: string;
  street: string;
  zip: string;
  city: string;
  district: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  isMain?: boolean;
}

export interface Job {
  id: string;
  title: string;
  type: "vollzeit" | "teilzeit" | "ausbildung" | "minijob";
  location: string;
  description: string;
  requirements: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  isOrganic: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}
