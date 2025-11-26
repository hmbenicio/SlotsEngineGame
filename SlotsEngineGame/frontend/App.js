import React, { useState } from "react";
import LoginPage from "./src/pages/LoginPage";
import CreateAccountPage from "./src/pages/CreateAccountPage";
import CasinoPage from "./src/pages/CasinoPage";
import ProfilePage from "./src/pages/ProfilePage";

export default function App() {
  const [tela, setTela] = useState("login");
  const [usuario, setUsuario] = useState(null);
  const temaPadrao = "dark";

  if (tela === "create") {
    return (
      <CreateAccountPage
        tema={temaPadrao}
        onSubmit={() => setTela("login")}
        onCancel={() => setTela("login")}
      />
    );
  }

  if (tela === "profile") {
    return (
      <ProfilePage
        tema={temaPadrao}
        user={usuario}
        onBack={() => setTela("casino")}
      />
    );
  }

  if (tela === "casino") {
    return (
      <CasinoPage
        onExit={() => {
          setUsuario(null);
          setTela("login");
        }}
        onOpenProfile={() => setTela("profile")}
      />
    );
  }

  return (
    <LoginPage
      tema={temaPadrao}
      onSubmit={(data) => {
        setUsuario({
          nome: data?.identificador || "Jogador",
          email: data?.identificador || "Nao informado",
        });
        setTela("casino");
      }}
      onCreateAccount={() => setTela("create")}
    />
  );
}

