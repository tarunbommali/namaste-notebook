import { Link } from "react-router-dom";
import { BookOpen, Code } from "lucide-react";

const HeroCard = ({ course, totalEpisodes, theme }) => {
  return (
    <Link
      to={course.id}
      key={course.id}
      className={`
                  group relative overflow-hidden rounded-2xl md:rounded-3xl border cursor-pointer
                  ${theme.cardBg} ${theme.cardBorder} ${theme.cardShadow}
                  hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25
                  transition-all duration-500
                `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4 md:p-6 lg:p-8">
        <div className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
          <span><course.icon /></span>
        </div>

        <h2
          className={`
                    text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 transition-colors
                    ${theme.textPrimary} group-hover:${theme.textAccent}
                  `}
        >
          {course.courseTitle}
        </h2>

        <p
          className={`mb-4 md:mb-6 line-clamp-3 leading-relaxed text-sm md:text-base ${theme.textSecondary}`}
        >
          {course.description}
        </p>

        <div
          className={`flex items-center justify-between text-xs md:text-sm font-medium ${theme.textMuted}`}
        >
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">
              {course.seasons.length} Seasons
            </span>
            <span className="sm:hidden">{course.seasons.length}S</span>
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">{totalEpisodes} Episodes</span>
            <span className="sm:hidden">{totalEpisodes}E</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
