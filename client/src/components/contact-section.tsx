import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  serviceInterest: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
  budget: z.string().min(1, "Please select a budget range"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      serviceInterest: "",
      projectDetails: "",
      budget: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // For static hosting, create mailto link with form data
      const subject = encodeURIComponent(`${data.serviceInterest} Inquiry from ${data.firstName} ${data.lastName}`);
      const body = encodeURIComponent(
        `Hello Arnalsteen Solutions,\n\n` +
        `Name: ${data.firstName} ${data.lastName}\n` +
        `Email: ${data.email}\n` +
        `Service Interest: ${data.serviceInterest}\n` +
        `Budget Range: ${data.budget}\n` +
        `Project Details:\n${data.projectDetails}\n\n` +
        `Best regards,\n${data.firstName}`
      );
      
      const mailtoLink = `mailto:info@arnalsteensolutions.nl?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Email Client Opened!",
        description: "Your email client should open with the pre-filled message. If not, please email us directly at info@arnalsteensolutions.nl",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Please Email Us Directly",
        description: "Contact us at info@arnalsteensolutions.nl for immediate assistance.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@arnalsteensolutions.nl",
      gradient: "from-[#FF0080] to-[#FF1493]",
      border: "border-[#FF0080]/20",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+31 6 1234 5678",
      gradient: "from-[#00FFFF] to-[#8A2BE2]",
      border: "border-[#00FFFF]/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Netherlands",
      gradient: "from-[#FFD700] to-[#FF0080]",
      border: "border-[#FFD700]/20",
    },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-gray-900 to-[#0A0A0A]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black font-[Montserrat] mb-8">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF0080] bg-clip-text text-transparent">
              LET'S CREATE
            </span>
            <br />
            <span className="text-white">SOMETHING AMAZING</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with next-generation IT solutions? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            className="bg-gray-900/50 border-[#FF0080]/20 rounded-xl text-white placeholder-gray-400 focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-300">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            className="bg-gray-900/50 border-[#FF0080]/20 rounded-xl text-white placeholder-gray-400 focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-900/50 border-[#00FFFF]/20 rounded-xl text-white placeholder-gray-400 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">
                        Service Interest
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-900/50 border-[#FFD700]/20 rounded-xl text-white focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development & Hosting</SelectItem>
                          <SelectItem value="cloud-storage">Cloud Storage & Sync</SelectItem>
                          <SelectItem value="task-automation">Task Automation</SelectItem>
                          <SelectItem value="complete-transformation">Complete Digital Transformation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">
                        Project Details
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tell us about your project vision, goals, and requirements..."
                          className="bg-gray-900/50 border-[#8A2BE2]/20 rounded-xl text-white placeholder-gray-400 focus:border-[#8A2BE2] focus:ring-2 focus:ring-[#8A2BE2]/20 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-300">
                        Project Budget
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-900/50 border-[#FF0080]/20 rounded-xl text-white focus:border-[#FF0080] focus:ring-2 focus:ring-[#FF0080]/20">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="500-1000">€500 - €1,000</SelectItem>
                          <SelectItem value="1000-2500">€1,000 - €2,500</SelectItem>
                          <SelectItem value="2500-5000">€2,500 - €5,000</SelectItem>
                          <SelectItem value="5000+">€5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-[#FF0080] via-[#00FFFF] to-[#FFD700] py-4 rounded-xl font-semibold text-lg neon-border"
                  >
                    <Rocket className="mr-2" size={20} />
                    {contactMutation.isPending ? "Launching..." : "Launch Your Project"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="space-y-12"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold font-[Montserrat] mb-6 electric">
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ready to revolutionize your business with cutting-edge technology? Let's connect and discuss how we can bring your digital vision to life.
              </p>
            </div>
            
            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className={`flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r ${info.gradient.replace('to-', 'to-').split(' ').map(c => c + '/10').join(' ')} border ${info.border}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-white mb-4">Follow the Journey</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { icon: "💼", gradient: "from-[#FF0080] to-[#FF1493]" },
                  { icon: "💻", gradient: "from-[#00FFFF] to-[#8A2BE2]" },
                  { icon: "🐦", gradient: "from-[#FFD700] to-[#FF0080]" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
