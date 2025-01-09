export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      <h2>Footer</h2>
      {isOpen ? (
        <p>Akşam {closeHour} e kadar sipariş verebilirsiniz.</p>
      ) : (
        <p>Şuan kapaliyiz. Açiliş saatimiz {openHour}</p>
      )}
    </footer>
  );
}
