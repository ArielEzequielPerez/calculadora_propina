import { formatCurrency } from "../helper";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};
export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl"> Consumo </h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">Ta' vacio</p>
        ) : (
          order.map( item => (
            <div key= {item.id}>
              <p className="text-lg font-bold">
                {item.name}{" "}
                <span className="font-normal">x{item.quantity}</span>
              </p>
              <p className="text-lg font-bold">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
