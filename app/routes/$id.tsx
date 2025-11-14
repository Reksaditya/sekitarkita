import { productData, type products } from "~/modules/ProductModule/data/productData";
import { Detail } from "~/modules/ProductModule/productDetail";

export function meta({ params }: { params: { id: string } }) {
   const product:products | undefined = productData.find((p) => p.id === Number(params.id));
  return [
    { title: `List UMKM | SekitarKita - Detail UMKM | ${product?.name}` },
    { name: "description", content: "Website Direktori UMKM di Sekitar Telkom University" },
  ];
}

export default function ProductDetail() {
  return <Detail />
}