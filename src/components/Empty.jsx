
const Empty = ({theme}) => {
  return (
    <div className="text-center py-12 md:py-16 px-4">
            <div className="text-4xl md:text-6xl mb-4">🔍</div>
            <p className={`text-lg md:text-xl ${theme.textSecondary}`}>
              No courses found matching your search.
            </p>
            <p className={`text-sm md:text-base mt-2 ${theme.textMuted}`}>
              Try searching for "React", "JavaScript", or "Node.js"
            </p>
          </div>
  )
}

export default Empty