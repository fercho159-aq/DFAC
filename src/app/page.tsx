import PuntalSelector from '@/components/puntal-selector';
import { DfacLogo } from '@/components/icons';
import { Phone, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 md:px-8 border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <DfacLogo className="h-8 w-auto text-primary" />
            <h1 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              DFAC Puntales
            </h1>
          </div>
          <p className="text-sm text-muted-foreground hidden md:block">Selector Interactivo de Puntales</p>
        </div>
      </header>

      <main className="flex-grow">
        <PuntalSelector />
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto py-8 px-4 md:px-8 text-center">
          <p className="font-bold text-lg mb-2">DFAC Accesorios para Cimbras</p>
          <p className="text-sm mb-4">Soluciones de calidad para tus proyectos de construcción.</p>
          <div className="flex justify-center items-center gap-6 text-sm">
            <a href="tel:+525512345678" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>55 1234 5678</span>
            </a>
            <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">&copy; {new Date().getFullYear()} DFAC. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
