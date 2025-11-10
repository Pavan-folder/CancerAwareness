import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Heart, Mail, User, MessageSquare, Menu, X } from "lucide-react";


export default function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    toast({
      title: "Message Received",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    form.reset();
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" data-testid="link-logo">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Cancer Awareness</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#hero" 
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="text-foreground font-medium hover-elevate py-2 px-1"
                data-testid="link-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="text-foreground font-medium hover-elevate py-2 px-1"
                data-testid="link-about"
              >
                About
              </a>

              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="text-foreground font-medium hover-elevate py-2 px-1"
                data-testid="link-contact"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
              <a 
                href="#hero" 
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                className="text-foreground font-medium hover-elevate py-2"
                data-testid="link-mobile-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="text-foreground font-medium hover-elevate py-2"
                data-testid="link-mobile-about"
              >
                About
              </a>

              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="text-foreground font-medium hover-elevate py-2"
                data-testid="link-mobile-contact"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Together We Fight,<br />Together We Hope
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Join our community of strength, support, and unwavering hope in the fight against cancer
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="backdrop-blur-md bg-primary/90 border border-primary-border"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-support"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Support
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-md bg-white/10 text-white border-white/30"
              onClick={() => scrollToSection('about')}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Awareness Message Section */}
      <section id="about" className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-foreground" data-testid="text-awareness-title">
            Understanding Cancer Awareness
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Cancer touches millions of lives each year, affecting not just patients but families, friends, and entire communities. 
              Through awareness, education, and support, we can make a meaningful difference in the fight against this disease.
            </p>
            <p>
              Early detection saves lives. Regular screenings, understanding warning signs, and maintaining healthy lifestyles are 
              crucial steps in cancer prevention. Our mission is to empower individuals with knowledge and connect them with the 
              resources they need.
            </p>
            <div className="bg-card border border-card-border rounded-lg p-8 my-8" data-testid="card-statistics">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground" data-testid="text-statistics-title">Key Statistics</h3>
              <ul className="space-y-3 text-card-foreground">
                <li className="flex items-start" data-testid="text-stat-diagnosis">
                  <span className="font-bold text-primary mr-2">•</span>
                  <span><strong>39.5%</strong> of people will be diagnosed with cancer at some point in their lifetime</span>
                </li>
                <li className="flex items-start" data-testid="text-stat-detection">
                  <span className="font-bold text-primary mr-2">•</span>
                  <span><strong>Early detection</strong> can increase survival rates by up to 90% for many cancer types</span>
                </li>
                <li className="flex items-start" data-testid="text-stat-support">
                  <span className="font-bold text-primary mr-2">•</span>
                  <span><strong>Support networks</strong> significantly improve quality of life and treatment outcomes</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-xl font-semibold text-primary" data-testid="text-support-message">
              You are not alone. We are here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section id="contact" className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[3fr,2fr] gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground" data-testid="text-contact-title">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or need support? We're here to help. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              placeholder="Your name" 
                              className="pl-10" 
                              {...field}
                              data-testid="input-name"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              type="email"
                              placeholder="your.email@example.com" 
                              className="pl-10" 
                              {...field}
                              data-testid="input-email"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="pl-10 min-h-[150px] resize-none" 
                              {...field}
                              data-testid="input-message"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-card-border" data-testid="card-contact-info">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-6" data-testid="text-contact-info-title">Contact Information</h3>
                  <div className="space-y-4 text-card-foreground">
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground" data-testid="text-contact-email">support@cancerawareness.org</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground" data-testid="text-contact-phone">1-800-HOPE-NOW</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Hours</p>
                      <p className="text-muted-foreground" data-testid="text-contact-hours">Monday - Friday: 9am - 5pm EST</p>
                      <p className="text-muted-foreground" data-testid="text-contact-crisis">24/7 Crisis Hotline Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20" data-testid="card-emergency">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid="text-emergency-title">Emergency Support</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed" data-testid="text-emergency-info">
                    If you're experiencing a medical emergency, please call 911 or visit your nearest emergency room immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center" data-testid="text-footer-brand">
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Cancer Awareness
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
                Empowering communities with knowledge, support, and hope in the fight against cancer.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground" data-testid="text-footer-quick-links">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover-elevate inline-block py-1" data-testid="link-footer-about">About Us</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover-elevate inline-block py-1" data-testid="link-footer-contact">Contact</a></li>

                <li><a href="#" className="hover-elevate inline-block py-1" data-testid="link-footer-support-groups">Support Groups</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground" data-testid="text-footer-resources">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-elevate inline-block py-1" data-testid="link-footer-prevention">Prevention Tips</a></li>
                <li><a href="#" className="hover-elevate inline-block py-1" data-testid="link-footer-treatment">Treatment Options</a></li>
                <li><a href="#" className="hover-elevate inline-block py-1" data-testid="link-footer-stories">Patient Stories</a></li>
                <li><a href="#" className="hover-elevate inline-block py-1" data-testid="link-footer-volunteer">Volunteer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p data-testid="text-footer-copyright">&copy; 2024 Cancer Awareness & Support. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover-elevate inline-block px-2" data-testid="link-footer-privacy">Privacy Policy</a> | 
              <a href="#" className="hover-elevate inline-block px-2" data-testid="link-footer-terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
