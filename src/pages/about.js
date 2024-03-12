import GokulPhoto from "../assets/gokul.jpg";
export default function About() {
  return (
    <div className='contaner my-5'>
      <div className='row'>
        <div className='col-8 px-5'>
          <h2 className='font-bold mb-4'>
            Hey, I'm Gokul
            <span role='img' aria-label='wave'>
              👋
            </span>
          </h2>
          <p>
            I'm a Software Developer based in Chennai, India. I have over 5
            years experience in the industry and now focus on building full
            stack applications using React, Angular, Python(Django), Postgres,
            AWS.
          </p>
          <p>
            My coding journey started unexpectedly in my thrid year of
            University in 2016. Coding was so cool, so I planned to become a
            software develoepr. I've been working in the industry since
            graduating in 2019 with a first class honours.
          </p>
          <p>
            An effective communicator with strong relationship building,
            presentation &nbsp; decision-making skills with proficiency in
            grasping new technical concepts quickly and utilising the same in a
            productive manner. Worked in Agile software development model.
          </p>
          <p>
            Outside of work I like to spend my time in exercising, badminton,
            chess, foosball, body building, zumba etc.
          </p>
        </div>
        <div className='col-4'>
          <img src={GokulPhoto} alt='GOKUL' className='myImage' />
        </div>
      </div>

      <div className='row'>
        <h3>Tech Skills</h3>
        <ul className='list-disc columns-3 ml-6'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Hooks </li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Bootstrap</li>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>SASS</li>
          <li>APIs</li>
          <li>Git</li>
          <li>Mirage</li>
          <li>Unit Testing</li>
          <li>End to End Testing</li>
          <li>Storybook</li>
          <li>Sonarqube</li>

          <li>Python</li>
          <li>Django</li>
          <li>Postgres</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
}
