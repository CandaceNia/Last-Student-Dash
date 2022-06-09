import React from 'react';
  import Cohort from './Cohort';

  class CohortList extends React.Component {
  
    pullCohorts = (data) => {
      const newArr = [];
      const cohorts = new Set(data.map((element) => element.cohort.cohortCode));
      for (let season of cohorts) {
        newArr.push(season);
      }
      return newArr;
    };

   
    showSemester = (data, updateCohort) => {
      const semesterArr = this.pullCohorts(data);

      semesterArr.unshift('All Students');

      return semesterArr.map((semester, idx) => {
        return (
          <Cohort key={idx} semester={semester} updateCohort={updateCohort} />
        );
      });
    };

    render() {
      const { data, updateCohort } = this.props;
      return (
        <div className="CohortList">
          <h2>Choose a Class by Start Date</h2>
          <br></br>
          {this.showSemester(data, updateCohort)}
        </div>
      );
    }
  }

  export default CohortList; 