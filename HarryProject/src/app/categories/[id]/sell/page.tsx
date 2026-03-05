import ProductForm from "@/app/components/sell-your-product/ProductForm";
import { categories } from "@/app/components/sell-your-product/categories";

// Pre-generate all /categories/[id]/sell pages for static export
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function SellProductPage({
  // params is required for dynamic route signature, even if unused here
  params,
}: {
  params: { id: string };
}) {
  return <ProductForm />;
}
