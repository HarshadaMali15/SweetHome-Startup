import ProductForm from "@/app/components/sell-your-product/ProductForm";
import { categories } from "@/app/components/sell-your-product/categories";

// Pre-generate all /categories/[id]/sell pages for static export
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

type SellPageProps = { params: { id: string } };

export default function SellProductPage({ params }: SellPageProps) {
  return <ProductForm />;
}
