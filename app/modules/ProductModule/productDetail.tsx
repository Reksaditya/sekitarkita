import { ArrowLeftIcon, Cross, Instagram, Star, User } from "lucide-react"
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Badge } from "~/components/ui/badge";
import { Footer } from "~/components/ui/footer";
import { productData } from "~/modules/ProductModule/data/productData"

export default function ImageZoom({ src, alt }: { src: string; alt?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="cursor-pointer transition-transform hover:scale-105 rounded-xl max-h-56"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}
    </>
  );
}

export const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams()
  const productId = Number(id)
  const product = productData.find((p) => p.id === productId)

  if (!product) return <p>Produk tidak ditemukan</p>

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <section className="flex flex-col items-center">
      <div className="bg-white shadow-xl justify-start flex items-center w-full px-4 py-3 mb-5 cursor-pointer">
        <ArrowLeftIcon onClick={() => navigate(-1)} />
      </div>

      <div className="px-5 md:px-20">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-[1000px]">
          <div className="rounded-xl overflow-hidden mb-5 w-full">
            <iframe
              src={product.map}
              className="w-full h-[220px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="px-4 md:px-5 pb-10">
            <h1 className="font-semibold text-2xl md:text-3xl pb-3">{product.name}</h1>

            <div className="flex items-center gap-1">
              {stars.map((star) => (
                <Star
                  key={star}
                  className={
                    star <= product.stars
                      ? "w-5 h-5 fill-yellow-400 text-yellow-400"
                      : "w-5 h-5 text-gray-300"
                  }
                />
              ))}

              <span className="ml-2 text-sm text-gray-600">{product.stars.toFixed(1)}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-5">
              <Badge>{product.status}</Badge>
              <h2 className="text-gray-600">{product.operation}</h2>
            </div>
          </div>

          <p className="px-4 pb-5 text-gray-700 leading-relaxed">{product.desc}</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl w-full max-w-[1000px] mt-5 p-4 md:p-5 flex flex-col gap-7">
          <h2 className="font-semibold text-xl md:text-2xl">Kontak & Sosial Media</h2>

          <div className="flex flex-col gap-5 text-sm md:text-base">
            <div className="flex items-center">
              <User className="inline-block mr-2" />
              <a href={product.contactLink}>{product.contact || "Tidak tersedia"}</a>
            </div>

            <div className="flex items-center">
              <Instagram className="inline-block mr-2" />
              <a href={product.instagramLink}>{product.instagram || "Tidak tersedia"}</a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-xl w-full max-w-[1000px] mt-5 p-4 md:p-5 flex flex-col gap-7 mb-10">
          <h2 className="font-semibold text-xl md:text-2xl">Menu</h2>

          <div>
            {product.menu?.map((item) => (
              <div
                key={item.name}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-3 mb-3 gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <h3 className="font-medium">{item.name}</h3>
                </div>

                <div className="text-left md:text-right">
                  <h4 className="font-semibold">
                    {location.pathname === "/4" ? "Kecil :" : ""} Rp{" "}
                    {item.price.toLocaleString("id-ID")}
                  </h4>

                  <h4 className={`${location.pathname === "/4" ? "block" : "hidden"} font-semibold`}>
                    {location.pathname === "/4" ? "Besar :" : ""} Rp{" "}
                    {item.price2?.toLocaleString("id-ID")}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-xl w-full max-w-[1000px] mt-5 p-4 md:p-5 flex flex-col gap-7 mb-10">
          <h2 className="font-semibold text-xl md:text-2xl">Foto Lokasi</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.doc?.map((item, index) => (
              <div key={index} className="mb-3">
                <ImageZoom src={item.image} alt={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}