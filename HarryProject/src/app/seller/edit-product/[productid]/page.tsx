import EditProductClient from "./EditProductClient";

// Minimal static params for next export; edit pages are populated client-side
export function generateStaticParams() {
  return [];
}

export default function Page({
  params,
}: {
  params: { productid: string };
}) {
  return <EditProductClient productid={params.productid} />;
}
