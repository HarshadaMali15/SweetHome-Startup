import ProductForm from "@/app/components/sell-your-product/ProductForm";
import { categories } from "@/app/components/sell-your-product/categories";

// Pre-generate all /categories/[id]/sell pages for static export
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

// Next.js App Router page: accept plain { params: { id: string } }
export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; // available if needed later
  return <ProductForm />;
}
