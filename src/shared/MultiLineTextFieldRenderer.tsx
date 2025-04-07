import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import 'bootstrap/dist/css/bootstrap.min.css'


const MultiLineTextFieldRenderer = ({ label, description, data }: ControlProps) => (
  <div className="mb-4">
    <label className="form-label fw-bold">{label}</label>
    {description && (
      <p className="text-muted small mb-2">
        {description}
      </p>
    )}
    
    <div className="p-3 bg-light rounded-2 border">
      {data ? (
        <div style={{ whiteSpace: 'pre-line' }}>
          {data}
        </div>
      ) : (
        <span className="text-muted fst-italic">
           No Description Available
        </span>
      )}
    </div>
  </div>
);

export default withJsonFormsControlProps(MultiLineTextFieldRenderer);