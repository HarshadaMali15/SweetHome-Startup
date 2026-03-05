import { categories } from "@/app/components/sell-your-product/categories"
import CategoryDetailsClient from "./CategoryDetailsClient"

// Pre-generate all category detail pages for static export
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }))
}

export default function CategoryDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  return <CategoryDetailsClient id={params.id} />
}
