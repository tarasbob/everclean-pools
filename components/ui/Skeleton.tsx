interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "button";
  count?: number;
}

export default function Skeleton({ 
  className = "", 
  variant = "text",
  count = 1 
}: SkeletonProps) {
  const baseClasses = "skeleton";
  
  const variantClasses = {
    text: "h-4 w-full rounded",
    card: "h-64 w-full rounded-lg",
    image: "h-48 w-full rounded-lg",
    button: "h-10 w-32 rounded-md",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (count > 1) {
    return (
      <div className="space-y-3">
        {[...Array(count)].map((_, index) => (
          <div key={index} className={classes} />
        ))}
      </div>
    );
  }
  
  return <div className={classes} />;
} 