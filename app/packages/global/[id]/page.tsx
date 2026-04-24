import { notFound } from "next/navigation";
import { globalPackages } from "@/data/packages";
import PackageDetail from "@/components/PackageDetail";

export function generateStaticParams() {
  return globalPackages.map((pkg) => ({ id: pkg.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const pkg = globalPackages.find((p) => p.id === params.id);
  return {
    title: pkg ? `${pkg.name} | East West Travels` : "Package Not Found",
    description: pkg?.description,
  };
}

export default function GlobalDetailPage({ params }: { params: { id: string } }) {
  const pkg = globalPackages.find((p) => p.id === params.id);
  if (!pkg) notFound();
  return <PackageDetail pkg={pkg} />;
}
