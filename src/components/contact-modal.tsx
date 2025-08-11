"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const phoneNumbers = [
  { display: "(55) 2598-9751", tel: "+525525989751" },
  { display: "(55) 4167-3745", tel: "+525541673745" },
  { display: "(55) 5571-5084", tel: "+525555715084" },
];

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Contacta con un Asesor</DialogTitle>
          <DialogDescription>
            Elige tu método de contacto preferido. Nuestro equipo está listo para ayudarte.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-3">
           <h3 className="text-sm font-medium text-muted-foreground text-center">Llamar a oficina</h3>
          {phoneNumbers.map((phone, index) => (
             <Button key={index} asChild size="lg" className="w-full">
              <a href={`tel:${phone.tel}`} className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" />
                Llamar a {phone.display}
              </a>
            </Button>
          ))}
          
           <h3 className="text-sm font-medium text-muted-foreground text-center pt-3">Enviar mensaje</h3>
          <Button asChild variant="secondary" size="lg" className="w-full">
            <a href="https://wa.me/5215549414017?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20para%20puntales." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              <MessageSquare className="h-5 w-5" />
              Enviar WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
