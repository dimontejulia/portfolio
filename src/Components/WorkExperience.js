import React from "react";

export default function WorkExperience(props) {
  return (
    <div id="work">
      <div id="banner" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2 class="display-4">Work Experience</h2>
        </div>
      </div>
      <h3>Product Support Engineer - SAP, Toronto</h3>
      <h5>May 2019 - December 2019</h5>
      <ul>
        <li>
          Investigated and resolved customer incidents via on issues relating to
          Process and Test Management on the Application Life-cycle management
          software.
        </li>
        <li>
          Monitored and managed the global incident queue, handling escalations,
          very high/high incidents, and ensuring that SLAs are fulfilled for all
          customer incidents.
        </li>
        <li>Achieved an overall customer satisfaction rate of over 80%.</li>
      </ul>

      <h3>IT and Operations Intern - Iris Technologies, Toronto</h3>
      <h5>Summer 2018</h5>
      <ul>
        <li>
          Updated and maintained website adding a number of features including
          payment with stripe and design changes.
        </li>
        <li>
          Helped with client outreach by researching and contacting prospective
          clinics and customers.
        </li>
      </ul>

      <h3>Software Testing Intern - ScribbleLive, Toronto</h3>
      <h5>Summer 2017</h5>
      <ul>
        <li>
          Collaborated with a small team of developers and managers in daily
          standups to complete and test tasks in bi-weekly sprints.
        </li>
        <li>
          Manually tested all changes made on the platform and checked for
          errors or failures documenting workflow with Jira.
        </li>
      </ul>

      <h3>Quality Assurance Intern - Ecobee, Toronto</h3>
      <h5>Summer 2016</h5>
      <ul>
        <li>
          Tested a variety of mobile, web, and physical products using
          simulators as well as manual testing.
        </li>
        <li>
          Worked with a team of professionals to troubleshoot and efficiently
          report software bugs or errors.
        </li>
      </ul>
    </div>
  );
}
