"use client";

import SellYourProduct from "../components/sell-your-product/SellYourProduct";

export default function CategoriesPage() {
  // Temporarily disable auth check for debugging
  // const { seller, loading } = useSellerAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !seller) {
  //     router.replace("/Sell-log-in");
  //   }
  // }, [seller, loading, router]);

  // // loader while checking auth
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  //   );
  // }

  // if (!seller) {
  //   return null;
  // }

  return (
    <div>
      <SellYourProduct />
    </div>
  );
}