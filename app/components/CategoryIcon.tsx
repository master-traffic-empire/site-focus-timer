// CategoryIcon stub — required by @base/components/CategoryCard
export function CategoryIcon({ name, icon, size = 24 }: { name?: string; icon?: string; size?: number }) {
  return (
    <span style={{ fontSize: size, lineHeight: 1 }}>{icon || name || ""}</span>
  )
}
