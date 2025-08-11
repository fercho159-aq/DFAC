"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { puntalesData, type Puntal } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ContactModal } from '@/components/contact-modal';
import {
  ArrowDownToLine,
  ArrowUpToLine,
  Circle,
  Shield,
  BadgeCheck,
  Weight,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SpecItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-bold text-base">{label}</p>
      <p className="text-muted-foreground text-sm">{value}</p>
    </div>
  </div>
);

export default function PuntalSelector() {
  const [modelIndex, setModelIndex] = useState(3);
  const [currentHeight, setCurrentHeight] = useState(puntalesData[3].minHeight);
  const [maxLoad, setMaxLoad] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [highlightKey, setHighlightKey] = useState(0);

  const currentModel: Puntal = puntalesData[modelIndex];

  useEffect(() => {
    setCurrentHeight(currentModel.minHeight);
  }, [modelIndex, currentModel.minHeight]);

  useEffect(() => {
    const calculateLoad = (model: Puntal, height: number): number => {
      const sortedTable = [...model.loadTable].sort((a, b) => a.height - b.height);
      for (const entry of sortedTable) {
        if (height <= entry.height) {
          return entry.load;
        }
      }
      return sortedTable[sortedTable.length - 1]?.load || 0;
    };

    const newLoad = calculateLoad(currentModel, currentHeight);
    if (newLoad !== maxLoad) {
      setMaxLoad(newLoad);
      setHighlightKey(prev => prev + 1);
    }
  }, [currentHeight, currentModel, maxLoad]);

  const SpecList = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
      <SpecItem icon={ArrowDownToLine} label="Altura Mínima" value={`${currentModel.minHeight} cm`} />
      <SpecItem icon={ArrowUpToLine} label="Altura Máxima" value={`${currentModel.maxHeight} cm`} />
      <SpecItem icon={Circle} label="Diámetro de Tubos" value={currentModel.tubeDiameter} />
      <SpecItem icon={Shield} label="Tipo de Acero" value={currentModel.steelType} />
      <SpecItem icon={BadgeCheck} label="Normas de Producción" value={currentModel.productionNorms} />
    </div>
  ), [currentModel]);


  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div
        key={currentModel.id}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start animate-in fade-in duration-500"
      >
        <div className="flex flex-col gap-8 sticky top-24">
          <Card className="overflow-hidden shadow-xl border-2 border-border/60">
            <Image
              src={currentModel.image}
              alt={`Puntal modelo ${currentModel.model}`}
              data-ai-hint={currentModel.dataAiHint}
              width={600}
              height={600}
              priority
              className="w-full h-auto object-cover aspect-square"
            />
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                Puntal Metálico Modelo {currentModel.model}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="model-slider" className="text-lg font-bold">Seleccionar Modelo</label>
                <Slider
                  id="model-slider"
                  min={0}
                  max={puntalesData.length - 1}
                  step={1}
                  value={[modelIndex]}
                  onValueChange={(value) => setModelIndex(value[0])}
                  className="mt-3"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  {puntalesData.map(p => <span key={p.id}>{p.model}</span>)}
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-baseline">
                  <label htmlFor="height-slider" className="text-lg font-bold">Ajustar Altura</label>
                  <p className="text-2xl font-bold text-primary tabular-nums">
                    {currentHeight.toFixed(0)} <span className="text-sm font-normal">cm</span>
                  </p>
                </div>
                <Slider
                  id="height-slider"
                  min={currentModel.minHeight}
                  max={currentModel.maxHeight}
                  step={1}
                  value={[currentHeight]}
                  onValueChange={(value) => setCurrentHeight(value[0])}
                  className="mt-3"
                />
                 <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>{currentModel.minHeight} cm</span>
                  <span>{currentModel.maxHeight} cm</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                <Weight className="w-7 h-7 text-primary" />
                <span>Capacidad de Carga</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-6xl md:text-7xl font-bold text-primary tabular-nums" key={highlightKey}>
                <span className="animate-highlight inline-block">{maxLoad.toLocaleString('es-ES')}</span>
              </p>
              <p className="text-muted-foreground mt-1">kg a {currentHeight.toFixed(0)} cm de altura</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Ficha Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              {SpecList}
            </CardContent>
          </Card>
          
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)} 
            className="w-full text-lg font-bold py-7 md:hidden sticky bottom-4 z-30 shadow-2xl"
          >
            <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
          </Button>
        </div>
      </div>
      <div className="hidden md:block mt-8 text-center">
         <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)} 
            className="text-lg font-bold py-7 px-10 shadow-lg"
          >
            <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
          </Button>
      </div>

      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
