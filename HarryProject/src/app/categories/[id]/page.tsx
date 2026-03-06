import { categories } from "@/app/components/sell-your-product/categories";
import CategoryDetailsClient from "./CategoryDetailsClient";

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <CategoryDetailsClient id={id} />;
}