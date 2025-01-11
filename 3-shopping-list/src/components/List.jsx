import Item from "./Item";

export default function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {items.length > 0 ? (
        <div className="list">
          <ul>
            {items.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onUpdateItem={onUpdateItem}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="list">Ürün yok</div>
      )}
    </>
  );
}
