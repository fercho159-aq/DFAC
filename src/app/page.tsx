
"use client";

import { useState } from 'react';
import Image from 'next/image';
import PuntalSelector from '@/components/puntal-selector';
import { DfacLogo } from '@/components/icons';
import { Phone, MessageSquare, Menu, X, CheckCircle, Shield, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contacto', label: 'Contacto' },
];

const clientes = [
  { name: 'Constructora 1', logo: 'https://placehold.co/150x70.png' },
  { name: 'Constructora 2', logo: 'https://placehold.co/150x70.png' },
  { name: 'Constructora 3', logo: 'https://placehold.co/150x70.png' },
  { name: 'Constructora 4', logo: 'https://placehold.co/150x70.png' },
  { name: 'Constructora 5', logo: 'https://placehold.co/150x70.png' },
  { name: 'Constructora 6', logo: 'https://placehold.co/150x70.png' },
];

const beneficios = [
  {
    icon: Shield,
    title: 'Seguridad en Obra',
    description: 'Nuestros puntales cumplen con las más altas normas de seguridad para garantizar la protección en tu proyecto.'
  },
  {
    icon: BarChart,
    title: 'Versatilidad y Aplicaciones',
    description: 'Con un amplio rango de alturas, se adaptan a cualquier necesidad de encofrado y cimbra.'
  },
  {
    icon: CheckCircle,
    title: 'Montaje Rápido',
    description: 'Diseñados para un ensamblaje y desmontaje eficiente, optimizando los tiempos de trabajo.'
  },
  {
    icon: Users,
    title: 'Durabilidad Comprobada',
    description: 'Fabricados con acero de alta calidad que asegura una larga vida útil y resistencia a la corrosión.'
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#inicio" onClick={(e) => handleNavLinkClick(e, '#inicio')} className="flex items-center gap-3">
            <DfacLogo className="h-8 w-auto text-primary" />
            <span className="sr-only">DFAC Accesorios para Cimbras</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex">
              Solicitar Cotización
            </Button>
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="lg:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-base font-medium text-foreground hover:text-primary transition-colors py-2">
                  {link.label}
                </a>
              ))}
              <Button onClick={() => setIsModalOpen(true)} className="w-full mt-2">
                Solicitar Cotización
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="inicio" className="relative text-center py-20 md:py-32 px-4 bg-secondary/30">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">
                    Puntales Metálicos Extensibles de Alta Resistencia
                </h1>
                <p className="mt-4 md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Seguridad, durabilidad y precisión en cada obra. La solución ideal para tus proyectos de construcción.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" onClick={() => setIsModalOpen(true)}>
                        <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
                    </Button>
                </div>
            </div>
        </section>

        <section id="nosotros" className="py-16 md:py-24 px-4">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-0 slide-in-from-left-12 duration-500">
              <h2 className="text-3xl font-bold text-primary mb-4">Sobre Nosotros</h2>
              <p className="text-muted-foreground mb-4">
                Con más de 20 años de experiencia en el sector de la construcción, en DFAC nos especializamos en proveer accesorios para cimbras de la más alta calidad. Nuestra misión es garantizar la seguridad y eficiencia en cada obra a través de productos innovadores y un servicio excepcional.
              </p>
              <p className="text-muted-foreground">
                Nuestros valores son la <span className="font-bold text-primary/90">seguridad</span>, la <span className="font-bold text-primary/90">calidad</span> y la <span className="font-bold text-primary/90">innovación</span>, pilares que nos han consolidado como líderes en el mercado.
              </p>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-right-12 duration-500">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Equipo de DFAC en obra"
                data-ai-hint="construction team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="modelos" className="py-16 md:py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary">Selector Interactivo de Puntales</h2>
              <p className="text-muted-foreground mt-2">
                Encuentra el puntal perfecto para tu proyecto. Ajusta el modelo y la altura para ver la capacidad de carga en tiempo real.
              </p>
            </div>
            <PuntalSelector />
          </div>
        </section>
        
        <section id="beneficios" className="py-16 md:py-24 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-primary">Beneficios y Casos de Uso</h2>
                    <p className="text-muted-foreground mt-2">
                        Nuestros puntales están diseñados para ofrecer el máximo rendimiento en cualquier situación.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {beneficios.map((item, index) => (
                        <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <item.icon className="w-12 h-12 text-primary"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="clientes" className="py-16 md:py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary">Nuestros Clientes</h2>
              <p className="text-muted-foreground mt-2">
                Empresas líderes en la industria de la construcción confían en la calidad y seguridad de los productos DFAC.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {clientes.map((cliente, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="flex items-center justify-center p-6 h-32 bg-background">
                         <Image src={cliente.logo} alt={cliente.name} width={120} height={50} className="object-contain" data-ai-hint="company logo" />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>

        <section id="contacto" className="py-16 md:py-24 px-4 text-center bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Solicita tu cotización ahora y optimiza tu obra.</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Nuestro equipo está listo para asesorarte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
                <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
              </Button>
              <a href="tel:+525512345678" className="flex items-center gap-2 hover:underline">
                <Phone className="w-5 h-5" />
                <span>Llámanos: 55 1234 5678</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground border-t">
        <div className="container mx-auto py-8 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg mb-2">DFAC Accesorios para Cimbras</h3>
              <p className="text-sm">Dirección de la Empresa, Ciudad, Estado, CP.</p>
              <p className="text-sm">contacto@dfac.com.mx</p>
            </div>
            <div>
               <h3 className="font-bold text-lg mb-2">Enlaces Rápidos</h3>
               <nav className="flex flex-col gap-2">
                 {navLinks.map(link => (
                   <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-sm hover:text-primary transition-colors">
                     {link.label}
                   </a>
                 ))}
               </nav>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Contacto Directo</h3>
              <div className="flex flex-col items-center md:items-start gap-2 text-sm">
                 <a href="tel:+525512345678" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>55 1234 5678</span>
                </a>
                <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground mt-8 border-t border-border/40 pt-6">
            <p>&copy; {new Date().getFullYear()} DFAC. Todos los derechos reservados. | <a href="#" className="hover:underline">Aviso de Privacidad</a></p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
       <Button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 z-40 sm:hidden rounded-full shadow-lg p-4 h-16 w-16"
        )}
      >
        <MessageSquare className="h-7 w-7" />
        <span className="sr-only">Solicitar Cotización</span>
      </Button>
    </div>
  );
}

    