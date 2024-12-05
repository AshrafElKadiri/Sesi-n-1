interface ActivityItemProps {
    time: string;
    descripcion: string;
    valorAlt:string;
    nombreImagen:string;
}
  
function ActivityItem({ time, descripcion, valorAlt, nombreImagen }: ActivityItemProps) {
    return (
      <div className="item">
      <div className="avatar">
      <img alt={valorAlt} src={`/images/${nombreImagen}.jpg`} />
      </div>
      <span className="time">{time}</span>
      <p>{descripcion}</p>
      </div>
    );
}
  
export default ActivityItem;
  