import React from 'react';

class Showmore extends React.Component {
 
  codewarsPercentageColor = (percentage) => {
    if (percentage >= 100) {
      return 'green';
    } else if (percentage >= 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  };


  addCommentHandler = (event) => {
    event.preventDefault();
  };

 
  showComments = (studentDeets) => {
    if (studentDeets.notes.length) {
      return studentDeets.notes.map((note, idx) => {
        return (
          <li key={idx}>
            {note.commenter} says "{note.comment}"
          </li>
        );
      });
    } else {
      return '';
    }
  };

  render() {
    const { studentDeets } = this.props;
    const { codewars } = this.props.studentDeets;
    const { assignments, projects, assessments } =
      this.props.studentDeets.cohort.scores;
    const { resume, linkedin, github, mockInterview } =
      this.props.studentDeets.certifications;

    const percentage = ((codewars.current.total / codewars.goal.total) *100).toFixed(2);

    return (
      <div className="extra-Deets">
        <div>
          <h4>Codewars:</h4>
          <p>Current Total: {codewars.current.total}</p>

          <p>Goal: {codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:{' '}
            <span className={this.codewarsPercentageColor(percentage)}>
              {percentage}%
            </span>
          </p>
        </div>
        <div>
          <h4>Scores:</h4>
          <p>Assignment: {assignments * 100}%</p>
          <p>Projects: {projects * 100}%</p>
          <p>Assessments: {assessments * 100}%</p>
        </div>
        <div>
          <h4>Certifications:</h4>
          <p>Resume: {resume ? '✅ ' : '❌'}</p>
          <p>Linkedin: {linkedin ? '✅' : '❌'}</p>
          <p>Mock Interview: {mockInterview ? '✅' : '❌'}</p>
          <p>GitHub: {github ? '✅' : '❌'}</p>
        </div>
        <div className="commentstuff">
          <h3> 1 On 1 Notes</h3>
          <form>
            <label htmlFor="commenter">Name:</label>
            <input type="text" name="commenter" />
            <br></br>
            <br></br>
            <label htmlFor="comment">Comment:</label>
            <input type="text" name="comment" />

            <button onClick={this.addNoteHander}>Submit</button>
          </form>
          <div>{this.showComments(studentDeets)}</div>
        </div>
      </div>
    );
  }
}
export default Showmore