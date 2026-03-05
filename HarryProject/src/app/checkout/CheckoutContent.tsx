"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "@/lib/api"; // axios instance

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  deliveryTime: string;
}

export default function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const quantityParam = searchParams.get("quantity");
  const quantity = quantityParam ? parseInt(quantityParam) : 1;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [processingPayment, setProcessingPayment] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) return;
      try {
        const { data } = await API.get(`/api/products/${productId}`);
        setProduct(data.product);
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  const calculateFinalAmount = () => {
    if (!product) return 0;
    const unitPrice = product.discountPrice || product.price;
    return unitPrice * quantity;
  };

  const finalAmount = calculateFinalAmount();

  const handleDummyRazorpayPayment = () => {
    setProcessingPayment(true);
    setTimeout(() => {
      toast.success("Payment successful via Razorpay (dummy)!");
      createOrder();
      setProcessingPayment(false);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address.trim()) {
      toast.error("Shipping address is required");
      return;
    }

    if (paymentMethod === "Online Payment (Dummy)") {
      handleDummyRazorpayPayment();
    } else {
      await createOrder();
    }
  };

  const createOrder = async () => {
    try {
      const { data } = await API.post(
        "/api/orders/create",
        {
          items: [{ productId, quantity }],
          paymentMethod,
          address,
          finalAmount,
        },
        { withCredentials: true }
      );

      toast.success("Order placed successfully!");
      router.push(`/order-summary?orderId=${data.order._id}`);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  const unitPrice = product.discountPrice || product.price;
  const subtotal = unitPrice * quantity;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p>Quantity: {quantity}</p>
        <p>
          Price: ₹{unitPrice.toFixed(2)} x {quantity} = ₹{subtotal.toFixed(2)}
        </p>
        <hr className="my-2" />
        <p className="font-bold">Final Amount: ₹{finalAmount.toFixed(2)}</p>
        <p>Estimated Delivery: {product.deliveryTime || "3-5 business days"}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Shipping Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter your shipping address"
          />
        </div>

        {/* Payment Method Selection */}
        <div>
          <label className="block font-medium mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Online Payment (Dummy)">
              Online Payment (Dummy)
            </option>
          </select>
        </div>

        <Button type="submit" className="w-full" disabled={processingPayment}>
          {processingPayment ? "Processing Payment..." : "Confirm Order"}
        </Button>
      </form>
    </div>
  );
}
