import { Card, Input, Button, Spacer } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";

import { EyeFilledLogin, EyeSlashLogin } from "@/components/icons";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter(); // Initialisieren Sie den useRouter Hook

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleSubmit = () => {
    if (!validateEmail(value)) {
      setErrorMessage("Ungültige E-Mail");
    } else {
      setErrorMessage("");
      // Hier können Sie die Logik für den erfolgreichen Login hinzufügen

      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Input
          fullWidth
          color={errorMessage ? "danger" : "default"}
          errorMessage={errorMessage}
          label="Email"
          placeholder="Gib deine Email ein"
          type="email"
          value={value}
          onValueChange={setValue}
        />
        {errorMessage && (
          <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
        )}
        <Spacer y={2} />
        <Input
          fullWidth
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashLogin className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledLogin className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          placeholder="Gib dein Passwort ein"
          type={isVisible ? "text" : "password"}
        />
        <Spacer y={2} />
        <Button fullWidth color="primary" onClick={handleSubmit}>
          Sign In
        </Button>
        <Spacer y={1} />
      </Card>
    </div>
  );
}
