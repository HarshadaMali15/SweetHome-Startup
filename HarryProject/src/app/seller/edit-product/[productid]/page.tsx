import EditProductClient from "./EditProductClient";

// Static export requires at least one param
export function generateStaticParams() {
  return [{ productid: "sample" }];
}

export default function Page({
  params,
}: {
  params: { productid: string };
}) {
  return <EditProductClient productid={params.productid} />;
}