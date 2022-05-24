function deba(input) {
  let country = input[0];
  let discipline = input[1];
  let complexityPoints = 0;
  let executionPoints = 0;

  switch (country) {
    case 'Russia':
      {
        switch (discipline) {
          case 'ribbon':
            {
              complexityPoints = 9.1;
              executionPoints = 9.4;
            }
            break;
          case 'hoop':
            {
              complexityPoints = 9.3;
              executionPoints = 9.8;
            }
            break;
          case 'rope':
            {
              complexityPoints = 9.6;
              executionPoints = 9.0;
            }
            break;
        }
      }
      break;
    case 'Bulgaria':
      {
        switch (discipline) {
          case 'ribbon':
            {
              complexityPoints = 9.6;
              executionPoints = 9.4;
            }
            break;
          case 'hoop':
            {
              complexityPoints = 9.55;
              executionPoints = 9.75;
            }
            break;
          case 'rope':
            {
              complexityPoints = 9.5;
              executionPoints = 9.4;
            }
            break;
        }
      }
      break;
    case 'Italy':
      {
        switch (discipline) {
          case 'ribbon':
            {
              complexityPoints = 9.2;
              executionPoints = 9.5;
            }
            break;
          case 'hoop':
            {
              complexityPoints = 9.45;
              executionPoints = 9.35;
            }
            break;
          case 'rope':
            {
              complexityPoints = 9.7;
              executionPoints = 9.15;
            }
            break;
        }
      }
      break;
  }
  let totalScore = complexityPoints + executionPoints;
  let scoreLeft = 20 - totalScore;
  let percentLeft = (scoreLeft / 20) * 100;

  console.log(
    `The team of ${country} get ${totalScore.toFixed(3)} on ${discipline}.`
  );
  console.log(`${percentLeft.toFixed(2)}%`);
}

deba(['Bulgaria', 'ribbon']);
