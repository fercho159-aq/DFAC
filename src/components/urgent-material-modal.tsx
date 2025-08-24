
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, X } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface UrgentMaterialModalProps {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export function UrgentMaterialModal({ isOpen, onOpenChange }: UrgentMaterialModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary font-bold">
            SI NECESITAS MATERIAL URGENTE, ¡DA CLIC AQUÍ!
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-muted-foreground">
            Nuestro equipo está listo para atender tu pedido de inmediato.
          </p>
          <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
            <a href="https://wa.me/5215549414017?text=Hola,%20necesito%20material%20urgente." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              <MessageSquare className="h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" className="w-full">
            <a href="tel:+525525989751" className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              Llamar Ahora: (55) 2598-9751
            </a>
          </Button>
        </div>
         <Button variant="ghost" onClick={() => onOpenChange(false)} className="mx-auto text-sm text-muted-foreground">
            Cerrar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
