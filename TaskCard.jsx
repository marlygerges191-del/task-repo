function TaskCard({name, role, image}){
    return(
        <div className="card">
            <div className="image-container">
              <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
    );
}
export default TaskCard;