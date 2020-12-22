
export default function Button({type = 'primary', children, onClick}) {
 const bgClass = type == 'primary' ? 'bg-orange': 'bg-white'
 const textColorClass = type == 'primary' ? 'text-white': 'text-primary'
 const borderClass = type == 'outline' ? 'border-2 border-blue'  : ''
 return (
    <button 
      className={`py-1 px-3  rounded-md ${bgClass} ${borderClass} ${textColorClass}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}