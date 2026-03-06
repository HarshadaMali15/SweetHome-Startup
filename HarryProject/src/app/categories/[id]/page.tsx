import { categories } from "@/app/components/sell-your-product/categories";
import CategoryDetailsClient from "./CategoryDetailsClient";

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const id = params?.id ?? "";

  return <CategoryDetailsClient id={id} />;
}