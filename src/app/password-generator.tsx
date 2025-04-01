"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const generatePassword = (): void => {
    let charset: string = "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+{}[]";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let newPassword: string = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <Card className="p-6 w-96 shadow-lg bg-gray-800 text-white rounded-xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Password Generator</h2>
          <Input value={password} readOnly className="mb-4 bg-gray-700 text-white" />
          <div className="mb-2">
            <Label>Password Length: {length}</Label>
            <input
              type="range"
              min="6"
              max="24"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Switch checked={includeNumbers} onCheckedChange={setIncludeNumbers} />
            <Label>Include Numbers</Label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Switch checked={includeSymbols} onCheckedChange={setIncludeSymbols} />
            <Label>Include Symbols</Label>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Switch checked={includeUppercase} onCheckedChange={setIncludeUppercase} />
            <Label>Include Uppercase</Label>
          </div>
          <Button onClick={generatePassword} className="w-full bg-blue-600 hover:bg-blue-700">Generate Password</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordGenerator;