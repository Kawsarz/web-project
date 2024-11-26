// CvComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function CvComponent() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/cv')
            .then(response => {
                setCvData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="cv-component">
            {cvData ? (
                <div>
                    {/* Render your CV data here */}
                    <p>{JSON.stringify(cvData.FirstName)}</p>
                    <p>{JSON.stringify(cvData.LastName)}</p>
                    <p>{JSON.stringify(cvData.Matricule)}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
          
        </div>
    );
}

export default CvComponent;
