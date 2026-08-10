

function Education(){
    return(

        <section className="education-section container d-flex align-items-center justify-content-center">
            <div className="education-content">
                <h2 className="d-flex justify-content-center p-3">Education</h2>
                <thead className="education-table table table-striped table-bordered">
                    <tr className="education-table table table-striped table-bordered">

                        <th>Degree</th>
                        <th>University</th>
                        <th>Year of Graduation</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody className="education-table table table-striped table-bordered">
                    <tr>
                        <td>Bachelor of Technology in AI&DS</td>
                        <td>Anna University</td>
                        <td>2026</td>
                        <td>7.6</td>
                    </tr>

                    <tr>
                        <td>12th Standard</td>
                        <td>Bharathi Higher Secondary School</td>
                        <td>2022</td>
                        <td>70%</td>
                    </tr>

                    <tr>
                        <td>10th Standard</td>
                        <td>Bharathi Higher Secondary School</td>
                        <td>2020</td>
                        <td>80%</td>
                    </tr>
                </tbody>
            </div>
        </section>
    );

}

export default Education;