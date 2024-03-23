/* eslint-disable react/prop-types */
export default function MovieChip({ data, setSelected }) {
  const handleClick = () => {
    setSelected((prev) => prev.filter((item) => item !== data));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "200px",
          height: "50px",
          borderRadius: "30px",
          padding: "20px",
          background: "var(--secondary-green-color)",
          color: "white",
          fontSize: "26px",
        }}
      >
        {data}&nbsp; &nbsp;{" "}
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          x
        </span>
      </div>
    </>
  );
}
