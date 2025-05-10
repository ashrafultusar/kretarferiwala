import { generateOrderNumber } from "@/lib/generateOrderNumber";
import Order from "@/models/Order";

export const createOrder = async (body: any) => {
  const orderNumber = generateOrderNumber();

  const order = await Order.create({
    ...body,
    orderNumber,
  });

  return order;
};
