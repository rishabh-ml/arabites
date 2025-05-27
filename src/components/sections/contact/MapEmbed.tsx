"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function MapEmbed() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-[var(--neutral-900)] mb-2 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[var(--primary)]" />
            Our Location
          </h3>
          <p className="text-[var(--neutral-600)]">
            Located in the heart of Dubai's business district
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-xl border border-[var(--neutral-200)] overflow-hidden shadow-lg"
        >
          {/* Placeholder Map */}
          <div className="aspect-video bg-gradient-to-br from-[var(--neutral-100)] to-[var(--neutral-200)] relative overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(var(--neutral-300) 1px, transparent 1px),
                                 linear-gradient(90deg, var(--neutral-300) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Location Marker */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center shadow-lg"
                >
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Pulse Effect */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[var(--primary)] rounded-full"
                />
              </div>
            </motion.div>

            {/* Map Labels */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
              <div className="text-sm font-medium text-[var(--neutral-900)]">Business Bay</div>
              <div className="text-xs text-[var(--neutral-600)]">Dubai, UAE</div>
            </div>

            {/* Compass */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
            >
              <Navigation className="w-4 h-4 text-[var(--primary)]" />
            </motion.div>
          </div>

          {/* Map Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-white">
              <h4 className="font-bold mb-1">Arabites Digital Agency</h4>
              <p className="text-white/90 text-sm mb-3">Business Bay, Dubai, UAE</p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  href="https://maps.google.com/?q=Dubai+Business+Bay"
                  external
                  className="border-white/30 text-white hover:bg-white hover:text-[var(--neutral-900)] text-xs"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Open in Maps
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  href="https://maps.google.com/dir/?api=1&destination=Dubai+Business+Bay"
                  external
                  className="border-white/30 text-white hover:bg-white hover:text-[var(--neutral-900)] text-xs"
                >
                  <Navigation className="w-3 h-3 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Address Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 bg-white rounded-lg p-4 border border-[var(--neutral-200)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-[var(--neutral-900)]">Address:</span>
              <p className="text-[var(--neutral-600)] mt-1">
                Business Bay District<br />
                Dubai, UAE
              </p>
            </div>
            <div>
              <span className="font-medium text-[var(--neutral-900)]">Nearby Landmarks:</span>
              <p className="text-[var(--neutral-600)] mt-1">
                Dubai Mall (10 min)<br />
                Burj Khalifa (12 min)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
