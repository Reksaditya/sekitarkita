import { ProductPage } from "~/modules/ProductModule"

export function meta() {
  return [
    { title: "List UMKM | SekitarKita - Direktori UMKM | Sekitar Telkom University" },
    { name: "description", content: "Website Direktori UMKM di Sekitar Telkom University" },
  ];
}

export default function Product() {
  return <ProductPage />;
}