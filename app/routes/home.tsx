import type { Route } from "./+types/home";
import { LandingPage } from "~/modules/LandingModule";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SekitarKita - Direktori UMKM | Sekitar Telkom University" },
    { name: "description", content: "Website Direktori UMKM di Sekitar Telkom University" },
  ];
}

export default function Home() {
  return <LandingPage />;
}