export default function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="container">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url || item.name}>
              {isLast ? <span aria-current="page">{item.name}</span> : <a href={item.url}>{item.name}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
