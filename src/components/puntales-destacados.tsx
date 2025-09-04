
'use client';

import { puntalesData, Puntal } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpToLine, Weight, MoveRight } from 'lucide-react';
import React from 'react';

// This is necessary to extend JSX intrinsics for model-viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyModelViewerProps;
    }
  }
}
interface MyModelViewerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string;
  alt: string;
  'camera-controls'?: boolean;
  'auto-rotate'?: boolean;
  'shadow-intensity'?: string;
  'ar'?: boolean;
}


const PuntalCard = ({ puntal, onQuoteClick }: { puntal: Puntal, onQuoteClick: () => void }) => {
  const maxLoad = puntal.loadTable.reduce((max, entry) => (entry.load > max ? entry.load : max), 0);
  
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-2 border-transparent hover:border-primary">
      <CardHeader className="p-0 bg-secondary/30">
        <model-viewer
            src={puntal.modelSrc}
            alt={puntal.model}
            camera-controls
            auto-rotate
            shadow-intensity="1"
            style={{ width: '100%', height: '250px', backgroundColor: 'transparent' }}
            data-ai-hint={puntal.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="mb-2 text-xl font-bold">{puntal.model}</CardTitle>
        <div className="space-y-3 mb-6 mt-2 text-sm flex-grow">
          <div className="flex items-center gap-3">
            <ArrowUpToLine className="w-5 h-5 text-primary" />
            <span>Altura Máx: <span className="font-semibold">{puntal.maxHeight} cm</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Weight className="w-5 h-5 text-primary" />
            <span>Carga Máx: <span className="font-semibold">{maxLoad.toLocaleString('es-ES')} kg</span></span>
          </div>
        </div>
        <Button onClick={onQuoteClick} className="w-full mt-auto">
          Ver Detalles y Cotizar <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};


export const PuntalesDestacados = () => {
  const handleQuoteClick = () => {
    const selectorSection = document.getElementById('modelos');
    if (selectorSection) {
      selectorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="puntales-destacados" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-primary">Nuestros Modelos de Puntales</h2>
          <p className="text-muted-foreground mt-2">
            Soluciones robustas y seguras para cada tipo de proyecto. Encuentra el puntal ideal para tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {puntalesData.map(puntal => (
            <PuntalCard key={puntal.id} puntal={puntal} onQuoteClick={handleQuoteClick} />
          ))}
        </div>
      </div>
    </section>
  );
};
