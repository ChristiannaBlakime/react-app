import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import 'bootstrap/dist/css/bootstrap.min.css'

interface CountryItem {
  country?: string;
  percent?: number;
}

const CountriesArrayRenderer = ({ label, description, data }: ControlProps) => (
  <div className="mb-4">
    <h5 className="fw-bold">{label}</h5>
    {description && <p className="text-muted small">{description}</p>}
    
    <div className="list-group">
      {Array.isArray(data) && data.map((item, index) => (
        <div key={index} className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>{item.country || 'Pays inconnu'}</span>
            <div className="d-flex align-items-center w-50">
              <div className="progress flex-grow-1 me-2" style={{ height: '10px' }}>
                <div 
                  className="progress-bar bg-success" 
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <span className="text-nowrap">{item.percent}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default withJsonFormsControlProps(CountriesArrayRenderer);