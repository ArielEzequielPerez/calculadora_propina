import { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export default function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <>
      <button className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between" onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </button>
    </>
  );
}
