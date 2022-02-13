export default function Blog() {
  return (
    <div className="contaner my-5">
      <div className="row">
        <div className="col-12">
          <h1>Blog</h1>

          <a
            className="my-5  anchor d-block"
            href="https://medium.com/@gokul.srinivasan22/lets-explore-about-react-js-fb5ce4ebb78c"
            target="_blank"
          >
            <h3>What is React JS</h3>
            <p className="mb-0 text-xs">Apr 20, 2020</p>
          </a>

          <a
            className="my-5  anchor d-block"
            href="https://medium.com/@gokul.srinivasan22/react-hooks-and-its-advantages-c54471da806"
            target="_blank"
          >
            <h3>React Hooks and its Advantages</h3>
            <p className="mb-0 text-xs">Jun 20, 2020</p>
          </a>

          <a
            className="my-5 anchor d-block"
            href="https://medium.com/@gokul.srinivasan22/storybook-and-its-addons-bdadaf73b4c3"
            target="_blank"
          >
            <h3>Storybook and its Addons</h3>
            <p className="mb-0 text-xs">Sep 27, 2020</p>
          </a>
        </div>
      </div>
    </div>
  );
}
