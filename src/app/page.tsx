import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { modules } from "@/constants/modules";

const getColorByModuleType = (moduleType: string) => {
  switch (moduleType) {
    case "Finanzas":
      return "bg-green-600";
    case "Administración":
      return "bg-amber-500";
    case "Herramientas":
      return "bg-cyan-600";
    case "Seguridad":
      break;
    case "Ayuda":
      break;
  }
};

export default function Home() {
  return (
    <main className="p-2 grid grid-cols-1 gap-6">
      {modules.map((module) => (
        <Link key={module.id} href={"#"}>
          <Card>
            <CardHeader>
              <CardTitle>{module.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{module.description}</CardDescription>
            </CardContent>
            <CardFooter className="justify-end">
              <Badge className={getColorByModuleType(module.type)}>
                {module.type}
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </main>
  );
}
