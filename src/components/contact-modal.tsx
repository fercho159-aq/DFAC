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

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Solicitar Cotización</DialogTitle>
          <DialogDescription>
            Ponte en contacto con nuestro equipo de ventas para obtener una cotización personalizada.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Button asChild size="lg" className="w-full">
            <a href="tel:+525512345678" className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
          </Button>
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
