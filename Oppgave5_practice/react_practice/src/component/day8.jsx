//통계표
import './day8.css'
const populationData = [
    { year: 2014, population: 5100000 },
    { year: 2015, population: 5200000 },
    { year: 2016, population: 5300000 },
    { year: 2017, population: 5400000 },
    { year: 2018, population: 5500000 },
    { year: 2019, population: 5600000 },
    { year: 2020, population: 5700000 },
    { year: 2021, population: 5800000 },
    { year: 2022, population: 5900000 },
    { year: 2023, population: 6000000 }
  ];
  
  export default function Day8() {
    return (
      <div>
        <h1>Innbyggertall i Norge (de ti siste årene)</h1>
        <table>
          <thead>
            <tr>
              <th>År</th>
              <th>Innbyggertall</th>
            </tr>
          </thead>
          <tbody>
            {populationData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{data.population.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }