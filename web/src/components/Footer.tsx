import { Separator } from "./Separator";

export function Footer() {
  return (
    <footer className="container mx-auto max-w-5xl sticky">
      <Separator />
      <div className="container py-8 mx-auto text-sm p-6 max-w-5xl">
        <ul className="flex space-x-10 items-center justify-center">
          <li className="flex items-center text-gray-500">
            <span className="material-symbols-outlined text-[1.5rem] mr-1">
              tab
            </span>
            &copy; 2023 TabNews
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Contato
            </a>
          </li>
          <li>
            <a
              href="https://github.com/datsfilipe/tabnews-clone"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Museu
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              RSS
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Status
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Termos de Uso
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
