import { generateOrderNumber } from "@/lib/generateOrderNumber";
import Order from "@/models/Order";

interface OrderBody {
  customerName: string;
  items: string[];
  totalAmount: number;
  shippingAddress: string;
}

export const createOrder = async (body: OrderBody) => {
  const orderNumber = generateOrderNumber();

  const order = await Order.create({
    ...body,
    orderNumber,
  });

  return order;
};
