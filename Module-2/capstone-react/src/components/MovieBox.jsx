/* eslint-disable react/prop-types */
export default function MovieBox({ data, selected, setSelected }) {
  const isSelected = selected.includes(data.id);

  const handleClick = () => {
    if (isSelected) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };

  return (
    <>
      <div
        style={{
          background: data.color,
          borderRadius: "20px",
          fontSize: "36px",
          color: "white",
          padding: "20px",
          border: isSelected
            ? `6px solid var(--primary-green-color)`
            : `6px solid ${data.color}`,
        }}
        onClick={handleClick}
      >
        <p style={{ paddingBottom: "20px" }}>{data.id}</p>
        {data.image}
      </div>
    </>
  );
}
