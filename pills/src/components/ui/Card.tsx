// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  bordered?: boolean;
}

export function Card({ 
  children, 
  title, 
  className = '', 
  shadow = 'xl',
  bordered = false 
}: CardProps) {
  const shadowClass = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  }[shadow];

  return (
    <div className={`card bg-base-100 ${shadowClass} ${bordered ? 'border border-base-300' : ''} ${className}`}>
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export function CardActions({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`card-actions ${className}`}>
      {children}
    </div>
  );
}
