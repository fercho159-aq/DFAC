
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PuntalSelector from '@/components/puntal-selector';
import { Phone, MessageSquare, Menu, X, CheckCircle, Shield, Users, Truck, Clock, PackageCheck, Quote, Wrench, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';
import { UrgentMaterialModal } from '@/components/urgent-material-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import { FacebookIcon } from '@/components/icons';
import { Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#nosotros', label: 'Nosotros' },
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
    icon: Truck,
    title: 'Entrega en Menos de 24h',
    description: 'Recibe tu material en obra con nuestra garantía de entrega express para no detener tu proyecto.'
  },
  {
    icon: Shield,
    title: 'Seguridad en Obra',
    description: 'Nuestros puntales cumplen con las más altas normas de seguridad para garantizar la protección en tu proyecto.'
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

const featuredProducts = [
    {
        name: 'Junta Ortogonal 4 Tornillos en Chapa Prensada',
        description: 'Asegura uniones firmes y estables a 90 grados en andamios. Esencial para la seguridad estructural.',
        image: 'https://placehold.co/600x400.png',
        hint: 'scaffolding clamp',
        icon: Wrench
    },
    {
        name: 'Junta Giratoria 2 Tornillos',
        description: 'Permite uniones en ángulos variables con total seguridad. Perfecta para estructuras complejas y versátiles.',
        image: 'https://placehold.co/600x400.png',
        hint: 'swivel coupler',
        icon: Layers
    }
];

const heroFeatures = [
    {
        icon: Clock,
        title: "Entrega 24h",
        description: "En CDMX y área metropolitana"
    },
    {
        icon: PackageCheck,
        title: "Calidad Garantizada",
        description: "Productos certificados"
    },
    {
        icon: Truck,
        title: "Flete Gratis",
        description: "En CDMX y Zona Metropolitana"
    }
];

const testimonials = [
    {
        name: "Carlos Hernández",
        company: "Director de Obra, Construmex",
        comment: "La calidad de los puntales es excepcional y el servicio de entrega en menos de 24 horas es un salvavidas. Totalmente recomendados.",
        avatar: "https://placehold.co/100x100?text=CH"
    },
    {
        name: "Ana Sofía Robles",
        company: "Gerente de Compras, Edificaciones Modernas",
        comment: "DFAC es nuestro proveedor de confianza. Siempre cumplen con los tiempos y la calidad del material nos da la seguridad que necesitamos en cada proyecto.",
        avatar: "https://placehold.co/100x100?text=AR"
    },
    {
        name: "Jorge Martínez",
        company: "Residente de Obra",
        comment: "El sistema de selección en la web me ayudó a encontrar exactamente lo que necesitaba y la cotización fue inmediata. Excelente servicio.",
        avatar: "https://placehold.co/100x100?text=JM"
    }
];

const galleryImages = [
    { src: 'https://placehold.co/600x400.png', alt: 'Puntales en obra de gran altura', hint: 'construction site' },
    { src: 'https://placehold.co/600x400.png', alt: 'Almacén de puntales metálicos', hint: 'construction equipment' },
    { src: 'https://placehold.co/600x400.png', alt: 'Detalle de puntal de acero reforzado', hint: 'steel props' },
    { src: 'https://placehold.co/600x400.png', alt: 'Trabajadores ajustando puntales', hint: 'construction workers' },
    { src: 'https://placehold.co/600x400.png', alt: 'Vista panorámica de cimbra con puntales', hint: 'formwork structure' },
    { src: 'https://placehold.co/600x400.png', alt: 'Puntales listos para entrega', hint: 'building materials' },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Show the modal only once per session
      if (!sessionStorage.getItem('urgentModalShown')) {
        setIsUrgentModalOpen(true);
        sessionStorage.setItem('urgentModalShown', 'true');
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#inicio" onClick={(e) => handleNavLinkClick(e, '#inicio')} className="flex items-center gap-3">
            <Image src="/images/Recurso-2.png.webp" alt="DFAC Accesorios para Cimbras Logo" width={180} height={40} className="h-10 w-auto" />
            <span className="sr-only">DFAC Accesorios para Cimbras</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex">
              Solicitar Cotización
            </Button>
            <div className="flex gap-4 items-center">
              <a href="https://www.facebook.com/bandasdepvcymonosparacimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
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
              <Button onClick={() => setIsModalOpen(true)} className="w-full mt-4">
                Solicitar Cotización
              </Button>
               <div className="flex gap-4 items-center justify-center mt-4">
                <a href="https://www.facebook.com/bandasdepvcymonosparacimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="inicio" className="relative bg-black text-white">
           <div className="relative w-full aspect-[1/1] sm:aspect-[16/9] md:aspect-[16/7]">
              <Image
                  src="/images/4c05f0c3-bb8a-4eed-a528-2f71b8b52594.jpg"
                  alt="Puntales Metálicos en Obra"
                  fill
                  className="object-cover"
                  data-ai-hint="construction site"
                  priority
              />
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full py-16 md:py-24">
                  <div className="max-w-4xl">
                      <div className="inline-block bg-primary/20 text-accent px-3 py-1 rounded-full text-sm mb-4 border border-accent/50">
                          ¡Entrega garantizada en menos de 24 horas!
                      </div>
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                          Tus materiales de <span className="text-accent">construcción</span> en tiempo récord
                      </h1>
                      <p className="mt-4 md:text-xl text-white/80 max-w-3xl mx-auto">
                          Más de 10 años distribuyendo herramientas y accesorios para la construcción. Calidad profesional con la rapidez que tu proyecto necesita.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                          <Button size="lg" onClick={() => setIsModalOpen(true)}>
                              <MessageSquare className="mr-2 h-5 w-5"/> Cotizar Ahora
                          </Button>
                          <Button size="lg" variant="outline" className="bg-transparent text-white border-white/80 hover:bg-white hover:text-primary">
                               Ver Catálogo
                          </Button>
                      </div>

                       <div className="mt-16 w-full max-w-5xl mx-auto">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                             {heroFeatures.map((feature, index) => (
                               <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-white/20">
                                 <feature.icon className="w-8 h-8 text-accent"/>
                                 <div>
                                     <h3 className="font-bold text-white">{feature.title}</h3>
                                     <p className="text-white/80 text-sm">{feature.description}</p>
                                 </div>
                               </div>
                             ))}
                         </div>
                       </div>
                  </div>
              </div>
           </div>
        </section>

        <section id="beneficios" className="py-16 md:py-24 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-primary">El Aliado Perfecto para tu Obra</h2>
                    <p className="text-muted-foreground mt-2">
                        Nuestros puntales están diseñados para ofrecer el máximo rendimiento y seguridad en cualquier situación.
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

        <section id="modelos" className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary">Encuentra tu Puntal y Cotiza</h2>
              <p className="text-muted-foreground mt-2">
                Selecciona el modelo que necesitas y ajusta la altura para ver la capacidad de carga. ¡Obtén una cotización al instante!
              </p>
            </div>
            <PuntalSelector />
          </div>
        </section>

        <section id="accesorios" className="py-16 md:py-24 px-4 bg-secondary/30">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-primary">Completa tu Equipo con Nuestros Accesorios</h2>
                    <p className="text-muted-foreground mt-2">
                        Asegura la máxima versatilidad y seguridad en tu obra con nuestras juntas de alta resistencia.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {featuredProducts.map((product, index) => (
                        <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardHeader className="p-0">
                                <Image 
                                    src={product.image}
                                    alt={product.name}
                                    width={600}
                                    height={400}
                                    className="object-cover aspect-[3/2] w-full"
                                    data-ai-hint={product.hint}
                                />
                            </CardHeader>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <product.icon className="w-6 h-6 text-primary" />
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                </div>
                                <CardDescription className="mb-4 flex-grow">{product.description}</CardDescription>
                                <Button onClick={() => setIsModalOpen(true)} className="w-full mt-auto">
                                    Solicitar Cotización
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="galeria" className="py-16 md:py-24 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary">Nuestros Productos en Acción</h2>
              <p className="text-muted-foreground mt-2">
                Vea la calidad y versatilidad de nuestros puntales en proyectos de construcción reales.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
               plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden group">
                        <CardContent className="p-0 relative">
                          <Image 
                            src={image.src} 
                            alt={image.alt} 
                            width={600} 
                            height={400} 
                            className="object-cover aspect-[3/2] w-full h-full transition-transform duration-300 group-hover:scale-105" 
                            data-ai-hint={image.hint} 
                          />
                           <div className="absolute inset-0 bg-black/20"></div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </section>
        
        <section id="testimonios" className="py-16 md:py-24 px-4">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-primary">Lo que dicen nuestros clientes</h2>
                    <p className="text-muted-foreground mt-2">
                        La confianza y satisfacción de nuestros clientes es nuestra mejor carta de presentación.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col justify-between p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-background">
                            <CardContent className="p-0">
                                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                                <p className="text-muted-foreground mb-6">{testimonial.comment}</p>
                            </CardContent>
                            <CardHeader className="p-0 flex flex-row items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait"/>
                                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="nosotros" className="py-16 md:py-24 px-4 bg-secondary/30">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-0 slide-in-from-left-12 duration-500">
              <h2 className="text-3xl font-bold text-primary mb-4">Más de 10 Años de Experiencia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Desde 2013, en DFAC nos hemos dedicado a ofrecer un servicio rápido y eficiente, convirtiéndonos en un referente de confianza en el sector.
                </p>
                <p>
                  Nuestra filosofía de excelencia nos ha permitido crecer y equiparnos con maquinaria especializada para fabricar productos de la más alta calidad, garantizando entregas rápidas y la satisfacción de nuestros clientes.
                </p>
                <p>
                  Hoy, agradecemos a quienes confían en nosotros y seguimos comprometidos con los valores que nos vieron nacer.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-right-12 duration-500 overflow-hidden rounded-lg shadow-xl">
               <video
                  className="w-full h-auto object-cover"
                  src="/videos/VIDEO-2025-08-05-12-37-33.mp4"
                  width={600}
                  height={400}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Tu navegador no soporta el tag de video.
                </video>
            </div>
          </div>
        </section>
        
        

        <section id="clientes" className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary">Confían en Nosotros</h2>
              <p className="text-muted-foreground mt-2">
                Empresas líderes en la industria de la construcción respaldan la calidad y seguridad de los productos DFAC.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {clientes.map((cliente, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                    <div className="p-1">
                      <Card className="flex items-center justify-center p-6 h-32 bg-background">
                         <Image src={cliente.logo} alt={cliente.name} width={120} height={50} className="object-contain" data-ai-hint="company logo" />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <section id="contacto" className="py-16 md:py-24 px-4 text-center bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">¿Listo para Optimizar tu Obra?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Contacta ahora y recibe tu material en menos de 24 horas. ¡Garantizado!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
                <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
              </Button>
              <a href="tel:+525525989751" className="flex items-center gap-2 hover:underline text-lg">
                <Phone className="w-5 h-5" />
                <span>Llámanos: (55) 2598-9751</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground border-t">
        <div className="container mx-auto py-8 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
            <div className="md:col-span-1">
               <Image src="https://cimbrayaccesorios.com.mx/wp-content/uploads/2020/09/Recurso-2.png.webp" alt="DFAC Accesorios para Cimbras Logo" width={180} height={40} className="h-10 w-auto mx-auto md:mx-0" />
              <p className="text-sm mt-4">Cuauhtémoc 105, San Pedro Iztacalco, Iztacalco, 08220 Ciudad de México, CDMX</p>
              <p className="text-sm">ventas@cimbrayaccesorios.com.mx</p>
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
                 <a href="tel:+525525989751" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 2598-9751</span>
                </a>
                 <a href="tel:+525541673745" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 4167-3745</span>
                </a>
                 <a href="tel:+525555715084" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 5571-5084</span>
                </a>
              </div>
            </div>
             <div>
              <h3 className="font-bold text-lg mb-2">Síguenos</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.facebook.com/bandasdepvcymonosparacimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
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
      <UrgentMaterialModal isOpen={isUrgentModalOpen} onOpenChange={setIsUrgentModalOpen} />
       <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <Button
          asChild
          className={cn(
            "rounded-full shadow-lg p-4 h-16 w-16 bg-green-500 hover:bg-green-600"
          )}
        >
          <a href="https://wa.me/5215549414017?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización." target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-7 w-7 text-white" />
            <span className="sr-only">Contactar por WhatsApp</span>
          </a>
        </Button>
        <Button
          asChild
          className={cn(
            "rounded-full shadow-lg p-4 h-16 w-16"
          )}
        >
          <a href="tel:+525525989751">
            <Phone className="h-7 w-7" />
            <span className="sr-only">Llamar ahora</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

    