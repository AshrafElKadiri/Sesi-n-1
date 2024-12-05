import ActivityItem from "./activityitem";

ActivityItem
function Content(){
    return (
        <div className="content">
            <div className="line"></div>
            <ActivityItem time="Hace una hora" descripcion ="Fui a comer con amigos" valorAlt ="Francisca" nombreImagen="francisca" />
            <ActivityItem time="10:00 am" descripcion ="Leí un artículo sobre tecnología" valorAlt ="Paco" nombreImagen="paco" />
            <ActivityItem time="10:00 am" descripcion ="Escribí notas sobre un proyecto importante" valorAlt ="Quica" nombreImagen="quica" />
            <ActivityItem time="2:21 pm" descripcion ="Preparé la presentación para la reunión de mañana" valorAlt ="Curro" nombreImagen="curro" />
        </div>
  );
}

export default Content;