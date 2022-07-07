import * as React from 'react';
import "./ResultsStatus.css";

function ResultsFound(props) {

  return (
    <div className='resultsFound'>
      <div className='resultsFoundHeader'>
        Oops, you've been hacked!! Your personal data was stolen.
      </div>
      <div className='resultsFoundDescription'>
        Found {props.results.length} results. For more info please scroll down.
      </div>
    </div>
  );
}

function NoResultsFound() {

  return (
    <div className="noResultsFound">
      <div className='resultsFoundHeader'>
      Congrats!! You're not hacked
      </div>
      <div className='noResultsFoundDescription'>
        No results found for the searched account.
      </div>
    </div>
  );
}

export default function ResultsStatus(props) {
  if (props.results?.length) {
    return (<ResultsFound results={props.results}></ResultsFound>);
  } else {
    return <NoResultsFound></NoResultsFound>;
  }
}
