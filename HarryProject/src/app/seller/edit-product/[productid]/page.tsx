import EditProductClient from "./EditProductClient";

// Required for static export
export function generateStaticParams() {
  return [{ productid: "sample" }];
}

export default function Page(props: any) {
  const productid = props?.params?.productid;

  return <EditProductClient productid={productid} />;
}