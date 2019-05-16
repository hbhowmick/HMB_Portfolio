import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { NavLink } from 'react-router-dom';


class Timeline extends Component {
  render() {
    return (
      <div className="col-md-7">
        <div className="timeline">
          <div className="card left">
            <div className="content">
              <h3>GIS Consultant</h3>
              <h4>Southfield Redevelopment Authority</h4>
              <h5>South Weymouth, MA</h5>
              <h6>Sep 2018 - Present</h6>
              <ul>
                <li>Consolidated and managed datasets; created new shapefiles from CAD drawings and through georeferencing paper maps.</li>
                <li>Created ArcGIS Online web maps and applications to visualize historic use, phased land transfers, and redevelopment plans.</li>
                <li>Created interactive, dynamic planning model to engage developers, stakeholders, and public.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Software Developer</h3>
              <h4>Coding Temple</h4>
              <h5>Boston, MA</h5>
              <h6>Jan - Mar 2019</h6>
              <ul>
                <li>Built backend applications using Python, Flask frameworks.</li>
                <li>Exported/Imported data between different data sources using SQL.</li>
                <li>Used Python NumPy, SciPy, Pandas packages to perform dataset manipulation.</li>
                <li>Composed complex SQL queries to extract data from relational databases.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>GIS Analyst</h3>
              <h4>Cape Cod Commission</h4>
              <h5>Barnstable, MA</h5>
              <h6>Nov 2015 - Aug 2018</h6>
              <ul>
                <li>Created, edited, updated, and managed new and existing datasets, while maintaining appropriate and detailed metadata.</li>
                <li>Mapped bicycle and railroad routes and interpolated elevation for profiles used in transportation planning decision-making.</li>
                <li>Developed methodology, using Network Analyst, to assess pedestrian access to popular community destinations across Cape Cod; conducted gap analysis by comparing existing to ideal conditions and prioritized needs for improved infrastructure.</li>
                <li>classNameified raster imagery into land covers using supervised/unsupervised classNameification, segmentation, and feature extraction.</li>
                <li>Worked on variety of ongoing, long-term projects, such as identifying regional activity centers across Cape Cod to update county’s Regional Policy Plan documents and inform new regulations; documented methods in ArcGIS Online story map.</li>
                <li>Created statistical benchmarks of economy, housing, water, etc., by integrating assessor/census/agency datasets; worked with Web Development team to design and build interactive web application to generate report cards for user-defined geographies.</li>
                <li>Conducted spatial fiscal impact analysis to allocate town revenues and expenditures to individual parcels, based on geographically distributed factors; estimated fiscal impacts of different land uses, as well as new and redevelopment projects.</li>
                <li>Designed and delivered presentations of project methods/results and offered recommendations to internal and external teams.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Adjunct Instructor/Lecturer</h3>
              <h4>Worcester Polytechnic Institute</h4>
              <h5>Worcester, MA</h5>
              <h6>Mar - May 2016</h6>
              <ul>
                <li>Prepared content and lectured twice per week for a class of twenty-five undergraduate students, covering topics including software basics, editing, data management, databases, cartography, geocoding, raster analysis, and coordinate systems.</li>
                <li>Adapted course syllabus, twelve supplemental assignments, and final project to meet diverse interests and goals.</li>
                <li>Maintained consistent office hours and thoughtfully and efficiently graded all written and oral assignments.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>GIS Intern</h3>
              <h4>Cape Cod Commission</h4>
              <h5>Barnstable, MA</h5>
              <h6>Jun - Sep 2015</h6>
              <ul>
                <li>Analyzed forest loss and development gain across Cape Cod (2001- 2011), using National Land Cover Database data.</li>
                <li>Developed land use pattern metrics to compare Cape Cod to U.S. counties with similar seasonal tourism character, as part of Barnstable Area Regional Trends initiative and to evaluate success of the Cape Cod Commission’s regulatory efforts.</li>
                <li>Extracted geospatial information by town to calculate and compare socioeconomic indicators.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Teaching Assistant</h3>
              <h4>Clark  University</h4>
              <h5>Worcester, MA</h5>
              <h6>Jan - May 2015</h6>
              <ul>
                <li>Attended lectures and graded weekly tutorial assignments, as well as exams and projects.</li>
                <li>Held weekly office hours; helped fifty students to master concepts/skills and plan/execute final projects.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>GIS Intern</h3>
              <h4>Town of Andover</h4>
              <h5>Andover, MA</h5>
              <h6>May - Jul 2014</h6>
              <ul>
                <li>Georeferenced and digitized conservation easements from survey maps and conducted census data analyses.</li>
                <li>Collected GPS locations and designed map templates with standardized symbols for recreation project.</li>
                <li>Attended project scope meetings with members of the planning and engineering divisions.</li>
                <li>Updated common database and created work instructions detailing steps for replication.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>GISDE Computer Lab Manager</h3>
              <h4>Clark University</h4>
              <h5>Worcester, MA</h5>
              <h6>Jan - Dec 2014</h6>
              <ul>
                <li>Managed computer space shared by 50+ students.</li>
                <li>Address student issues.</li>
                <li>Inventoried and upgraded computer equipment as needed.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>Contract Development & Assessment Specialist/Analyst</h3>
              <h4>Sunovion Pharmaceuticals, Inc.</h4>
              <h5>Marlborough, MA</h5>
              <h6>May 2012 - Jul 2013</h6>
              <ul>
                <li>Composed and executed new agreements/amendments for twenty-four regional pharmacy benefit accounts.</li>
                <li>Analyzed financial models and examined net sales forecasts for strategic product formulary positioning.</li>
                <li>Managed team’s contract repository; developed tracking log to organize contract updates and highlight critical deadlines.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Contract Operations Specialist</h3>
              <h4>Sunovion Pharmaceuticals, Inc.</h4>
              <h5>Marlborough, MA</h5>
              <h6>Jul 2010 - May 2012</h6>
              <ul>
                <li>Paid Medicaid/Medicare rebate invoices while maintaining Sarbanes-Oxley documentation for thorough record keeping.</li>
                <li>Analyzed and disputed individual Medicaid claims, resulting in over $800,000 saved for the company.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>Finance Specialist Intern</h3>
              <h4>InVivo Therapeutics Corporation</h4>
              <h5>Cambridge, MA</h5>
              <h6>Jun - Jul 2009</h6>
              <ul>
                <li>Participated in conference calls with business partners, investors, and financial institutions.</li>
                <li>Acted as lead correspondent with company contact at KPMG.</li>
                <li>Edited and updated financial statements, business plan, and private placement memorandum.* Created a financial statement analysis report based on ratio and industry analyses.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Outside Plant Engineering and Planning Intern</h3>
              <h4>FairPoint Communications</h4>
              <h5>Manchester, NH</h5>
              <h6>Dec 2008 - Jan 2009</h6>
              <ul>
                <li>Updated and qualified New Hampshire and Vermont customers for DSL by measuring distances to the central office.</li>
                <li>Created technical schematics of central offices using Microsoft Visio.</li>
              </ul>
            </div>
          </div>

          <div className="card left">
            <div className="content">
              <h3>Business Intern</h3>
              <h4>Lexington Insurance Co.</h4>
              <h5>Boston, MA</h5>
              <h6>Jun - Aug 2008</h6>
              <ul>
                <li>Updated e-mail database for 3,000 clients via outreach phone calls and e-mails significantly ahead of schedule.</li>
                <li>Overhauled e-folders for company’s aim to go paperless and restructured paper insurance policy binders.</li>
              </ul>
            </div>
          </div>

          <div className="card right">
            <div className="content">
              <h3>Outside Plant Engineering and Planning Intern</h3>
              <h4>Verizon New England Inc.</h4>
              <h5>Manchester, NH</h5>
              <h6>May - Aug 2007</h6>
              <ul>
                <li>Updated and qualified New Hampshire and Vermont customers for DSL by measuring distances to the central office.</li>
                <li>Created technical schematics of central offices using Microsoft Visio.</li>
                <li>Organized card-making event for hospital children as Volunteer Committee Chairperson.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Timeline;
