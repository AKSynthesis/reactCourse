import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function({input}) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest;

    console.log(resultsData);
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Ivested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearDate => {
                const totalInterest = yearDate.valueEndOfYear - (yearDate.annualInvestment * yearDate.year) - initialInvestment;
                const totalAmountInvestested = yearDate.valueEndOfYear - totalInterest;

                return <tr key={yearDate.year}>
                    <td>{yearDate.year}</td>
                    <td>{formatter.format(yearDate.valueEndOfYear)}</td>
                    <td>{formatter.format(yearDate.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvestested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}