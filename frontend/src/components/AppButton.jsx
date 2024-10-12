import Button from "@mui/material/Button";
export default function AppButton({ text }) {
  return (
    <div
      className="AppButton"
      style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
    >
      <Button variant="contained">{text}</Button>
    </div>
  );
}
