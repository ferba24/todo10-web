
export default function Button({type = 'primary', children, onClick}) {
 const bgClass = type == 'primary' ? 'bg-orange': ''
 const textColorClass = type == 'primary' ? 'text-white': ''

  return (
    <button 
      className={`p-2 rounded-sm ${bgClass} & ${textColorClass}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}