import { categories } from "@/app/components/sell-your-product/categories";
import CategoryDetailsClient from "./CategoryDetailsClient";

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const id = params.id;
  return <CategoryDetailsClient id={id} />;
}