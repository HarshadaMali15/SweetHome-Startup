import ProductForm from "@/app/components/sell-your-product/ProductForm";
import { categories } from "@/app/components/sell-your-product/categories";

// Pre-generate all /categories/[id]/sell pages for static export
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

// Next.js App Router page
// Use a broad props type here to avoid conflicting with Next's internal PageProps constraint
export default function Page(props: any) {
  const { params } = props;
  const id = params?.id as string | undefined; // available if needed later
  return <ProductForm />;
}
