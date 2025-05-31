
import {  ArrowRight, Star } from "lucide-react";


const HeroSection = ({theme}) => {
  return (
    <div className="pt-16 md:pt-20 pb-12 md:pb-16 text-center">
          <div className="mb-6 md:mb-8">
            <span
              className={`
              inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium
                ${theme.cardBorder} border animate-pulse
            `}
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 fill-current" />
              By The Student of NamasteDev 💖
            </span>
          </div>

          <h1
            className={`
            text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight px-2
            ${theme.textPrimary}
          `}
          >
            The Documentation makes
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              hands-on learning much easier.
            </span>
          </h1>

          <p
            className={`
            text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed px-4
            ${theme.textSecondary}
          `}
          >
            Your comprehensive documentation hub for Namaste Dev courses.
            Explore detailed notes, code examples, and insights from every
            episode. The perfect starting point to dive into theory and
            practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
            <a
              href="https://github.com/tarunbommali/namaste-notebook"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300
                ${theme.btnPrimary} hover:scale-105 hover:shadow-xl
                flex items-center justify-center gap-2 min-w-[180px] md:min-w-[200px]
              `}
            >
              Contribute Notes on Git
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a
              href="https://namastedev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-6 py-3 md:px-8 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300
                ${theme.btnSecondary} hover:scale-105 hover:shadow-xl
                flex items-center justify-center gap-2 min-w-[180px] md:min-w-[200px]
              `}
            >
              Browse Courses
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

  )
}

export default HeroSection