const CustomButton = (prop) => {
    console.log(prop);
  return (
    <button
      style={{
        backgroundColor: prop.buttonData.color,
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {prop.buttonData.name}
    </button>
  );
};

export default CustomButton;
