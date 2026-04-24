import { notFound } from "next/navigation";
import { umrahPackages } from "@/data/packages";
import PackageDetail from "@/components/PackageDetail";

export function generateStaticParams() {
  return umrahPackages.map((pkg) => ({ id: pkg.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const pkg = umrahPackages.find((p) => p.id === params.id);
  return {
    title: pkg ? `${pkg.name} | East West Travels` : "Package Not Found",
    description: pkg?.description,
  };
}

export default function UmrahDetailPage({ params }: { params: { id: string } }) {
  const pkg = umrahPackages.find((p) => p.id === params.id);
  if (!pkg) notFound();
  return <PackageDetail pkg={pkg} />;
}
