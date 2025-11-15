 <div className="relative w-full flex items-center justify-center">
          {/* Full testimonial */}
          <motion.div
            layout
            key={firstTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-linear-to-r from-[#007BFF] to-[#58C9EC] text-white rounded-3xl p-8 flex gap-8 w-[70%] shadow-xl z-10 relative"
          >
            <div className="flex-shrink-0">
              <Image
                src={firstTestimonial.image}
                alt={firstTestimonial.name}
                width={300}
                height={350}
                className="object-contain rounded-3xl h-80 w-auto mb-4 md:mb-2 md:mr-6"
              />

              <h4 className="text-lg font-semibold text-center">
                {firstTestimonial.name}
              </h4>
              <p className="text-sm opacity-80 text-center">
                {firstTestimonial.title}
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base font-light leading-relaxed mb-3">
                {firstTestimonial.feedback}
              </p>
            </div>
          </motion.div>

          {/* Partial testimonial (desktop) */}
          <motion.div
            layout
            key={secondTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="bg-linear-to-r from-[#007BFF]/70 to-[#58C9EC]/70 text-white rounded-3xl p-6 flex flex-col items-center shadow-xl w-[25%] absolute right-0 top-0 z-0"
          >
            <Image
              src={secondTestimonial.image}
              alt={secondTestimonial.name}
              width={220}
              height={260}
              className="object-cover rounded-2xl h-64 w-auto mb-4 md:mb-2"
            />
            <h4 className="text-sm font-semibold text-center">
              {secondTestimonial.name}
            </h4>
            <p className="text-sm opacity-80 text-center">
              {secondTestimonial.title}
            </p>
          </motion.div>
        </div>