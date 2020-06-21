const About = () => {
  const view = `
    <div class="About">
      <p>
        I did this project as a hobby. I wanted
         to do something with javascript vanilla.
      </p>
      <ul>
        <li>
          The data is selected through the <a href="https://punkapi.com/documentation/v2">API PUNK</a>,
          from which one of the pages with a certain
          item number is extracted. The same asynchronous
          function is also used to obtain the properties of
          a specific item.
        </li>
        <li>
          I also added a small route manager.
        </li>
        <li>
          In the styles: use bootstrap for the grid and css for the other properties.
        </li>
      </ul>
    </div>
  `
  return view
}

export default About