import { notFound } from "next/navigation";
import { hajjPackages } from "@/data/packages";
import PackageDetail from "@/components/PackageDetail";

export function generateStaticParams() {
  return hajjPackages.map((pkg) => ({ id: pkg.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const pkg = hajjPackages.find((p) => p.id === params.id);
  return {
    title: pkg ? `${pkg.name} | East West Travels` : "Package Not Found",
    description: pkg?.description,
  };
}

export default function HajjDetailPage({ params }: { params: { id: string } }) {
  const pkg = hajjPackages.find((p) => p.id === params.id);
  if (!pkg) notFound();
  return <PackageDetail pkg={pkg} />;
}
