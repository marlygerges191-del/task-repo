import TaskCard from '../components/TaskCard';
function TaskSection() {
  return (
    <section className='team-section'>
    <div className="team-section-container">
      <div className="header-section">
        <h2>MEET OUR TEAM</h2>
        <h1>Our Creative Team</h1>
        <p>There are many variations of passages of Lorem Ipsum available...</p>
      </div>

      <div className="cards-wrapper">
        <TaskCard name="Dahlia Moore" role="Senior Manager" image="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg" />
        <TaskCard name="Jhone Digo" role="Marketing" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
        <TaskCard name="Zara Tingo" role="Web Developer" image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
        <TaskCard name="David Zone" role="SEO Expert" image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" />
      </div>
    </div>
    </section>
  );
}

export default TaskSection;