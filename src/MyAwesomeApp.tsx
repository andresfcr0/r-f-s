import type { CSSProperties } from "react";

const firstName = "Andres";
const lastName = "Castaño";

const favoriteGames = ["MotoGP", "Batman", "Master Chief Collection"];

const isActive = false;

const address = {
  zioCode: "ABC-123",
  country: "Canada",
};

const myStyle: CSSProperties = {
  backgroundColor: "#d4d4d4",
  borderRadius: 10,
  padding: 10,
  marginTop: 50,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p style={myStyle}>{JSON.stringify(address)}</p>
    </>
  );
};
