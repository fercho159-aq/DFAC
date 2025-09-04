
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
  style?: React.CSSProperties;
}


const PuntalCard = ({ puntal, onQuoteClick }: { puntal: Puntal, onQuoteClick: (id: string) => void }) => {
  const maxLoad = puntal.loadTable.reduce((max, entry) => (entry.load > max ? entry.load : max), 0);
  
  return (
    <Card className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-transparent hover:border-primary/50">
      <CardHeader className="p-0">
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
          <div className="flex items-center gap-3 text-muted-foreground">
            <ArrowUpToLine className="w-5 h-5 text-primary" />
            <span>Altura Máx: <span className="font-semibold text-foreground">{puntal.maxHeight} cm</span></span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Weight className="w-5 h-5 text-primary" />
            <span>Carga Máx: <span className="font-semibold text-foreground">{maxLoad.toLocaleString('es-ES')} kg</span></span>
          </div>
        </div>
        <Button onClick={() => onQuoteClick(puntal.id)} className="w-full mt-auto">
          Ver Detalles y Cotizar <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};


export const PuntalesDestacados = () => {
  const handleQuoteClick = (puntalId: string) => {
    const selectorSection = document.getElementById('modelos');
    
    // You can use the puntalId to pre-select the model in the selector if you implement that logic
    // For now, it just scrolls
    
    if (selectorSection) {
      selectorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="puntales-destacados" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Nuestros Modelos de Puntales</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Soluciones robustas y seguras para cada tipo de proyecto. Fabricados bajo norma europea, garantizan máxima durabilidad y resistencia.
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
